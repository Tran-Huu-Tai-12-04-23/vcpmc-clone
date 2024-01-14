import { Modal, ModalProps } from "antd";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../State";
import { Input, Button } from "../../../Component";

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
  recordId: string;
}

function ModalRejectRecord(props: ModalPropsCustom) {
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
        Lý do từ chối phê duyệt
      </h5>
      <div className="flex w-full flex-col items-center justify-center gap-5 p-[2px]">
        <Input
          type="area"
          width={500}
          height={200}
          label=""
          placeholder="Cho chúng tôi biết lý do bạn muốn từ chối phê duyệt bản ghi này..."
        />

        <h5 className="text-[14px] text-error">{error}</h5>
        <div className="flex w-full items-center justify-center gap-10">
          <Button onClick={props.onCancel} typebtn="outline" sizetype="hug">
            Quay lại
          </Button>
          <Button
            onClick={handleCancelContract}
            typebtn="primary"
            sizetype="hug"
          >
            Từ chối
          </Button>
        </div>
      </div>
    </StyleModalCustom>
  );
}

export default ModalRejectRecord;
