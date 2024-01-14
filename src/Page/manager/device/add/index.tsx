import {
  Button,
  DatePicker,
  DropDown,
  Input,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../../Component";
import { AddOutlineIcon } from "../../../../assets/icon";

const PagingItems = [
  {
    name: "Danh sách thiết bị",
  },
  {
    name: "Chi tiết thiết bị",
  },
  {
    name: "Thêm thiết bị mới",
  },
];
function AddDevice() {
  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Thêm thiết bị mới</TextHeader>

      <div className="mt-10 flex items-start justify-start gap-64 pr-64">
        <div className="flex flex-col gap-10">
          <div className="box-start">
            <div className="box-start min-w-[12rem] gap-2">
              <TextLabel>Tên thiết bị:</TextLabel>
              <span className="mt-2 block text-error">*</span>
            </div>
            <Input bordered width={365} />
          </div>
          <div className="box-start">
            <div className="box-start min-w-[12rem] gap-2">
              <TextLabel>SKU/ID:</TextLabel>
              <span className="mt-2 block text-error">*</span>
            </div>
            <Input bordered width={365} />
          </div>
          <div className="box-start">
            <div className="box-start min-w-[12rem] gap-2">
              <TextLabel>Địa chỉ Mac:</TextLabel>
              <span className="mt-2 block text-error">*</span>
            </div>
            <Input bordered width={365} />
          </div>
          <div className="box-start">
            <div className="box-start min-w-[12rem] gap-2">
              <TextLabel>Thời hạn bảo hành:</TextLabel>
              <span className="mt-2 block text-error">*</span>
            </div>
            <DatePicker bordered />
          </div>
          <div className="box-start">
            <div className="box-start min-w-[12rem] gap-2">
              <TextLabel>Label:</TextLabel>
              <span className="mt-2 block text-error">*</span>
            </div>
            <DropDown
              active={{
                key: 0,
                name: "",
              }}
              width="365px"
              classDropItem="w-full h-[47px] bg-input border-[#727288] w-[365px]"
              dropItems={[]}
              onSelect={function (value: { name: string; key: number }): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
          <div className="box-start">
            <div className="box-start mb-10 min-w-[12rem] gap-2">
              <TextLabel>Thông tin:</TextLabel>
              <span className="mt-2 block text-error">*</span>
            </div>
            <div className="flex flex-col gap-2">
              <DropDown
                active={{
                  key: 0,
                  name: "",
                }}
                width="365px"
                classDropItem="w-full h-[47px] bg-input border-[#727288] w-[365px]"
                dropItems={[]}
                onSelect={function (value: {
                  name: string;
                  key: number;
                }): void {
                  throw new Error("Function not implemented.");
                }}
              />
              <div className="box-end gap-2">
                <AddOutlineIcon />
                <h5 className="font-semibold">Thêm thông tin</h5>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-start">
            <TextLabel className="min-w-[12rem] ">Ghi chú:</TextLabel>
            <Input type="area" width={365} />
          </div>
        </div>

        <div className="flex w-[380px] flex-col gap-10">
          <div className="box-start">
            <div className="box-start min-w-[12rem] gap-2">
              <TextLabel>Tên đăng nhập:</TextLabel>
              <span className="mt-2 block text-error">*</span>
            </div>
            <Input bordered width={365} />
          </div>
          <div className="box-start">
            <div className="box-start min-w-[12rem] gap-2">
              <TextLabel>Mật khẩu:</TextLabel>
              <span className="mt-2 block text-error">*</span>
            </div>
            <Input type="password" bordered width={365} />
          </div>
          <div className="box-start">
            <div className="box-start min-w-[12rem] gap-2">
              <TextLabel>Nhập lại mật khẩu:</TextLabel>
              <span className="mt-2 block text-error">*</span>
            </div>
            <Input type="password" bordered width={365} />
          </div>
          <div className="box-start">
            <div className="box-start min-w-[12rem] gap-2">
              <TextLabel>Vị trí:</TextLabel>
              <span className="mt-2 block text-error">*</span>
            </div>
            <Input bordered width={365} />
          </div>
        </div>
      </div>
      <div className="box-start mt-10 gap-2">
        <span className="mt-2 text-error">*</span>
        <div className="text-third">là những trường thông tin bắt buộc</div>
      </div>
      <div className="center-item gap-10">
        <Button typebtn="outline" sizetype="hug">
          Hủy
        </Button>
        <Button typebtn="primary" sizetype="hug">
          Lưu
        </Button>
      </div>
    </div>
  );
}

export default AddDevice;
