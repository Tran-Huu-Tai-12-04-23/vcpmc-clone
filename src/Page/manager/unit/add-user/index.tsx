import { useState } from "react";
import {
  Button,
  DropDown,
  Input,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../../Component";
import { Form } from "antd";
import { IUser } from "../../../../Model/user.model";
import { typeRole } from "../../../../Model/contractMining.model";
import { useDispatch, useSelector } from "react-redux";
import { RootState, actionUnitUsed } from "../../../../State";
import { useRouter } from "../../../../Routes/hooks";
import { bindActionCreators } from "@reduxjs/toolkit";

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
  const [form] = Form.useForm();
  const router = useRouter();
  const dispatch = useDispatch();
  const { updateUnitUsed } = bindActionCreators(actionUnitUsed, dispatch);
  const { currentUnitUsed } = useSelector((state: RootState) => state.unitUsed);
  const [role, setRole] = useState<{ name: string; key: number }>({
    name: "Chọn vai trò",
    key: -1,
  });
  const [userData, setUserData] = useState<any>(null);
  const handleChangeFormValue = () => {
    setUserData({
      ...form.getFieldsValue(),
    });
  };

  const handleAddUser = () => {
    const newUser: IUser = {
      username: userData?.username,
      password: userData?.password,
      confirmPassword: userData?.confirmPassword,
      status: true,
      userDetail: {
        email: userData?.email,
        role: role.name ?? typeRole.CONTENT_MANAGER,
      },
    };

    const newUsers = currentUnitUsed?.users
      ? [...currentUnitUsed?.users, newUser]
      : [newUser];

    const newUnitUsed = {
      ...currentUnitUsed,
      users: newUsers,
      status: true,
    };
    console.log(newUnitUsed);
    currentUnitUsed?.id &&
      updateUnitUsed(currentUnitUsed.id, newUnitUsed, () => {
        router.back();
      });
  };

  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Thêm người dùng</TextHeader>

      <div className="mt-10 flex items-start justify-start gap-32">
        <Form
          onChange={handleChangeFormValue}
          form={form}
          layout="horizontal"
          style={{ width: "33.33333%" }}
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
              width="15rem"
              classDropItem="w-[15rem] h-[47px] bg-input border-[#727288]"
              dropItems={RoleItems}
              onSelect={(val) => setRole(val)}
            />
          </Form.Item>
        </Form>

        <Form
          onChange={handleChangeFormValue}
          form={form}
          layout="horizontal"
          style={{ width: "33.33333%" }}
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
