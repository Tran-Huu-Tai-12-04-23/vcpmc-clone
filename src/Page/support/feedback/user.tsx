import { useState } from "react";
import { Button, DropDown, Input, TextLabel } from "../../../Component";

const TypeProblemFeedbacks = [
  {
    name: "Tài khoản",
    key: 1,
  },
  {
    name: "Quản lý doanh thu",
    key: 2,
  },
  {
    name: "Vấn đề bản quyền",
    key: 3,
  },
  {
    name: "Khác",
    key: 4,
  },
];
function UserFeedBack() {
  const [problem, setProblem] = useState<{ name: string; key: number }>({
    key: -1,
    name: "Chọn vấn đề bạn cần được hỗ trợ",
  });
  return (
    <>
      <div className="m-auto mt-10 flex min-h-[600px] w-[764px] flex-col gap-4 rounded-xl bg-table p-10">
        <div className="flex flex-col gap-2">
          <TextLabel>Tên người dùng</TextLabel>
          <Input value={"Ng.Tuyết"} readOnly />
        </div>

        <div className="flex flex-col gap-2">
          <TextLabel>Bạn muốn được hỗ trợ vấn đề gì?</TextLabel>
          <DropDown
            classDropItem="border-second bg-input"
            width="100%"
            active={problem}
            dropItems={TypeProblemFeedbacks}
            onSelect={(val) => setProblem(val)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <TextLabel>Nội dung</TextLabel>
          <Input type="area" height={300} />
        </div>
      </div>
      <div className="center-item mt-10 w-full">
        <Button typebtn="primary" sizetype="hug">
          Gửi
        </Button>
      </div>
    </>
  );
}

export default UserFeedBack;
