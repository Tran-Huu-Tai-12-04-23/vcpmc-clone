import { Button, Paging, TextHeader } from "../../../Component";
import AndroidIcon from "../../../assets/img/AndroidIcon";
import ToolUploadIcon from "../../../assets/img/ToolUploadIcon";
import WindowIcon from "../../../assets/img/WindowIcon";
import InstallAppImg from "../../../assets/img/installAppImg";
import InstallAppImgFooter from "../../../assets/img/installAppImgFooter1";
import InstallAppImgFooter2 from "../../../assets/img/installAppImgFooter2";
import InstallAppImgFooter3 from "../../../assets/img/installAppImgFooter3";
import InstallAppImgHeader from "../../../assets/img/installAppImgHeader";

const PagingItems = [
  {
    name: "Hỗ trợ",
  },
  {
    name: "Tải App",
  },
];

function SupportInstall() {
  return (
    <div className="w-full">
      <div className="fixed top-0">
        <InstallAppImg />
      </div>
      <div className="fixed top-0 translate-x-[8rem]">
        <InstallAppImgHeader />
      </div>
      <div className="fixed bottom-[10rem] right-0">
        <InstallAppImgFooter2 />
      </div>
      <div className="fixed bottom-0 right-[16rem]">
        <InstallAppImgFooter3 />
      </div>
      <div className="fixed bottom-0 right-[15rem]">
        <InstallAppImgFooter />
      </div>

      <Paging items={PagingItems} />
      <TextHeader>Tải App</TextHeader>

      <div className="flex w-full flex-col items-center justify-center">
        <div className="box-start gap-4 ">
          <h5 className="text-[64px] font-semibold">ứng dụng</h5>
          <h5 className="text-[64px] font-semibold text-primary">VCPMC</h5>
        </div>
        <div className="mt-5 w-[377px] border-b-[2px] border-dashed border-primary"></div>

        <h5 className="mt-10 w-[544px] text-center text-[32px]">
          Bạn vui lòng chọn
        </h5>
        <h5 className="w-[544px] text-center text-[32px]">
          <span className=" font-semibold">nền tảng</span> phù hợp để trải
          nghiệm
        </h5>

        <div className="mt-10 flex items-center justify-center gap-24">
          <div className="flex flex-col gap-4 rounded-xl bg-input p-4">
            <div className="flex min-h-[300px] w-[300px] flex-col items-center justify-center p-4">
              <ToolUploadIcon />
            </div>
            <Button typebtn="primary" sizetype="hug">
              Tool Upload
            </Button>
          </div>
          <div className="flex flex-col gap-4  rounded-xl bg-input p-4">
            <div className="flex min-h-[300px] w-[300px] flex-col items-center justify-center p-4">
              <WindowIcon />
            </div>
            <Button typebtn="primary" sizetype="hug">
              Tải App Window
            </Button>
          </div>
          <div className="flex flex-col gap-4  rounded-xl bg-input p-4">
            <div className="flex min-h-[300px] w-[300px] flex-col items-center justify-center p-4">
              <AndroidIcon />
            </div>
            <Button typebtn="primary" sizetype="hug">
              Tải App Android
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportInstall;
