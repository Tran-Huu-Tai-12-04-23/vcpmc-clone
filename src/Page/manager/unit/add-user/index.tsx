import { useState } from "react";
import {
  Button,
  DropDown,
  Input,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../../Component";

const PagingItems = [
  {
    name: "Quản lý",
  },
  {
    name: "Đơn vị sử dụng",
  },
  {
    name: "Chi tiết",
  },
  {
    name: "Thêm người dùng",
  },
];

const RoleItems = [
  {
    name: "Super Admin",
    key: 1,
  },
  {
    name: "Group Admin",
    key: 2,
  },
  {
    name: "Sub - user",
    key: 3,
  },
  {
    name: "Content manager",
    key: 4,
  },
];

function AddUser() {
  const [role, setRole] = useState<{ name: string; key: number }>({
    name: "Chọn vai trò",
    key: -1,
  });
  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Thêm người dùng</TextHeader>

      <div className="mt-10 flex items-start justify-start gap-32">
        <div className="flex flex-col gap-10">
          <div className="box-start gap-10">
            <div className="box-start min-w-[10rem] gap-1">
              <TextLabel idInput="name">Tên người dùng</TextLabel>
              <h5 className="mt-2 text-error">*</h5>
            </div>
            <Input id="name" width={400} bordered />
          </div>
          <div className="box-start gap-10">
            <div className="box-start min-w-[10rem] gap-1">
              <TextLabel idInput="email">Email</TextLabel>
              <h5 className="mt-2 text-error">*</h5>
            </div>
            <Input id="email" width={400} bordered />
          </div>
          <div className="box-start gap-10">
            <div className="box-start min-w-[10rem] gap-1">
              <TextLabel idInput="email">Email</TextLabel>
              <h5 className="mt-2 text-error">*</h5>
            </div>
            <DropDown
              classDropItem={` bg-input border-second ${
                role.key === -1 ? "text-third" : ""
              }`}
              width={"250px"}
              active={role}
              dropItems={RoleItems}
              onSelect={(val) => {
                setRole(val);
              }}
            />
          </div>
        </div>

        {/*  section 2 */}
        <div className="flex flex-col gap-10">
          <div className="box-start gap-10">
            <div className="box-start min-w-[10rem] gap-1">
              <TextLabel idInput="username">Tên đăng nhập</TextLabel>
              <h5 className="mt-2 text-error">*</h5>
            </div>
            <Input id="username" width={400} bordered />
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

export default AddUser;
