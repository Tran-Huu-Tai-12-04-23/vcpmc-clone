import { useRef, useState } from "react";
import { UploadIcon } from "../../assets/icon";
import { uploadImage } from "../../Service/common.service";
import { Spin } from "antd";
import styled from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";

export type ButtonUploadProps = {
  onResult?: (val: string) => void;
};

const SpinCustom = styled(Spin)`
  .anticon svg {
    color: var(--primary);
  }
`;

function ButtonUpload(props: ButtonUploadProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setLoading(true);
      const res = await uploadImage(selectedFile);
      props.onResult && res && props.onResult(res);
      setLoading(false);
    }
  };

  return (
    <div
      onClick={handleButtonClick}
      className="center-item h-[40px] w-fit min-w-[108px] cursor-pointer gap-2 rounded-[8px] border-[1px] border-solid border-[#ffac69] p-2 text-[#ffac69] hover:bg-[rgba(0,0,0,0.1)]"
    >
      {loading ? (
        <SpinCustom
          indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
        />
      ) : (
        <>
          <UploadIcon />
          <span>Tải lên</span>
          <input
            ref={inputRef}
            className="hidden"
            type="file"
            onChange={handleFileChange}
          />
        </>
      )}
    </div>
  );
}

export default ButtonUpload;
