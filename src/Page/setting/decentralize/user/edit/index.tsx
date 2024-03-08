import { useEffect, useState } from "react";
import {
  Button,
  DatePicker,
  DropDown,
  Input,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../../../Component";
import { Form, Radio } from "antd";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, actionUser } from "../../../../../State";
import { IUser } from "../../../../../Model/user.model";
import { typeRole } from "../../../../../Model/contractMining.model";
import dayjs from "dayjs";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useRouter } from "../../../../../Routes/hooks";

const PagingItems = [
  {
    name: "Cài đặt",
  },
  {
    name: "Phân quyền người dùng",
  },
  {
    name: "Chỉnh sửa",
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
  const { id } = useParams();
  const { currentUser } = useSelector((state: RootState) => state.users);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const router = useRouter();
  const { updateUser, changeCurrentUser } = bindActionCreators(
    actionUser,
    dispatch,
  );
  const [role, setRole] = useState<{ name: string; key: number }>(RoleItems[0]);

  const [userData, setUserData] = useState<any>(null);

  const handleChangeFormValue = () => {
    setUserData({
      ...form.getFieldsValue(),
    });
  };

  const handleUpdateUser = () => {
    const newUser: IUser = {
      ...currentUser,
      username: userData?.username ?? "",
      password: userData?.password ?? "",
      confirmPassword: userData?.confirmPassword ?? "",
      status: userData?.status ?? true,
      userDetail: {
        ...currentUser?.userDetail,
        firstName: currentUser?.userDetail?.firstName ?? "",
        lastName: currentUser?.userDetail?.lastName ?? "",
        phoneNumber: currentUser?.userDetail?.phoneNumber ?? "",
        nationality: currentUser?.userDetail?.nationality ?? "",
        userId: currentUser?.userDetail?.userId ?? "",
        dateOfBirth: currentUser?.userDetail?.dateOfBirth ?? dayjs(),
        email: userData?.email ?? "",
        role: role.name ?? typeRole.CONTENT_MANAGER,
      },
    };

    id &&
      updateUser(id, newUser, () => {
        router.back();
      });
  };

  useEffect(() => {
    id && changeCurrentUser(id);
  }, [id]);

  useEffect(() => {
    if (currentUser) {
      const roleExist = RoleItems.find(
        (role) => role.name === currentUser.userDetail?.role,
      );

      roleExist && setRole(roleExist);
    }
  }, [currentUser]);

  return (
    currentUser && (
      <div className="w-full">
        <Paging items={PagingItems} />
        <TextHeader>Chỉnh sửa thông tin người dùng</TextHeader>

        <div className="mt-10 flex items-start justify-start gap-32">
          <Form
            onChange={handleChangeFormValue}
            form={form}
            layout="horizontal"
            style={{ width: "33.33333%" }}
            initialValues={{
              ...currentUser,
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
              name="dateExpired"
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
            initialValues={{
              ...currentUser,
            }}
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
