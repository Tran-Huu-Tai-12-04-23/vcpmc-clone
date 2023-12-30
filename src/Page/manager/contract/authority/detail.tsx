import { Radio } from "antd";
import {
  AutoComplete,
  Button,
  ButtonUpload,
  DatePicker,
  DropDown,
  Input,
  Paging,
  SwitchTab,
  TextHeader,
  TextLabel,
} from "../../../../Component";
import { WarningIcon } from "../../../../assets/icon";
import Dropdown from "../../../../Component/UI/DropDown";
import { countryItems } from "../../../../assets/_mock";
import { useState } from "react";
import { useParams } from "react-router-dom";
const pagingItems = [
  {
    name: "Quản lý",
  },
  {
    name: "Quản lý hợp đồng",
  },
  {
    name: "Chi tiết",
  },
];

function DetailContract() {
  const id = useParams().id;
  const [activeTab, setActiveTab] = useState<number>(1);
  const [country, setCountry] = useState<{ name: string; key: number }>(
    countryItems[0],
  );

  return (
    <div className="">
      <Paging items={pagingItems} />
      <TextHeader>Chỉ tiết hợp đồng ủy quyền bài hát - {id}</TextHeader>
      <SwitchTab
        className={"mb-[32px]  mt-[32px] w-fit "}
        active={activeTab}
        buttons={[
          {
            name: "Thông tin hợp đồng",
            action: () => {
              setActiveTab(1);
            },
            key: 1,
          },
          {
            name: "Tác phẩm ủy quyền",
            action: () => {
              setActiveTab(2);
            },
            key: 2,
          },
        ]}
      />
      <div className="mt-6 flex items-start justify-between gap-24 ">
        <div className="flex w-1/3 flex-shrink-0 flex-col items-start gap-5">
          <div className=" flex w-full items-center justify-between">
            <TextLabel idInput="number-contract">
              Số hợp đồng:<span className="text-error">*</span>
            </TextLabel>
            <h5>BH123</h5>
          </div>
          <div className="flex w-full items-center justify-between">
            <TextLabel idInput="name-contract">
              Tên hợp đồng:<span className="text-error">*</span>
            </TextLabel>
            <Input bordered id="name-contract" />
          </div>
          <div className="flex w-full items-center justify-between">
            <TextLabel idInput="date-effect">
              Ngày hiệu lực:<span className="text-error">*</span>
            </TextLabel>
            <DatePicker bordered id="date-effect" />
          </div>
          <div className="flex w-full items-center justify-between">
            <TextLabel idInput="date-validity">
              Ngày hết hạn:<span className="text-error">*</span>
            </TextLabel>
            <DatePicker bordered id="date-validity" />
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
        <h5 className="mb-8 text-[18px] font-bold text-second">
          Thông tin pháp nhân uỷ quyền
        </h5>

        <div className="flex w-full items-start justify-between gap-24">
          <div className="flex w-1/3 flex-col gap-3">
            <div className="flex items-center justify-start">
              <h5 className="min-w-[14rem] font-bold">Pháp nhân ủy quyền:</h5>
              <div className="flex flex-shrink-0 items-center justify-start gap-4">
                <Radio>Cho cá nhân</Radio>
                <Radio>Cho tổ chức</Radio>
              </div>
            </div>
            <div className="flex items-center ">
              <TextLabel idInput="name-user-authority">
                Tên người ủy quyền:<span className="text-error">*</span>
              </TextLabel>
              <AutoComplete />
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
              <TextLabel idInput="date-of-birth">
                Ngày sinh:<span className="text-error">*</span>
              </TextLabel>
              <DatePicker
                id="date-of-birth"
                bordered
                className="w-full"
                placeholder="dd/mm/yy"
              />
            </div>
            <div className="flex items-center ">
              <TextLabel>
                Quốc tịch:<span className="text-error">*</span>
              </TextLabel>
              <Dropdown
                className="w-full"
                classDropItem="border-[#67677d] bg-[#2b2b3f] h-[48px] border-transparent"
                dropItems={countryItems}
                active={country}
                onSelect={(value) => setCountry(value)}
              />
            </div>
            <div className="flex items-center ">
              <TextLabel idInput="phone-number">Số diện thoại:</TextLabel>
              <Input bordered id="phone-number" />
            </div>
          </div>

          {/* -------- */}
          <div className="flex w-1/3 flex-col gap-3">
            <div className="flex items-center justify-start">
              <TextLabel idInput="cmnd-cccd">
                CMDD/CCCD:<span className="text-error">*</span>
              </TextLabel>
              <Input bordered id="cmnd-cccd" />
            </div>
            <div className="flex items-center ">
              <TextLabel idInput="date-provided">
                Ngày cấp:<span className="text-error">*</span>
              </TextLabel>
              <DatePicker id="date-provided" bordered className="w-full" />
            </div>
            <div className="flex items-center justify-start">
              <TextLabel idInput="place-provided">
                Nơi cấp:<span className="text-error">*</span>
              </TextLabel>
              <Input bordered id="place-provided" />
            </div>
            <div className="flex items-center justify-start">
              <TextLabel idInput="code-">
                Mã số thuế:<span className="text-error">*</span>
              </TextLabel>
              <Input bordered id="code-" />
            </div>
            <div className="flex justify-start">
              <TextLabel idInput="place-lived">
                Nơi cư trú:<span className="text-error">*</span>
              </TextLabel>
              <Input type="area" height={200} bordered id="place-lived" />
            </div>
          </div>

          {/* -------- */}
          <div className="flex w-1/3 flex-col gap-3">
            <div className="flex items-center justify-start">
              <TextLabel idInput="email">
                Email:<span className="text-error">*</span>
              </TextLabel>
              <Input bordered id="email" />
            </div>
            <div className="flex items-center ">
              <TextLabel idInput="username">
                Tên đăng nhập:<span className="text-error">*</span>
              </TextLabel>
              <Input bordered id="username" />
            </div>
            <div className="flex items-center justify-start">
              <TextLabel idInput="password">
                Mật khẩu:<span className="text-error">*</span>
              </TextLabel>
              <Input bordered id="password" />
            </div>
            <div className="flex items-center justify-start">
              <TextLabel idInput="number-bank">Số tài khoản:</TextLabel>
              <Input bordered id="number-bank" />
            </div>
            <div className="flex items-center justify-start">
              <TextLabel idInput="name-bank">Ngân hàng:</TextLabel>
              <Input bordered id="name-bank" />
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

export default DetailContract;
