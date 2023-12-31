import { Modal, ModalProps } from "antd";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { RootState, actionAuthenticate } from "../../../../State";
import { Input, Button } from "../../../../Component";

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
  contractId: string;
}

function ModalCancelContract(props: ModalPropsCustom) {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.authenticate);

  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleCancelContract = async () => {
    if (password === "" || confirmPassword === "" || currentPassword === "") {
      setError("Vui lòng nhập đầy đủ thông tin!");
      return;
    } else if (password !== confirmPassword) {
      setError("Xác nhận mật khẩu không khớp!");
      return;
    }
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
        Hủy hợp đồng uỷ quyền
      </h5>
      <div className="flex w-full flex-col items-center justify-center gap-5 p-[2px]">
        <Input
          type="area"
          width={500}
          height={500}
          label=""
          placeholder="Cho chúng tôi biết lý do bạn muốn huỷ hợp đồng uỷ quyền này..."
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
            Hủy hợp đồng
          </Button>
        </div>
      </div>
    </StyleModalCustom>
  );
}

export default ModalCancelContract;
