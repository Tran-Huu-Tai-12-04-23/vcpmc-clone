import { useEffect, memo, useState } from "react";
import { Switch } from "antd";
import {
  Button,
  EnterTag,
  Input,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../Component";
import FloatingActionButton from "../../../Component/UI/FloatingActionButton";
import TableCustom from "../../../Component/UI/Table";
import { DefaultThumbnailsPlaylist, AddIcon } from "../../../assets/icon";
import { useRouter } from "../../../Routes/hooks";
import PathUrl from "../../../Routes/path-url";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { RootState, actionPlaylist } from "../../../State";
import { IRecord } from "../../../Model/record.model";
import { ConfigRecordColTaleAdded } from "../add-record/_configTable";
import { IPlaylist } from "../../../Model/playlist.model";
import Helper from "../../../Helper";

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

function EditPlaylist() {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { currentPlaylist } = useSelector(
    (state: RootState) => state.playlists,
  );
  const { changeCurrentPlaylist, updatePlaylistById } = bindActionCreators(
    actionPlaylist,
    dispatch,
  );
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [thumbnails, setThumbnails] = useState<string>("");
  const [recordsAdded, setRecordsAdded] = useState<IRecord[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [mode, setMode] = useState<boolean>(false);
  const [totalDuration, setTotalDuration] = useState<number>(0);

  const floatingAction = [
    {
      name: "Thêm bản ghi",
      icon: <AddIcon className="text-primary" />,
      action: () => {
        const processData = {
          ...currentPlaylist,
          title,
          amountRecord: recordsAdded.length,
          totalDuration: totalDuration,
          tags,
          description,
          mode, //true private or else public
          records: recordsAdded,
          thumbnails,
        };
        localStorage.setItem("process-data-edit", JSON.stringify(processData));
        localStorage.setItem("rc-added", JSON.stringify(recordsAdded));
        router.push(PathUrl.URL_PLAYLIST + "/" + PathUrl.ADD_RECORD + "/" + id);
      },
    },
  ];

  const handleUpdate = async () => {
    if (currentPlaylist === null) return;
    const newData: IPlaylist = {
      ...currentPlaylist,
      title,
      amountRecord: recordsAdded.length,
      totalDuration: totalDuration,
      tags,
      description,
      mode, //true private or else public
      records: recordsAdded,
      thumbnails,
    };

    if (Helper.isObjectEmpty(newData)) {
      return;
    }

    id &&
      updatePlaylistById(id, newData, () => {
        clearLocalData();
        router.back();
      });
  };

  const clearLocalData = () => {
    localStorage.removeItem("rc-added");
    localStorage.removeItem("process-data-edit");
  };

  //init value
  useEffect(() => {
    if (!currentPlaylist) return;
    setTitle(currentPlaylist.title);
    setDescription(currentPlaylist.description);
    setThumbnails(currentPlaylist.thumbnails || "");
    setTags(currentPlaylist.tags);
    setRecordsAdded(currentPlaylist.records);
  }, [currentPlaylist]);

  //init data playlist
  useEffect(() => {
    const checkReload = id == currentPlaylist?.id;
    if (!checkReload) {
      id && changeCurrentPlaylist(id);
    }
  }, []);

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

  // get process data to edit
  useEffect(() => {
    const processPlaylistString = localStorage.getItem("process-data-edit");
    if (!processPlaylistString) return;
    try {
      const processPlaylist: IPlaylist = JSON.parse(processPlaylistString);

      if (!processPlaylist) return;

      setTitle(processPlaylist.title);
      setDescription(processPlaylist.description);
      setThumbnails(processPlaylist.thumbnails || "");
      setTags(processPlaylist.tags);
    } catch (err) {
      // Handle parsing error if needed
      console.error("Error parsing processData:", err);
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

  const configCol = ConfigRecordColTaleAdded({
    onRemove: (id: string) => {
      setRecordsAdded((prev) => prev.filter((rc) => rc.id !== id));
    },
  });

  return (
    currentPlaylist && (
      <div className="w-full">
        <Paging items={PagingItems} />
        <TextHeader>Playlist {currentPlaylist.title}</TextHeader>
        <div className="mt-4  flex  items-start justify-between gap-8">
          <div className="flex w-[274px] flex-shrink-0 flex-col gap-4 rounded-lg">
            {thumbnails ? (
              <img
                className="h-full w-full rounded-lg"
                src={thumbnails}
                alt={currentPlaylist.title}
              />
            ) : (
              <DefaultThumbnailsPlaylist />
            )}

            <div className="flex w-full flex-col gap-2 border-b-[1px] border-solid border-second pb-4 ">
              <TextLabel idInput="title">
                Tiêu đề:<span className="text-error">*</span>
              </TextLabel>
              <Input
                variant="outlined"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="flex flex-col gap-4 border-b-[1px] border-solid border-second pb-4">
              <div className="flex items-center justify-between">
                <h5 className="text-size-primary font-semibold">Người tạo:</h5>
                <span className="text-third">
                  {currentPlaylist.personCreated}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <h5 className="text-size-primary font-semibold">Tổng số:</h5>
                <span className="text-third">
                  {recordsAdded.length} bản ghi
                </span>
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
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>
            <div className="w-full">
              <TextLabel idInput="title" className="mb-2">
                Chủ đề:
              </TextLabel>
              <EnterTag
                defaultValue={currentPlaylist.tags}
                onChangeTag={(tags) => setTags(tags)}
              />
              <div className="mt-4 flex w-full gap-4">
                <Switch
                  defaultChecked={currentPlaylist.mode}
                  onChange={(checked) => setMode(checked)}
                />
                <TextLabel>Chế độ công khai</TextLabel>
              </div>
            </div>
          </div>
          <div className="w-full">
            <TableCustom numberCol={12} data={recordsAdded} col={configCol} />

            <div className="center-item mt-10 gap-10">
              <Button
                sizetype="hug"
                typebtn="outline"
                onClick={() => {
                  clearLocalData();
                  router.back();
                }}
              >
                Hủy
              </Button>
              <Button sizetype="hug" typebtn="primary" onClick={handleUpdate}>
                Lưu
              </Button>
            </div>
          </div>
          <div className="w-fit flex-shrink-0 pl-4">
            <FloatingActionButton floatingActionButtonConfig={floatingAction} />
          </div>
        </div>
        <div className="box-start mt-10 gap-2">
          <span className="text-error">*</span>
          <span className="text-third">là những trường thông tin bắt buộc</span>
        </div>
      </div>
    )
  );
}

export default memo(EditPlaylist);
