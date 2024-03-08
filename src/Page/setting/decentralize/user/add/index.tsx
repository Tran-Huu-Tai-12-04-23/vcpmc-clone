import { useState } from "react";
import {
  Button,
  DropDown,
  Input,
  Paging,
  TextHeader,
  TextLabel,
  DatePicker,
} from "../../../../../Component";
import { Form } from "antd";
import { useDispatch } from "react-redux";
import { actionUser } from "../../../../../State";
import { IUser } from "../../../../../Model/user.model";
import { typeRole } from "../../../../../Model/contractMining.model";
import dayjs from "dayjs";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useRouter } from "../../../../../Routes/hooks";

const PagingItems = [
  {
    name: "Caì đặt",
  },
  {
    name: "Phân quyền người dùng",
  },
  {
    name: "Thêm người dùng",
  },
];

const RoleItems = [
  {
    name: typeRole.SUPER_ADMIN,
    key: 1,
  },
  {
    name: typeRole.GROUP_ADMIN,
    key: 2,
  },
  {
    name: typeRole.SUB_USER,
    key: 3,
  },
  {
    name: typeRole.CONTENT_MANAGER,
    key: 4,
  },
];

function AddUser() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const router = useRouter();
  const { addUser } = bindActionCreators(actionUser, dispatch);
  const [role, setRole] = useState<{ name: string; key: number }>(RoleItems[0]);

  const [userData, setUserData] = useState<any>(null);

  const handleChangeFormValue = () => {
    setUserData({
      ...form.getFieldsValue(),
    });
  };

  const handleAddUser = () => {
    const newUser: IUser = {
      ...userData,
      username: userData.username,
      password: userData.password,
      confirmPassword: userData.confirmPassword,
      status: true,
      dateExpired: dayjs(userData.dateExpired),
      role: role.name ?? typeRole.CONTENT_MANAGER,
      userDetail: {
        email: userData.email,
        role: role.name ?? typeRole.CONTENT_MANAGER,
      },
    };

    console.log({
      ...newUser,
      updateDate: dayjs().toString(),
      dateExpire: dayjs(newUser?.dateExpired).toString(),
    });
    addUser(newUser, () => {
      router.back();
    });
  };

  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Thông tin người dùng</TextHeader>

      <div className="mt-10 flex items-start justify-start gap-32">
        <Form
          onChange={handleChangeFormValue}
          form={form}
          layout="horizontal"
          style={{ width: "28%" }}
        >
          <Form.Item
            name="fullName"
            label={
              <TextLabel
                className="flex h-full items-center justify-center"
                idInput="fullName"
              >
                Tên người dùng:
                <span className="pt-2 text-error">*</span>
              </TextLabel>
            }
            style={{
              width: "100%",
            }}
            required={false}
            labelCol={{ span: 9 }}
            rules={[{ required: true, message: "Tên người dùng bắt buộc!" }]}
          >
            <Input variant="outlined" id="fullName" width={"100%"} />
          </Form.Item>
          <Form.Item
            name="email"
            label={
              <TextLabel
                className="flex h-full items-center justify-center"
                idInput="email"
              >
                Email:
                <span className="pt-2 text-error">*</span>
              </TextLabel>
            }
            style={{
              width: "100%",
            }}
            required={false}
            labelCol={{ span: 9 }}
            rules={[{ required: true, message: "Email là bắt buộc!" }]}
          >
            <Input variant="outlined" id="email" width={"100%"} />
          </Form.Item>
          <Form.Item
            name="dateExpire"
            label={
              <TextLabel
                className="flex h-full items-center justify-center"
                idInput="date-expire"
              >
                Vai trò:
                <span className="pt-2 text-error">*</span>
              </TextLabel>
            }
            style={{
              width: "100%",
            }}
            labelCol={{ span: 9 }}
            required={false}
          >
            <DatePicker
              variant="outlined"
              className="w-full"
              id="date-expire"
              background="#2b2b3f"
            />
          </Form.Item>
          <Form.Item
            name="role"
            label={
              <TextLabel
                className="flex h-full items-center justify-center"
                idInput="role"
              >
                Vai trò:
                <span className="pt-2 text-error">*</span>
              </TextLabel>
            }
            style={{
              width: "100%",
            }}
            labelCol={{ span: 9 }}
            required={false}
          >
            <DropDown
              active={role}
              width="100%"
              classDropItem="w-[100%] h-[47px] bg-input border-[#727288]"
              dropItems={RoleItems}
              onSelect={(val) => setRole(val)}
            />
          </Form.Item>
        </Form>

        <Form
          onChange={handleChangeFormValue}
          form={form}
          layout="horizontal"
          style={{ width: "28%" }}
        >
          <Form.Item
            name="username"
            label={
              <TextLabel
                className="flex h-full items-center justify-center"
                idInput="username"
              >
                Tên đăng nhập:
                <span className="pt-2 text-error">*</span>
              </TextLabel>
            }
            style={{
              width: "100%",
            }}
            required={false}
            labelCol={{ span: 9 }}
            rules={[{ required: true, message: "Tên tài khoản bắt buộc!" }]}
          >
            <Input variant="outlined" id="username" width={"100%"} />
          </Form.Item>
          <Form.Item
            name="password"
            label={
              <TextLabel
                className="flex h-full items-center justify-center"
                idInput="password"
              >
                Mật khẩu:
                <span className="pt-2 text-error">*</span>
              </TextLabel>
            }
            style={{
              width: "100%",
            }}
            required={false}
            labelCol={{ span: 9 }}
            rules={[{ required: true, message: "Mật khẩu là bắt buộc!" }]}
          >
            <Input
              type="password"
              variant="outlined"
              id="password"
              width={"100%"}
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label={
              <TextLabel
                className="flex h-full items-center justify-center"
                idInput="confirmPassword"
              >
                Nhập lại mật khẩu:
                <span className="pt-2 text-error">*</span>
              </TextLabel>
            }
            style={{
              width: "100%",
            }}
            required={false}
            labelCol={{ span: 9 }}
            rules={[
              { required: true, message: "Nhập lại mật khẩu là bắt buộc!" },
            ]}
          >
            <Input
              type="password"
              variant="outlined"
              id="confirmPassword"
              width={"100%"}
            />
          </Form.Item>
        </Form>
      </div>

      <div className="box-start mt-10 min-w-[10rem] gap-1 text-third">
        <h5 className="mt-2 text-error">*</h5>
        <h5 className="text-xs text-third">
          là những trường thông tin bắt buộc
        </h5>
      </div>

      <div className="center-item gap-10">
        <Button typebtn="outline" sizetype="hug" onClick={() => router.back()}>
          Hủy
        </Button>
        <Button typebtn="primary" sizetype="hug" onClick={handleAddUser}>
          Lưu
        </Button>
      </div>
    </div>
  );
}

export default AddUser;
