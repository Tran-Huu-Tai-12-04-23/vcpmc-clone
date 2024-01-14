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
import { DefaultThumbnailsPlaylist, AddIcon } from "../../../assets/icon";
import { dataExampleRecord, ConfigRecordColTale } from "../detail/_configTable";
import { useRouter } from "../../../Routes/hooks";
import PathUrl from "../../../Routes/path-url";
import { useParams } from "react-router-dom";

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
  const floatingAction = [
    {
      name: "Thêm bản ghi",
      icon: <AddIcon className="text-primary" />,
      action: () => {
        router.push(PathUrl.URL_PLAYLIST + "/" + PathUrl.ADD_RECORD + "/" + id);
      },
    },
  ];
  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Playlist Top ca khúc 2021</TextHeader>
      <div className="mt-4  flex  items-start justify-between gap-8">
        <div className="flex w-[274px] flex-shrink-0 flex-col gap-4 rounded-lg">
          <div className="flex flex-col gap-2 border-b-[1px] border-solid border-second pb-4 ">
            <TextLabel idInput="title">Ảnh bìa:</TextLabel>
            <ButtonUpload />
          </div>
          <div className="flex w-full flex-col gap-2 border-b-[1px] border-solid border-second pb-4 ">
            <TextLabel idInput="title">
              Tiêu đề:<span className="text-error">*</span>
            </TextLabel>
            <Input bordered id="title" />
          </div>
          <div className="flex flex-col gap-4 border-b-[1px] border-solid border-second pb-4">
            <div className="flex items-center justify-between">
              <h5 className="text-size-primary font-semibold">Tổng số:</h5>
              <span className="text-third">0 bản ghi</span>
            </div>
            <div className="flex items-center justify-between">
              <h5 className="text-size-primary font-semibold">
                Tổng thời lượng:
              </h5>
              <span className="text-third">--:--:--</span>
            </div>
          </div>
          <div className="flex w-full flex-col gap-2 border-b-[1px] border-solid border-second pb-4 ">
            <TextLabel idInput="title">Mô tả:</TextLabel>
            <Input type="area" height={150} bordered id="title" />
          </div>
          <div className="w-full">
            <TextLabel idInput="title" className="mb-2">
              Chủ đề:
            </TextLabel>
            <EnterTag />
            <div className="mt-4 flex w-full gap-4">
              <Switch defaultChecked />
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
            data={[]}
            col={ConfigRecordColTale}
          />
          <div className="box-start mt-4 gap-2">
            <span className="text-error">*</span>
            <span className="text-third">
              là những trường thông tin bắt buộc
            </span>
          </div>

          <div className="center-item mt-10 gap-10">
            <Button sizetype="hug" typebtn="outline">
              Hủy
            </Button>
            <Button sizetype="hug" typebtn="primary">
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
