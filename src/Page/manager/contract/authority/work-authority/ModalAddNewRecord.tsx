import { Modal, ModalProps } from "antd";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../State";
import {
  Input,
  Button,
  DatePicker,
  Checkbox,
  ButtonUpload,
  TextLabel,
  DropDown,
} from "../../../../../Component";

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

function ModalAddNewRecord(props: ModalPropsCustom) {
  const data = useSelector((state: RootState) => state.authenticate);

  const [error, setError] = useState<string>("");

  const handleCancelContract = async () => {};

  useEffect(() => {
    if (data.error) setError(data.error);
  }, [data, props]);

  return (
    <StyleModalCustom
      width={900}
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
        Thêm bản ghi mới
      </h5>
      <div className="m-auto flex w-[50rem] flex-col items-center justify-center gap-5 p-[2px] text-white">
        <div className="flex w-full flex-col gap-10">
          <div className="flex w-full flex-col gap-4">
            <TextLabel idInput="name-record">
              Tên bản ghi:<span className="text-error">*</span>
            </TextLabel>
            <Input variant="outlined" id="name-record" width={"100%"} />
          </div>
          <div className="flex flex-col gap-4">
            <TextLabel idInput="code-ISRC">Mã ISRC:</TextLabel>
            <Input variant="outlined" id="code-ISRC" width={"100%"} />
          </div>
          <div className="flex flex-col gap-4">
            <TextLabel idInput="authority">
              Tác giả:<span className="text-error">*</span>
            </TextLabel>
            <Input variant="outlined" id="authority" width={"100%"} />
          </div>
          <div className="flex flex-col gap-4">
            <TextLabel idInput="authority">
              Ca sĩ/Nhóm nhạc:<span className="text-error">*</span>
            </TextLabel>
            <Input variant="outlined" id="authority" width={"100%"} />
          </div>
          <div className="flex items-center justify-between gap-10">
            <div className="flex w-1/2 flex-col gap-4">
              <TextLabel idInput="genre">
                Thể loại:<span className="text-error">*</span>
              </TextLabel>
              <DropDown
                backgroundDrop="#2b2b3f"
                classDropItem="border-second bg-input "
                active={{
                  key: -1,
                  name: "Chọn một thể loại nhạc",
                }}
                dropItems={[
                  {
                    name: "Rap",
                    key: 1,
                  },
                  {
                    name: "Ballad",
                    key: 2,
                  },
                  {
                    name: "Rock n Roll",
                    key: 3,
                  },
                  {
                    name: "R&B",
                    key: 4,
                  },
                ]}
                width="100%"
                height={48}
                onSelect={function (value: {
                  name: string;
                  key: number;
                }): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </div>
            <div className="flex w-1/2 flex-col gap-4">
              <TextLabel idInput="manufactory">
                Nhà sản xuất:<span className="text-error">*</span>
              </TextLabel>
              <Input variant="outlined" id="manufactory" width={"100%"} />
            </div>
          </div>
          <div className="flex items-center justify-between gap-10">
            <div className="flex w-1/2 items-center  gap-10">
              <TextLabel idInput="genre">Đính kèm tệp:</TextLabel>
              <ButtonUpload />
            </div>
            <div className="flex w-1/2 items-center gap-10">
              <TextLabel idInput="genre">Đính kèm lời bài hát:</TextLabel>
              <ButtonUpload />
            </div>
          </div>
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
            Tải lên
          </Button>
        </div>
      </div>
    </StyleModalCustom>
  );
}

export default ModalAddNewRecord;
