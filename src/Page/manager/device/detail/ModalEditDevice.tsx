import { Form, Modal, ModalProps, Radio } from "antd";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, actionDevice } from "../../../../State";
import { Input, Button, TextLabel } from "../../../../Component";
import { IDevice } from "../../../../Model/device.model";
import { bindActionCreators } from "@reduxjs/toolkit";

const StyleModalCustom = styled(Modal)<ModalPropsCustom>`
  .ant-modal-header,
  .ant-modal-content {
    background: var(--bg-modal);
    width: max-content;
  }
  :where(.css-dev-only-do-not-override-gzal6t).ant-modal .ant-modal-close-x {
    display: none !important;
  }
  .ant-modal-footer {
    display: none !important;
  }
`;

interface ModalPropsCustom extends ModalProps {
  isOpen?: boolean;
  onOk: () => void;
  onCancel?: () => void;
  data: IDevice;
}

function ModalEditDevice(props: ModalPropsCustom) {
  const dispatch = useDispatch();
  const { updateDevice } = bindActionCreators(actionDevice, dispatch);
  const data = useSelector((state: RootState) => state.authenticate);
  const [form] = Form.useForm();
  const [error, setError] = useState<string>("");
  const [deviceData, setDeviceData] = useState<any>(null);

  const handleChangeFormValue = () => {
    setDeviceData(form.getFieldsValue());
  };

  const handleEditDevice = () => {
    const newDevice = {
      ...props.data,
      ...deviceData,
    };

    props.data.id &&
      updateDevice(props.data.id, newDevice, () => {
        props.onOk();
      });
  };

  useEffect(() => {
    if (data.error) setError(data.error);
  }, [data, props]);

  return (
    <StyleModalCustom
      {...props}
      open={props.isOpen}
      title=""
      onOk={props.onOk}
      closeIcon={null}
      cancelText={null}
      cancelButtonProps={undefined}
      onCancel={props.onCancel}
      centered={true}
    >
      <h5 className="pb-6 text-center text-[24px] font-[700] text-white">
        Chỉnh sửa thông tin thiết bị
      </h5>
      <Form
        onChange={handleChangeFormValue}
        form={form}
        layout="vertical"
        style={{ minWidth: "34rem" }}
        initialValues={{
          ...props.data,
        }}
      >
        <Form.Item
          name="name"
          label={
            <TextLabel
              className="flex h-full items-center justify-center"
              idInput="name-device"
            >
              Tên thiết bị:
              <span className="pt-2 text-error">*</span>
            </TextLabel>
          }
          style={{
            width: "100%",
          }}
          required={false}
          labelCol={{ span: 9 }}
          rules={[{ required: true, message: "Tên thiết bị bắt buộc!" }]}
        >
          <Input variant="outlined" id="name-device" width={"100%"} />
        </Form.Item>
        <Form.Item
          name="SKU_ID"
          label={
            <TextLabel
              className="flex h-full items-center justify-center"
              idInput="SKU/ID"
            >
              SKU/ID:
              <span className="pt-2 text-error">*</span>
            </TextLabel>
          }
          style={{
            width: "100%",
          }}
          labelCol={{ span: 9 }}
          required={false}
          rules={[{ required: true, message: "SKU/ID bắt buộc!" }]}
        >
          <Input variant="outlined" id="SKU/ID" />
        </Form.Item>
        <Form.Item
          name="macAddress"
          label={
            <TextLabel
              className="flex h-full items-center justify-center"
              idInput="mac-address"
            >
              Địa chỉ Mac:
              <span className="pt-2 text-error">*</span>
            </TextLabel>
          }
          style={{
            width: "100%",
          }}
          labelCol={{ span: 9 }}
          required={false}
          rules={[{ required: true, message: "Địa chỉ Mac bắt buộc!" }]}
        >
          <Input variant="outlined" id="mac-address" />
        </Form.Item>
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
          name="location"
          label={
            <TextLabel
              className="flex h-full items-center justify-center"
              idInput="location"
            >
              Vị trí:
              <span className="pt-2 text-error">*</span>
            </TextLabel>
          }
          style={{
            width: "100%",
          }}
          required={false}
          labelCol={{ span: 9 }}
          rules={[{ required: true, message: "Vị trí là bắt buộc!" }]}
        >
          <Input variant="outlined" id="location" width={"100%"} />
        </Form.Item>
      </Form>
      <Form
        onChange={handleChangeFormValue}
        form={form}
        layout="horizontal"
        style={{ minWidth: "34rem" }}
        initialValues={{
          ...props.data,
        }}
      >
        <Form.Item
          name="status"
          label={
            <TextLabel
              className="flex h-full items-center justify-center"
              idInput="status"
            >
              Trạng thái thiết bị:
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

        <div className="mt-10 flex w-full items-center justify-center gap-10">
          <Button onClick={props.onCancel} typebtn="outline" sizetype="hug">
            Hủy
          </Button>
          <Button
            htmlType="submit"
            onClick={handleEditDevice}
            typebtn="primary"
            sizetype="hug"
          >
            Lưu
          </Button>
        </div>
      </Form>
    </StyleModalCustom>
  );
}

export default ModalEditDevice;
