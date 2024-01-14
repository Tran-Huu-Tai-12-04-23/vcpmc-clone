import { Radio, RadioChangeEvent } from "antd";
import {
  Button,
  DropDown,
  Input,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../../Component";
import { useState } from "react";
import { AuthorityColDataType } from "../_configTable";
import dayjs from "dayjs";

const PagingItems = [
  {
    name: "Quản lý",
  },
  {
    name: "Đối tác uỷ quyền",
  },
];
function Update() {
  const data: AuthorityColDataType = {
    id: "",
    index: 0,
    fullName: "Amy Ngọc",
    username: "Phm_L@gmail.com",
    email: "Phm_L@gmail.com",
    phoneNumber: "029 8131 6743",
    expirationDate: dayjs(),
    status: false,
    role: "QA",
  };
  const [status, setStatus] = useState<number>(1);

  const onChange = (e: RadioChangeEvent) => {
    setStatus(e.target.value);
  };
  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Cập nhật thông tin</TextHeader>

      <div className="mt-10 flex items-start justify-start gap-32">
        <div className="flex flex-col gap-10">
          <div className="box-start gap-10">
            <div className="box-start min-w-[10rem] gap-1">
              <TextLabel idInput="name">Tên người dùng</TextLabel>
              <h5 className="mt-2 text-error">*</h5>
            </div>
            <Input
              id="name"
              width={400}
              bordered
              readOnly
              value={data.fullName}
            />
          </div>
          <div className="box-start gap-10">
            <div className="box-start min-w-[10rem] gap-1">
              <TextLabel idInput="email">Email</TextLabel>
              <h5 className="mt-2 text-error">*</h5>
            </div>
            <Input
              id="email"
              width={400}
              bordered
              readOnly
              value={data.email}
            />
          </div>
          <div className="box-start gap-10">
            <div className="box-start min-w-[10rem] gap-1">
              <TextLabel idInput="phoneNumber">Số điện thoại</TextLabel>
              <h5 className="mt-2 text-error">*</h5>
            </div>
            <Input
              id="phoneNumber"
              width={400}
              bordered
              readOnly
              value={data.phoneNumber}
            />
          </div>
          <div className="box-start gap-10">
            <div className="box-start min-w-[10rem] gap-1">
              <TextLabel idInput="role">Vai trò</TextLabel>
              <h5 className="mt-2 text-error">*</h5>
            </div>
            <Input id="role" width={400} bordered readOnly value={data.role} />
          </div>
        </div>

        {/*  section 2 */}
        <div className="flex flex-col gap-10">
          <div className="box-start gap-10">
            <div className="box-start min-w-[10rem] gap-1">
              <TextLabel idInput="username">Tên đăng nhập</TextLabel>
              <h5 className="mt-2 text-error">*</h5>
            </div>
            <Input id="username" width={400} bordered value={data.username} />
          </div>
          <div className="box-start gap-10">
            <div className="box-start min-w-[10rem] gap-1">
              <TextLabel idInput="password">Mật khẩu</TextLabel>
              <h5 className="mt-2 text-error">*</h5>
            </div>
            <Input id="password" type="password" width={400} bordered />
          </div>
          <div className="box-start gap-10">
            <div className="box-start min-w-[10rem] gap-1">
              <TextLabel idInput="confirm-password">
                Nhập lại mật khẩu
              </TextLabel>
              <h5 className="mt-2 text-error">*</h5>
            </div>
            <Input id="confirm-password" type="password" width={400} bordered />
          </div>
          <div className="box-start gap-10">
            <div className="box-start min-w-[10rem] gap-1">
              <TextLabel idInput="confirm-password">
                Trạng thái người dùng
              </TextLabel>
              <h5 className="mt-2 text-error">*</h5>
            </div>
            <Radio.Group onChange={onChange} value={status}>
              <div className="flex w-full items-center justify-between gap-10">
                <Radio name="status" value={1}>
                  Đã kích hoạt
                </Radio>
                <Radio name="status" value={2}>
                  Ngưng kích hoạt
                </Radio>
              </div>
            </Radio.Group>
          </div>
        </div>
      </div>

      <div className="box-start mt-10 min-w-[10rem] gap-1 text-third">
        <h5 className="mt-2 text-error">*</h5>
        <h5 className="text-xs text-third">
          là những trường thông tin bắt buộc
        </h5>
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

export default Update;
