import { Modal, ModalProps } from "antd";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../State";
import { Button } from "../../../../Component";

const StyleModalCustom = styled(Modal)<ModalPropsCustom>`
  .ant-modal-header,
  .ant-modal-content {
    background: var(--bg-modal);
    width: ${(props) => (props.width ? props.width + "px" : "440px")};
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
  width?: number;
}

function ModalCommitRevenue(props: ModalPropsCustom) {
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
      <div className="flex w-full flex-col p-4">
        <h5 className="pb-2 text-center text-[24px] font-[700] text-white">
          Chốt doanh thu
        </h5>

        <h5 className="mb-8 mt-4 text-white">
          Doanh thu sẽ được chốt từ ngày 01/05/2021 đến ngày 14/05/2021 trên tất
          cả các hợp đồng sử dụng.
        </h5>
        <h5 className="mb-6 text-white">
          {`Nhấn <Tiếp tục> để chốt doanh thu. 
Nhấn <Hủy> để hủy bỏ và không chốt doanh thu`}
        </h5>
        <div className="flex w-full items-center justify-center gap-10">
          <Button onClick={props.onCancel} typebtn="outline" sizetype="hug">
            Hủy
          </Button>
          <Button
            onClick={handleCancelContract}
            typebtn="primary"
            sizetype="hug"
          >
            Tiếp tục
          </Button>
        </div>
      </div>
    </StyleModalCustom>
  );
}

export default ModalCommitRevenue;
