import { useEffect, useState } from "react";
import {
  Button,
  DatePicker,
  DropDown,
  Input,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../../Component";
import { useRouter } from "../../../../Routes/hooks";
import { AddOutlineIcon } from "../../../../assets/icon";
import { Form } from "antd";
import { IDevice } from "../../../../Model/device.model";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actionDevice } from "../../../../State";

const PagingItems = [
  {
    name: "Danh sách thiết bị",
  },
  {
    name: "Chi tiết thiết bị",
  },
  {
    name: "Thêm thiết bị mới",
  },
];
const labels = [
  {
    key: 1,
    name: "label 1",
  },
  {
    key: 2,
    name: "label 2",
  },
  {
    key: 3,
    name: "label 3",
  },
];
const informationList = [
  {
    key: 1,
    name: "information 1",
  },
  {
    key: 2,
    name: "information 2",
  },
  {
    key: 3,
    name: "information 3",
  },
];
function AddDevice() {
  const router = useRouter();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { addDevice } = bindActionCreators(actionDevice, dispatch);
  const [deviceData, setDeviceData] = useState<any>(null);
  const [information, setInformation] = useState<{ key: number; name: string }>(
    informationList[0],
  );
  const [label, setLabel] = useState<{
    key: number;
    name: string;
  }>(labels[0]);

  const handleChangeFormValue = () => {
    setDeviceData(form.getFieldsValue());
  };

  const handleAddNewDevice = () => {
    if (deviceData?.password !== deviceData?.confirmPassword) {
      alert("Nhập lại mạt khẩu không khớp!");
      return;
    }

    const newDevice: IDevice = {
      ...deviceData,
    };
    addDevice(newDevice, () => {
      router.back();
    });
  };

  useEffect(() => {
    setDeviceData((prev: any) => ({
      ...prev,
      label: label.name,
      information: [information.name],
    }));
  }, [label, information]);

  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Thêm thiết bị mới</TextHeader>

      <div className="mt-10 flex items-start justify-start gap-64 pr-64">
        <Form
          onChange={handleChangeFormValue}
          form={form}
          layout="horizontal"
          style={{ width: "33.33333%" }}
        >
          <Form.Item
            name="nameDevice"
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
            name="warrantyPeriod"
            label={
              <TextLabel
                className="flex h-full items-center justify-center"
                idInput="warrantyPeriod"
              >
                Thời hạn bảo hành:
                <span className="pt-2 text-error">*</span>
              </TextLabel>
            }
            style={{
              width: "100%",
            }}
            labelCol={{ span: 9 }}
          >
            <DatePicker
              variant="outlined"
              width={200}
              id="warrantyPeriod"
              background="#2b2b3f"
            />
          </Form.Item>
          <Form.Item
            name="label"
            label={
              <TextLabel
                className="flex h-full items-center justify-center"
                idInput="label"
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
          >
            <DropDown
              active={label}
              width="365px"
              classDropItem="w-full h-[47px] bg-input border-[#727288] w-[365px]"
              dropItems={labels}
              onSelect={(val) => setLabel(val)}
            />
          </Form.Item>
          <Form.Item
            name="information"
            label={
              <TextLabel
                className="flex h-full items-center justify-center"
                idInput="label"
              >
                Thông tin:
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
              active={information}
              width="365px"
              classDropItem="w-full h-[47px] bg-input border-[#727288] w-[365px]"
              dropItems={informationList}
              onSelect={(val) => setInformation(val)}
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
      </div>
      <div className="box-start mt-10 gap-2">
        <span className="mt-2 text-error">*</span>
        <div className="text-third">là những trường thông tin bắt buộc</div>
      </div>
      <Form
        onChange={handleChangeFormValue}
        form={form}
        layout="horizontal"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
          marginTop: "10px",
        }}
      >
        <Button typebtn="outline" sizetype="hug" onClick={() => router.back()}>
          Hủy
        </Button>
        <Button
          htmlType="submit"
          typebtn="primary"
          sizetype="hug"
          onClick={handleAddNewDevice}
        >
          Lưu
        </Button>
      </Form>
    </div>
  );
}

export default AddDevice;
