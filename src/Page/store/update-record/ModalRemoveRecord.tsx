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
}

function ModalRemoveRecord(props: ModalPropsCustom) {
  const data = useSelector((state: RootState) => state.authenticate);

  const [error, setError] = useState<string>("");

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
        Xóa bản ghi
      </h5>
      <h5 className="text-center text-third">Bạn có chắc chắn xóa bản ghi?</h5>

      <div className="flex w-full flex-col items-center justify-center gap-5 p-[2px]">
        <h5 className="text-[14px] text-error">{error}</h5>
        <div className="flex w-full items-center justify-center gap-10">
          <Button onClick={props.onCancel} typebtn="outline" sizetype="hug">
            Hủy
          </Button>
          <Button onClick={props.onOk} typebtn="primary" sizetype="hug">
            Xác nhận
          </Button>
        </div>
      </div>
    </StyleModalCustom>
  );
}

export default ModalRemoveRecord;
