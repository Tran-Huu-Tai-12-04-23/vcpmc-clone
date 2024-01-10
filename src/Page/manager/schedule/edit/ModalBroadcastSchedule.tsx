import { Checkbox, Modal, ModalProps } from "antd";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../State";
import { Button, Input } from "../../../../Component";

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

function ModalBroadcastSchedule(props: ModalPropsCustom) {
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
        <h5 className="text-[24px] font-[700] text-white">Top USUK 2021</h5>
        <h6 className="text-size-primary text-white">Lặp lại trong tuần</h6>
        <div className="flex flex-wrap border-b-[1px] border-solid border-[#C8C8DB] pb-2">
          <div className="box-start mb-4 w-1/4 scale-95 gap-2">
            <Checkbox />
            <h5>Thứ hai</h5>
          </div>
          <div className="box-start mb-4 w-1/4 scale-95 gap-2">
            <Checkbox />
            <h5>Thứ ba</h5>
          </div>
          <div className="box-start mb-4 w-1/4 scale-95 gap-2">
            <Checkbox />
            <h5>Thứ tư</h5>
          </div>
          <div className="box-start mb-4 w-1/4 scale-95 gap-2">
            <Checkbox />
            <h5>Thứ năm</h5>
          </div>
          <div className="box-start mb-4 w-1/4 scale-95 gap-2">
            <Checkbox />
            <h5>Thứ sáu</h5>
          </div>
          <div className="box-start mb-4 w-1/4 scale-95 gap-2">
            <Checkbox />
            <h5>Thứ bảy</h5>
          </div>
          <div className="box-start mb-4 w-1/4 scale-95 gap-2">
            <Checkbox />
            <h5>Chủ nhật</h5>
          </div>
        </div>

        <h5 className="font-semibold">Thứ hai</h5>

        <div className="mb-2 flex items-center justify-start gap-4">
          <Input type="number" bordered width={50} />
          <span> :</span>
          <Input bordered type="number" width={50} />
          <span> :</span>
          <Input bordered type="number" width={50} />
          <span> - </span>
          <Input bordered type="number" width={50} />
          <span> :</span>
          <Input bordered type="number" width={50} />
          <span> :</span>
          <Input bordered type="number" width={50} />
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

export default ModalBroadcastSchedule;
