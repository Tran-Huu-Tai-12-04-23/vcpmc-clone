import { Form, Radio, RadioChangeEvent } from "antd";
import {
  Button,
  DropDown,
  Input,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../../Component";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { IAuthorizedPartner } from "../../../../Model/authorizedPartner.model";
import { useDispatch, useSelector } from "react-redux";
import { RootState, actionAuthorizedPartner } from "../../../../State";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import { useRouter } from "../../../../Routes/hooks";

const PagingItems = [
  {
    name: "Quản lý",
  },
  {
    name: "Đối tác uỷ quyền",
  },
];
const roles = [
  { key: 1, name: "Super Admin" },
  { key: 2, name: "Group Admin" },
  { key: 3, name: "Sub - User" },
  { key: 4, name: "Content manager" },
];
function Update() {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { currentAuthorizedPartner } = useSelector(
    (state: RootState) => state.authorizedPartners,
  );
  const { changeCurrentAuthorizedPartner, updateAuthorizedPartner } =
    bindActionCreators(actionAuthorizedPartner, dispatch);
  const [role, setRole] = useState<{ key: number; name: string }>(roles[0]);
  const [authorizedPartnerData, setAuthorizedPartnerData] = useState<any>(null);
  const handleChangeFormValue = () => {
    setAuthorizedPartnerData(form.getFieldsValue());
  };

  const handleUpdateAuthorizedPartner = () => {
    const newAuthorizedPartner = {
      ...currentAuthorizedPartner,
      ...authorizedPartnerData,
    };

    currentAuthorizedPartner?.id &&
      updateAuthorizedPartner(
        currentAuthorizedPartner.id,
        newAuthorizedPartner,
        () => {
          router.back();
        },
      );
  };

  useEffect(() => {
    id && changeCurrentAuthorizedPartner(id);
  }, [id]);
  return (
    currentAuthorizedPartner && (
      <div className="w-full">
        <Paging items={PagingItems} />
        <TextHeader>Cập nhật thông tin</TextHeader>

        <div className="mt-10 flex items-start justify-start gap-32">
          <Form
            initialValues={{
              ...currentAuthorizedPartner,
            }}
            onChange={handleChangeFormValue}
            form={form}
            layout="horizontal"
            style={{ width: "38rem" }}
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
              rules={[{ required: true, message: "Email bắt buộc!" }]}
            >
              <Input variant="outlined" id="email" width={"100%"} />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              label={
                <TextLabel
                  className="flex h-full items-center justify-center"
                  idInput="phoneNumber"
                >
                  Số điện thoại:
                  <span className="pt-2 text-error">*</span>
                </TextLabel>
              }
              style={{
                width: "100%",
              }}
              required={false}
              labelCol={{ span: 9 }}
              rules={[{ required: true, message: "Số điện thoại bắt buộc!" }]}
            >
              <Input variant="outlined" id="phoneNumber" width={"15rem"} />
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
              required={false}
              labelCol={{ span: 9 }}
              rules={[{ required: true, message: "Vai trò bắt buộc!" }]}
            >
              <DropDown
                active={role}
                width="365px"
                className="max-w-[15rem]"
                classDropItem="max-w-[15rem] h-[47px] bg-input border-[#727288] w-[365px]"
                dropItems={roles}
                onSelect={(val) => setRole(val)}
              />
            </Form.Item>
          </Form>
          <Form
            initialValues={{
              ...currentAuthorizedPartner,
            }}
            onChange={handleChangeFormValue}
            form={form}
            layout="horizontal"
            style={{ width: "38rem" }}
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

        <Form
          initialValues={{
            ...currentAuthorizedPartner,
          }}
          onChange={handleChangeFormValue}
          form={form}
          layout="horizontal"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <Button
            typebtn="outline"
            onClick={() => router.back()}
            sizetype="hug"
          >
            Hủy
          </Button>
          <Button
            htmlType="submit"
            typebtn="primary"
            sizetype="hug"
            onClick={handleUpdateAuthorizedPartner}
          >
            Lưu
          </Button>
        </Form>
      </div>
    )
  );
}

export default Update;
