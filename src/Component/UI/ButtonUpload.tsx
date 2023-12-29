import { UploadIcon } from "../../assets/icon";

function ButtonUpload() {
  return (
    <div className="center-item h-[40px] w-fit min-w-[108px] cursor-pointer gap-2 rounded-[8px] border-[1px] border-solid border-[#ffac69] p-2 text-[#ffac69] hover:bg-[rgba(0,0,0,0.1)]">
      <UploadIcon />
      <span>Tai len</span>
    </div>
  );
}

export default ButtonUpload;
