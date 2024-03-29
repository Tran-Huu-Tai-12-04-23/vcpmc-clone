import { useEffect, useState } from "react";
import {
  Button,
  DropDown,
  Input,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../../Component";
import { Form, Radio } from "antd";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, actionUnitUsed } from "../../../../State";
import { IUser } from "../../../../Model/user.model";
import { typeRole } from "../../../../Model/contractMining.model";
import dayjs from "dayjs";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useRouter } from "../../../../Routes/hooks";

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
    name: "Thông tin người dùng",
  },
  {
    name: "Chỉnh sửa thông tin",
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

function EditUser() {
  const { email } = useParams();
  const { currentUnitUsed } = useSelector((state: RootState) => state.unitUsed);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const router = useRouter();
  const { updateUnitUsed } = bindActionCreators(actionUnitUsed, dispatch);
  const [role, setRole] = useState<{ name: string; key: number }>(RoleItems[0]);

  const [user, setUser] = useState<IUser | null>(null);
  const [userData, setUserData] = useState<any>(null);

  const handleChangeFormValue = () => {
    setUserData({
      ...form.getFieldsValue(),
    });
  };

  const handleUpdateUser = () => {
    const newUser: IUser = {
      ...user,
      username: userData.username,
      password: userData.password,
      confirmPassword: userData.confirmPassword,
      status: userData.status,
      userDetail: {
        ...user?.userDetail,
        firstName: user?.userDetail?.firstName ?? "",
        lastName: user?.userDetail?.lastName ?? "",
        phoneNumber: user?.userDetail?.phoneNumber ?? "",
        nationality: user?.userDetail?.nationality ?? "",
        userId: user?.userDetail?.userId ?? "",
        dateOfBirth: user?.userDetail?.dateOfBirth ?? dayjs(),
        email: userData.email,
        role: role.name ?? typeRole.CONTENT_MANAGER,
      },
    };

    var newUsers = currentUnitUsed?.users.filter(
      (us) => us.userDetail?.email !== email,
    );
    newUsers = newUsers ? [...newUsers, newUser] : [newUser];

    const newUnitUsed = {
      ...currentUnitUsed,
      users: newUsers,
    };

    console.log(newUnitUsed);
    currentUnitUsed?.id &&
      updateUnitUsed(currentUnitUsed.id, newUnitUsed, () => {
        router.back();
      });
  };

  useEffect(() => {
    if (currentUnitUsed?.users) {
      const user: IUser | undefined = currentUnitUsed.users.find(
        (us) => us.userDetail?.email === email,
      );
      user && setUser(user);
    }
  }, [currentUnitUsed, email]);

  return (
    user && (
      <div className="w-full">
        <Paging items={PagingItems} />
        <TextHeader>Thêm người dùng mới</TextHeader>

        <div className="mt-10 flex items-start justify-start gap-32">
          <Form
            onChange={handleChangeFormValue}
            form={form}
            layout="horizontal"
            style={{ width: "33.33333%" }}
            initialValues={{
              ...user,
              ...user.userDetail,
            }}
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
            initialValues={{ ...user }}
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
            <Form.Item
              name="status"
              label={
                <TextLabel
                  className="flex h-full items-center justify-center"
                  idInput="status"
                >
                  Trạng thái:
                  <span className="pt-2 text-error">*</span>
                </TextLabel>
              }
              style={{
                width: "100%",
              }}
              required={false}
              labelCol={{ span: 9 }}
            >
              <Radio.Group className="flex justify-between">
                <Radio value={true}>Đã kích hoạt</Radio>
                <Radio value={false}>Ngưng kích hoạt</Radio>
              </Radio.Group>
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
          <Button
            typebtn="outline"
            sizetype="hug"
            onClick={() => router.back()}
          >
            Hủy
          </Button>
          <Button typebtn="primary" sizetype="hug" onClick={handleUpdateUser}>
            Lưu
          </Button>
        </div>
      </div>
    )
  );
}

export default EditUser;
