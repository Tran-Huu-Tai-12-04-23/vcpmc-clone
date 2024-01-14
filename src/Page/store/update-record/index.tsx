import { Avatar } from "antd";
import {
  Button,
  DropDown,
  Input,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../Component";
import FloatingActionButton from "../../../Component/UI/FloatingActionButton";
import CancelIcon from "../../../assets/icon/cancel";
import { CameraIcon, FolderMusicIcon } from "../../../assets/icon";
import dayjs from "dayjs";
import { useState } from "react";
const pagingUpdateRecord = [
  {
    name: "Kho bản ghi",
    path: "",
  },
  {
    name: "Cập nhật thông tin",
    path: "",
  },
];

const genreMusicDropItems = [
  {
    name: "Pop",
    key: 1,
  },
  {
    name: "Ballad",
    key: 2,
  },
  {
    name: "Rock",
    key: 3,
  },
  {
    name: "EDM",
    key: 4,
  },
];
function UpdateRecord() {
  const [genreMusic, setGenreMusic] = useState<any>(genreMusicDropItems[0]);
  const floatingAction = [
    {
      name: "Xóa bản ghi",
      icon: <CancelIcon className="text-error" />,
      action: () => {},
    },
  ];
  return (
    <div className="w-full">
      <Paging items={pagingUpdateRecord} />
      <TextHeader>Bản ghi - Mất em</TextHeader>

      <div className="relative mt-2 flex items-start justify-between gap-10">
        <div className="flex w-full flex-col justify-center">
          <div className="flex h-[700px] w-full items-start justify-center gap-4">
            <div className="flex h-full  w-[570px] flex-col gap-4">
              <div className="flex flex-col items-center  gap-4 rounded-lg bg-input p-4">
                <h5 className="text-[24px] font-semibold text-primary">
                  Thông tin bản ghi
                </h5>

                <div className="relative">
                  <Avatar
                    style={{
                      width: 130,
                      height: 130,
                    }}
                    src={
                      "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"
                    }
                  />
                  <div className="absolute bottom-2 right-0 rounded-full bg-blue-500 p-2">
                    <CameraIcon className=" h-[24px] w-[24px]" />
                  </div>
                </div>
                <div className="center-item gap-2">
                  <FolderMusicIcon />
                  <span className="text-third">Matem.mp3</span>
                </div>

                <div className="flex w-full items-center justify-between">
                  <h5 className="text-size-primary font-semibold">
                    Ngày thêm:
                  </h5>
                  <span className="text-size-primary text-third">
                    07/04/2021 - 17:45:30
                  </span>
                </div>
                <div className="flex w-full items-center justify-between">
                  <h5 className="text-size-primary font-semibold">
                    Người tải lên::
                  </h5>
                  <span className="text-size-primary text-third">
                    Super Admin
                  </span>
                </div>
                <div className="flex w-full items-start justify-between">
                  <h5 className="text-size-primary font-semibold">
                    Người duyệt:
                  </h5>
                  <div className="flex flex-col items-end">
                    <span className="text-size-primary text-third">
                      Hệ thống
                    </span>
                    <span className="text-size-primary text-third">
                      (Tự động phê duyệt)
                    </span>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between">
                  <h5 className="text-size-primary font-semibold">
                    Ngày phê duyệt:
                  </h5>
                  <span className="text-size-primary text-third">
                    07/04/2021 - 17:45:50
                  </span>
                </div>
              </div>
              <div className="mt-auto flex flex-col items-center gap-4 rounded-lg bg-input p-4">
                <h5 className="text-[24px] font-semibold text-primary">
                  Thông tin ủy quyền
                </h5>
                <div className="flex w-full items-center justify-between">
                  <h5 className="text-size-primary font-semibold">
                    Số hợp đồng:
                  </h5>
                  <span className="text-size-primary text-third">BH123</span>
                </div>
                <div className="flex w-full items-center justify-between">
                  <h5 className="text-size-primary font-semibold">
                    Ngày nhận ủy quyền:
                  </h5>
                  <span className="text-size-primary text-third">
                    01/05/2021
                  </span>
                </div>
                <div className="flex w-full items-center justify-between">
                  <h5 className="text-size-primary font-semibold">
                    Ngày hết hạn:
                  </h5>
                  <span className="text-size-primary text-third">
                    01/08/2025
                  </span>
                </div>
                <div className="flex w-full items-center justify-between">
                  <h5 className="text-size-primary font-semibold">
                    Trạng thái:
                  </h5>
                  {dayjs().isBefore(dayjs()) ? (
                    <div className="flex items-center justify-start text-[14px] text-third">
                      <div className="mr-2 h-2 w-2 rounded-full bg-blue-600"></div>
                      <div>Còn thời hạn</div>
                    </div>
                  ) : (
                    <div className=" flex items-center justify-start text-[14px] text-third">
                      <div className="mr-2 h-2 w-2 rounded-full bg-gray-500"></div>
                      <div>Hết thời hạn</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex h-full w-[743px] flex-col items-center gap-4 rounded-lg bg-input p-4 ">
              <h5 className="text-[24px] font-semibold text-primary">
                Chỉnh sửa thông tin
              </h5>

              <div className="mt-2 flex w-full flex-col items-start justify-center">
                <TextLabel idInput="name-record">
                  Tên bản ghi:<span className="text-error">*</span>
                </TextLabel>
                <Input id="name-record" bordered background="#33334D" />
              </div>
              <div className="flex w-full flex-col items-start justify-center">
                <TextLabel idInput="code-ISRC">
                  Mã ISRC:<span className="text-error">*</span>
                </TextLabel>
                <Input id="code-ISRC" bordered background="#33334D" />
              </div>
              <div className="flex w-full flex-col items-start justify-center">
                <TextLabel idInput="single">
                  Ca sĩ:<span className="text-error">*</span>
                </TextLabel>
                <Input id="single" bordered background="#33334D" />
              </div>
              <div className="flex w-full flex-col items-start justify-center">
                <TextLabel idInput="author">
                  Tác giả:<span className="text-error">*</span>
                </TextLabel>
                <Input id="author" bordered background="#33334D" />
              </div>
              <div className="flex w-full flex-col items-start justify-center">
                <TextLabel idInput="manufactory">
                  Nhà sản xuất:<span className="text-error">*</span>
                </TextLabel>
                <Input id="manufactory" bordered background="#33334D" />
              </div>
              <div className="flex w-full flex-col items-start justify-center">
                <TextLabel idInput="genre">
                  Thể loại:<span className="text-error">*</span>
                </TextLabel>
                <DropDown
                  active={genreMusic}
                  width={"100%"}
                  classDropItem="border-[#727288] h-[47px] bg-[#33334D]"
                  dropItems={genreMusicDropItems}
                  onSelect={function (value: {
                    name: string;
                    key: number;
                  }): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </div>
            </div>
          </div>

          <div className="center-item mt-10 gap-10">
            <Button typebtn="outline" sizetype="hug">
              Hủy
            </Button>
            <Button typebtn="primary" sizetype="hug">
              Lưu
            </Button>
          </div>
        </div>
        <div className="top-100 absolute right-0">
          <FloatingActionButton floatingActionButtonConfig={floatingAction} />
        </div>
      </div>
    </div>
  );
}

export default UpdateRecord;
