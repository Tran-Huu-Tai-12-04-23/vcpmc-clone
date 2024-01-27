import { Switch } from "antd";
import {
  Button,
  ButtonUpload,
  EnterTag,
  Input,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../Component";
import FloatingActionButton from "../../../Component/UI/FloatingActionButton";
import TableCustom from "../../../Component/UI/Table";
import { AddIcon, DefaultThumbnailsPlaylist } from "../../../assets/icon";
import { useRouter } from "../../../Routes/hooks";
import PathUrl from "../../../Routes/path-url";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IPlaylist } from "../../../Model/playlist.model";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { RootState, actionPlaylist } from "../../../State";
import { IRecord } from "../../../Model/record.model";
import { ConfigColRecordsAdded } from "../detail/_configTable";
import Helper from "../../../Helper";
import { bindActionCreators } from "@reduxjs/toolkit";

const PagingItems = [
  {
    name: "Playlist",
  },
  {
    name: "Chi tiết playlist",
  },
  {
    name: "Chỉnh sửa ",
  },
];

function AddPlaylist() {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { addPlaylist } = bindActionCreators(actionPlaylist, dispatch);
  const { user } = useSelector((state: RootState) => state.authenticate);
  const { data } = useSelector((state: RootState) => state.records);
  const [thumbnails, setThumbnails] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [mode, setMode] = useState<boolean>(false);
  const [recordsAdded, setRecordsAdded] = useState<IRecord[]>([]);
  const [totalDuration, setTotalDuration] = useState<number>(0);

  const floatingAction = [
    {
      name: "Thêm bản ghi",
      icon: <AddIcon className="text-primary" />,
      action: () => {
        const processData: IPlaylist = {
          title,
          amountRecord: recordsAdded.length,
          totalDuration: totalDuration,
          tags,
          createAt: dayjs(),
          personCreated: user?.username + " ",
          description,
          mode, //true private or else public
          records: recordsAdded,
          thumbnails,
        };
        localStorage.setItem("process-playlist", JSON.stringify(processData));
        router.push(PathUrl.URL_PLAYLIST + "/" + PathUrl.ADD_RECORD + "/" + id);
      },
    },
  ];

  const handleSelectFile = (val: string) => {
    val && setThumbnails(val);
  };

  const handleAddPlaylist = () => {
    const newPlaylist: IPlaylist = {
      title,
      amountRecord: recordsAdded.length,
      totalDuration: totalDuration,
      tags,
      createAt: dayjs(),
      personCreated: user?.username || "",
      description,
      mode, //true private or else public
      records: recordsAdded,
      thumbnails,
    };

    if (Helper.isObjectEmpty(newPlaylist)) {
      return;
    }

    addPlaylist(newPlaylist, () => {
      localStorage.removeItem("process-playlist");
      router.back();
    });
  };

  // init record added
  useEffect(() => {
    const rcAddedString = localStorage.getItem("rc-added");
    if (!rcAddedString) return;
    try {
      const recordsAddedData: IRecord[] = JSON.parse(rcAddedString);
      if (recordsAddedData.length > 0) setRecordsAdded(recordsAddedData);
    } catch (err) {
      // Handle parsing error if needed
      console.error("Error parsing recordsAddedData:", err);
    }
  }, []);

  /// ca total duration of records added
  useEffect(() => {
    const totalDur = recordsAdded.reduce(
      (acc, record) => acc + (record.duration || 0),
      0,
    );
    if (recordsAdded.length <= 0) {
      setTotalDuration(0);
    } else {
      setTotalDuration(totalDur);
    }
  }, [recordsAdded]);

  // get process data
  useEffect(() => {
    let processData = localStorage.getItem("process-playlist");
    if (processData) {
      try {
        const playlist: IPlaylist = JSON.parse(processData);
        setTitle(playlist?.title || "");
        setThumbnails(playlist?.thumbnails || "");
        setTags(playlist?.tags || []);
        setDescription(playlist?.description || "");
        setMode(playlist?.mode || false);
      } catch (error) {
        console.error("Error parsing process-playlist data:", error);
      }
    }
  }, []);

  const configColRecordsAdded = ConfigColRecordsAdded({
    onRemove: (id: string) => {
      setRecordsAdded((prev) => prev.filter((rc) => rc.id != id));
    },
  });

  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Playlist Top ca khúc 2021</TextHeader>
      <div className="mt-4  flex  items-start justify-between gap-8">
        <div className="flex w-[274px] flex-shrink-0 flex-col gap-4 rounded-lg">
          <div className="flex flex-col gap-2 border-b-[1px] border-solid border-second pb-4 ">
            <TextLabel idInput="title">Ảnh bìa:</TextLabel>
            {thumbnails && (
              <img
                className="h-[274px] w-[274px] rounded-lg"
                src={thumbnails}
              />
            )}
            <ButtonUpload onResult={handleSelectFile} />
          </div>
          <div className="flex w-full flex-col gap-2 border-b-[1px] border-solid border-second pb-4 ">
            <TextLabel idInput="title">
              Tiêu đề:<span className="text-error">*</span>
            </TextLabel>
            <Input
              variant="outlined"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4 border-b-[1px] border-solid border-second pb-4">
            <div className="flex items-center justify-between">
              <h5 className="text-size-primary font-semibold">Tổng số:</h5>
              <span className="text-third">{recordsAdded.length} bản ghi</span>
            </div>
            <div className="flex items-center justify-between">
              <h5 className="text-size-primary font-semibold">
                Tổng thời lượng:
              </h5>
              <span className="text-third">
                {totalDuration <= 0
                  ? "--:--:--"
                  : Helper.convertDurationToString(totalDuration)}
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col gap-2 border-b-[1px] border-solid border-second pb-4 ">
            <TextLabel idInput="description">Mô tả:</TextLabel>
            <Input
              type="area"
              height={150}
              variant="outlined"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="w-full">
            <TextLabel idInput="title" className="mb-2">
              Chủ đề:
            </TextLabel>
            <EnterTag
              defaultValue={tags}
              onChangeTag={(tags) => {
                setTags(tags);
              }}
            />
            <div className="mt-4 flex w-full gap-4">
              <Switch
                defaultChecked
                onChange={(checked) => {
                  setMode(checked);
                }}
              />
              <TextLabel>Chế độ công khai</TextLabel>
            </div>
          </div>
        </div>
        <div className="w-full">
          <TableCustom
            locale={{
              emptyText: (
                <div className="flex items-center justify-center gap-2">
                  <span>Vui lòng chọn bản ghi để thêm vào Playlist</span>
                  <span className="mt-2 text-error">*</span>
                </div>
              ),
            }}
            numberCol={12}
            data={recordsAdded}
            col={configColRecordsAdded}
          />
          <div className="box-start mt-4 gap-2">
            <span className="text-error">*</span>
            <span className="text-third">
              là những trường thông tin bắt buộc
            </span>
          </div>

          <div className="center-item mt-10 gap-10">
            <Button
              sizetype="hug"
              typebtn="outline"
              onClick={() => {
                localStorage.removeItem("rc-added");
                router.back();
              }}
            >
              Hủy
            </Button>
            <Button
              sizetype="hug"
              typebtn="primary"
              onClick={handleAddPlaylist}
            >
              Lưu
            </Button>
          </div>
        </div>
        <div className="w-fit flex-shrink-0 pl-4">
          <FloatingActionButton floatingActionButtonConfig={floatingAction} />
        </div>
      </div>
    </div>
  );
}

export default AddPlaylist;
