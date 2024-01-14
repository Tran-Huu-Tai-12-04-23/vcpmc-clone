import { Modal, ModalProps, Radio } from "antd";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../State";
import { Input, Button, TextLabel } from "../../../../Component";
import { DeviceColDataType } from "../_configTabel";

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
  data: DeviceColDataType;
}

function ModalEditDevice(props: ModalPropsCustom) {
  const data = useSelector((state: RootState) => state.authenticate);

  const [error, setError] = useState<string>("");

  const handleCancelContract = async () => {};

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
      <div className="flex w-full flex-col items-center justify-center gap-5 p-[2px]">
        <div className="flex w-full flex-col text-white">
          <div className="box-start gap-2">
            <TextLabel>Tên thiết bị:</TextLabel>
            <span className="mt-2 text-error">*</span>
          </div>
          <Input bordered value={props.data.nameDevice} />
        </div>
        <div className="flex w-full flex-col text-white">
          <div className="box-start gap-2">
            <TextLabel>SKU/ID:</TextLabel>
            <span className="mt-2 text-error">*</span>
          </div>
          <Input bordered value={props.data.SKU_ID} />
        </div>
        <div className="flex w-full flex-col text-white">
          <div className="box-start gap-2">
            <TextLabel>Địa chỉ Mac:</TextLabel>
            <span className="mt-2 text-error">*</span>
          </div>
          <Input bordered value={props.data.macAddress} />
        </div>
        <div className="flex w-full flex-col text-white">
          <div className="box-start gap-2">
            <TextLabel>Tên đăng nhập:</TextLabel>
            <span className="mt-2 text-error">*</span>
          </div>
          <Input bordered value={props.data.username} />
        </div>
        <div className="flex w-full flex-col text-white">
          <div className="box-start gap-2">
            <TextLabel>Vị trí:</TextLabel>
            <span className="mt-2 text-error">*</span>
          </div>
          <Input bordered value={props.data.place} />
        </div>
        <div className="box-start w-full text-white">
          <div className="box-start gap-2">
            <TextLabel>Trạng thái thiết bị:</TextLabel>
            <span className="mr-4 mt-2   text-error">*</span>
          </div>
          <Radio.Group value={props.data.status}>
            <Radio value={true}>Đã kích hoạt</Radio>
            <Radio value={false}>Ngưng kích hoạt</Radio>
          </Radio.Group>
        </div>
        <div className="flex w-full items-center justify-center gap-10">
          <Button onClick={props.onCancel} typebtn="outline" sizetype="hug">
            Hủy
          </Button>
          <Button
            onClick={handleCancelContract}
            typebtn="primary"
            sizetype="hug"
          >
            Lưu
          </Button>
        </div>
      </div>
    </StyleModalCustom>
  );
}

export default ModalEditDevice;
