import {
  Button,
  EnterTag,
  Input,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../../Component";
import FloatingActionButton from "../../../../Component/UI/FloatingActionButton";
import TableCustom from "../../../../Component/UI/Table";
import {
  DefaultThumbnailsPlaylist,
  WorldIcon,
  ShuffleIcon,
  RepeatIcon,
  AddIcon,
} from "../../../../assets/icon";
import { dataExampleRecord, ConfigRecordColTale } from "../detail/_configTable";

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
  const floatingAction = [
    {
      name: "Thêm bản ghi",
      icon: <AddIcon className="text-primary" />,
      action: () => {},
    },
  ];
  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Playlist Top ca khúc 2021</TextHeader>
      <div className="mt-4  flex  items-start justify-between gap-8">
        <div className="flex w-[274px] flex-shrink-0 flex-col gap-4 rounded-lg">
          <DefaultThumbnailsPlaylist />

          <div className="border-second flex w-full flex-col gap-2 border-b-[1px] border-solid pb-4 ">
            <TextLabel idInput="title">
              Tiêu đề:<span className="text-error">*</span>
            </TextLabel>
            <Input bordered id="title" value={" Top ca khúc 2021"} />
          </div>
          <div className="border-second flex flex-col gap-4 border-b-[1px] border-solid pb-4">
            <div className="flex items-center justify-between">
              <h5 className="text-size-primary font-semibold">Người tạo:</h5>
              <span className="text-third">Super Admin</span>
            </div>
            <div className="flex items-center justify-between">
              <h5 className="text-size-primary font-semibold">Tổng số:</h5>
              <span className="text-third">8 bản ghi</span>
            </div>
            <div className="flex items-center justify-between">
              <h5 className="text-size-primary font-semibold">
                Tổng thời lượng:
              </h5>
              <span className="text-third">01:31:16</span>
            </div>
          </div>
          <div className="border-second flex w-full flex-col gap-2 border-b-[1px] border-solid pb-4 ">
            <TextLabel idInput="title">Mô tả:</TextLabel>
            <Input
              type="area"
              height={150}
              bordered
              id="title"
              value={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  labore et dolore magna aliqua."
              }
            />
          </div>
          <div className="border-second border-b-[1px] border-solid pb-4 ">
            <div className="box-start flex-shrink-0 flex-wrap gap-4">
              <EnterTag />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="box-start gap-2">
              <WorldIcon />
              <h5 className="text-third">Hiển thị ở chế độ công khai</h5>
            </div>
            <div className="box-start gap-2 text-primary">
              <ShuffleIcon />
              <h5 className="text-third">Phát ngẫu nhiên</h5>
            </div>
            <div className="box-start gap-2 ">
              <RepeatIcon />
              <h5 className="text-third">Lặp lại</h5>
            </div>
          </div>
        </div>
        <div className="w-full">
          <TableCustom
            numberCol={12}
            data={dataExampleRecord}
            col={ConfigRecordColTale}
          />

          <div className="box-start mt-10 gap-2">
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

export default EditPlaylist;
