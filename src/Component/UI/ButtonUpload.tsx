import { useRef, useState } from "react";
import { UploadIcon } from "../../assets/icon";
import { uploadImage } from "../../Service/common.service";
import { Spin } from "antd";
import styled from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";
import { File } from "../../Model/contractMining.model";

export type ButtonUploadProps = {
  onResult?: (val: File) => void;
  type?: string;
};

const SpinCustom = styled(Spin)`
  .anticon svg {
    color: var(--primary);
  }
`;

function ButtonUpload({ type = "image", ...props }: ButtonUploadProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;

    if (selectedFiles) {
      setLoading(true);

      try {
        const uploadPromises = Array.from(selectedFiles).map(
          async (selectedFile) => {
            const res = await uploadImage(
              selectedFile,
              type === "image" ? "img" : "file",
            );

            res &&
              props.onResult &&
              props.onResult({
                name: selectedFile.name,
                link: res,
                type: selectedFile.type,
              });
          },
        );

        const results = await Promise.all(uploadPromises);
        console.log(results);
      } catch (error) {
        console.error("Error uploading files:", error);
      }

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
            accept={type === "image" ? "image/*" : ".doc, .docx, .pdf, .txt"} // Add specific document file types as needed
            onChange={handleFileChange}
            multiple={type === "image" ? false : true}
          />
        </>
      )}
    </div>
  );
}

export default ButtonUpload;
