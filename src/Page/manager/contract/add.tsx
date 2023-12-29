import { Radio } from "antd";
import {
  Button,
  ButtonUpload,
  DatePicker,
  DropDown,
  Input,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../Component";
import { WarningIcon } from "../../../assets/icon";
const pagingItems = [
  {
    name: "Quan ly",
  },
  {
    name: "Quan ly hop dong",
  },
  {
    name: "Them hop dong",
  },
];
function AddContract() {
  return (
    <div className="">
      <Paging items={pagingItems} />
      <TextHeader>Thêm hợp đồng ủy quyền mới</TextHeader>
      <div className="mt-6 flex items-start justify-between gap-10 ">
        <div className="flex w-1/3 flex-shrink-0 flex-col items-start gap-5">
          <div className=" flex w-full items-center justify-between">
            <TextLabel nameInput="number-contract">
              Số hợp đồng:<span className="text-error">*</span>
            </TextLabel>
            <Input id="number-contract" />
          </div>
          <div className="flex w-full items-center justify-between">
            <TextLabel nameInput="name-contract">
              Tên hợp đồng:<span className="text-error">*</span>
            </TextLabel>
            <Input id="name-contract" />
          </div>
          <div className="flex w-full items-center justify-between">
            <TextLabel nameInput="date-effect">
              Ngày hiệu lực:<span className="text-error">*</span>
            </TextLabel>
            <DatePicker id="date-effect" />
          </div>
          <div className="flex w-full items-center justify-between">
            <TextLabel nameInput="date-validity">
              Ngày hết hạn:<span className="text-error">*</span>
            </TextLabel>
            <DatePicker id="date-validity" />
          </div>
        </div>
        <div className="box-start w-1/3">
          <TextLabel>Đính kèm tệp</TextLabel>
          <ButtonUpload />
        </div>
        <div className=" flex w-1/3 flex-col  items-start justify-start gap-4 ">
          <div className="box-start w-full gap-2 text-size-primary font-bold text-[#ffac69]">
            <WarningIcon />
            <span>Mức nhuận bút</span>
          </div>
          <div className="flex w-[20rem] items-center justify-between gap-2 text-size-primary font-bold ">
            <h5>Quyền tác giả</h5>
            <h5 className="font-normal">0%</h5>
          </div>
          <div className="flex w-[20rem] flex-col gap-2 text-size-primary font-bold ">
            <h5>Quyền liên quan</h5>
            <div className="flex flex-col justify-start font-normal">
              <div className="flex w-full items-center justify-between gap-2 text-size-primary  ">
                <h5>Quyền của người biểu diễn:</h5>
                <h5>50%</h5>
              </div>
              <div className="flex w-[20rem] items-center justify-between gap-2 text-size-primary  ">
                <h5 className="w-[14rem]">
                  Quyền của nhà sản xuất: (Bản ghi/video)
                </h5>
                <h5>50%</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-[32px] mt-[32px] border-b-[1px] border-solid border-[#48485b]"></div>

      {/* begin information  */}
      <div className="flex flex-col ">
        <h5 className="text-second mb-8 text-[18px] font-bold">
          Thông tin pháp nhân uỷ quyền
        </h5>

        <div className="flex w-full justify-between gap-24">
          <div className="flex w-1/3 flex-col gap-8">
            <div className="flex items-center justify-start">
              <h5 className="min-w-[14rem] font-bold">Pháp nhân ủy quyền:</h5>
              <div className="flex flex-shrink-0 items-center justify-start gap-4">
                <Radio>Cho cá nhân</Radio>
                <Radio>Cho tổ chức</Radio>
              </div>
            </div>
            <div className="flex items-center ">
              <h5 className="min-w-[14rem] flex-shrink-0 font-bold">
                Tên người ủy quyền:<span className="text-error">*</span>
              </h5>
              <Input />
            </div>
            <div className="flex items-center justify-start">
              <h5 className="min-w-[14rem] flex-shrink-0 font-bold">
                Giới tính:
              </h5>
              <div className="flex items-center justify-start gap-8">
                <Radio>Nam</Radio>
                <Radio>Nữ</Radio>
              </div>
            </div>
            <div className="flex items-center ">
              <h5 className="min-w-[14rem] flex-shrink-0 font-bold">
                Ngày sinh:<span className="text-error">*</span>
              </h5>
              <DatePicker className="w-full" />
            </div>
            <div className="flex items-center ">
              <h5 className="min-w-[14rem] flex-shrink-0 font-bold">
                Quốc tịch:<span className="text-error">*</span>
              </h5>
              <Input />
            </div>
            <div className="flex items-center ">
              <h5 className="min-w-[14rem] flex-shrink-0 font-bold">
                Số diện thoại:
              </h5>
              <Input />
            </div>
          </div>

          {/* -------- */}
          <div className="flex w-1/3 flex-col gap-8">
            <div className="flex items-center justify-start">
              <h5 className="min-w-[10rem] font-bold">
                CMDD/CCCD:<span className="text-error">*</span>
              </h5>
              <Input />
            </div>
            <div className="flex items-center ">
              <h5 className="min-w-[10rem] flex-shrink-0 font-bold">
                Ngày cấp:<span className="text-error">*</span>
              </h5>
              <DatePicker className="w-full" />
            </div>
            <div className="flex items-center justify-start">
              <h5 className="min-w-[10rem] font-bold">
                Nơi cấp:<span className="text-error">*</span>
              </h5>
              <Input />
            </div>
            <div className="flex items-center justify-start">
              <h5 className="min-w-[10rem] font-bold">
                Mã số thuế:<span className="text-error">*</span>
              </h5>
              <Input />
            </div>
            <div className="flex justify-start">
              <h5 className="mt-4 min-w-[10rem] font-bold">
                Nơi cư trú:<span className="text-error">*</span>
              </h5>
              <Input type="area" />
            </div>
          </div>

          {/* -------- */}
          <div className="flex w-1/3 flex-col gap-8">
            <div className="flex items-center justify-start">
              <h5 className="min-w-[10rem] font-bold">
                Email:<span className="text-error">*</span>
              </h5>
              <Input />
            </div>
            <div className="flex items-center ">
              <h5 className="min-w-[10rem] flex-shrink-0 font-bold">
                Tên đăng nhập:<span className="text-error">*</span>
              </h5>
              <Input />
            </div>
            <div className="flex items-center justify-start">
              <h5 className="min-w-[10rem] font-bold">
                Mật khẩu:<span className="text-error">*</span>
              </h5>
              <Input />
            </div>
            <div className="flex items-center justify-start">
              <h5 className="min-w-[10rem] font-bold">Số tài khoản:</h5>
              <Input />
            </div>
            <div className="flex items-center justify-start">
              <h5 className="min-w-[10rem] font-bold">Ngân hàng:</h5>
              <Input />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-start gap-1">
        <h5 className="text-error">*</h5>
        <div className="text-[12px] text-[#898997]">
          là những trường thông tin bắt buộc
        </div>
      </div>

      <div className="flex items-center justify-center gap-10">
        <Button typebtn="outline" sizetype="hug">
          Hủy
        </Button>
        <Button typebtn="primary" sizetype="hug">
          Tạo
        </Button>
      </div>
    </div>
  );
}

export default AddContract;
