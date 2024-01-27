import { Modal, ModalProps } from "antd";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../State";
import { Button, Checkbox } from "../../../Component";

const StyleModalCustom = styled(Modal)<ModalPropsCustom>`
  z-index: 100000;
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
  scheduleId: string;
}

function ModalRemoveSchedule(props: ModalPropsCustom) {
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
      <div className="flex flex-col gap-4 text-white">
        <h5 className=" text-center text-[24px] font-[700] text-white">
          Xóa lịch phát
        </h5>
        <h6 className=" text-center text-size-primary font-[700] text-white">
          Xóa tất cả lịch phát trong ngày
        </h6>
        <div className="box-start">
          <Checkbox />
          <h5>Thứ ba</h5>
        </div>
        <div className="box-start">
          <Checkbox />
          <h5>Thứ sáu</h5>
        </div>
        <div className="mt-4 flex w-full items-center justify-center gap-10">
          <Button onClick={props.onCancel} typebtn="outline" sizetype="hug">
            Hủy
          </Button>
          <Button
            onClick={handleCancelContract}
            typebtn="primary"
            sizetype="hug"
          >
            Xóa
          </Button>
        </div>
      </div>
    </StyleModalCustom>
  );
}

export default ModalRemoveSchedule;
