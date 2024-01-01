import { Modal, ModalProps } from "antd";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../State";
import {
  Input,
  Button,
  TextLabel,
  DatePicker,
  Checkbox,
  ButtonUpload,
} from "../../../../Component";

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

function ModalRenewalContract(props: ModalPropsCustom) {
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
      style={{
        width: "unset",
      }}
    >
      <h5 className="pb-6 text-center text-[24px] font-[700] text-white">
        Gia hạn uỷ quyền tác phẩm
      </h5>
      <div className="m-auto flex w-[50rem] flex-col items-center justify-center gap-5 p-[2px] text-white">
        <div className="flex w-full items-start justify-between">
          <div className="flex w-1/2 flex-col gap-4">
            <h5 className="text-size-primary font-semibold">
              Thời gian gia hạn
              <span className="text-error">*</span>
            </h5>
            <h5>
              Từ ngày: <span>02/08/2021</span>
            </h5>
            <div className="box-start gap-2">
              <h5 className=" flex-shrink-0">Đến ngày:</h5>
              <DatePicker />
            </div>

            <p className="text-[#FFD0AB]">
              Lưu ý: Thời gian bắt đầu gia hạn hợp đồng mới được tính sau ngày
              hết hạn hợp đồng cũ một ngày.
            </p>
          </div>
          <div className="w-1/2">
            <div className="flex w-1/2 flex-col gap-4">
              <h5 className="text-size-primary font-semibold">
                Mức nhuận bút
                <span className="text-error">*</span>
              </h5>
              <div className="box-start gap-2">
                <Checkbox />
                <h5>Quyền tác giả</h5>
                <Input width={50} readOnly value={"0"} />
                <h5>%</h5>
              </div>
              <div>
                <div className="box-start">
                  <Checkbox />
                  <h5>Quyền liên quan:</h5>
                </div>
                <div className="ml-10 flex flex-col gap-2">
                  <div className="box-start w-max gap-2">
                    <Checkbox />
                    <h5 className="w-[12rem]">Quyền của người biểu diễn</h5>
                    <Input width={50} readOnly value={"50"} />
                    <h5>%</h5>
                  </div>
                  <div className="box-start  w-max  gap-2">
                    <Checkbox />
                    <h5 className="w-[12rem]">
                      Quyền của nhà sản xuất (bản ghi/video)
                    </h5>
                    <Input width={50} readOnly value={"50"} />
                    <h5>%</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="box-start w-full gap-2">
          <h5 className="text-size-primary font-semibold">Đính kèm tệp:</h5>
          <ButtonUpload />
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

export default ModalRenewalContract;
