import { Avatar } from "antd";
import { FeedBackItemType } from "./admin";
import { TextLabel } from "../../../Component";

function FeedBackPreview(props: { data: FeedBackItemType }) {
  return (
    <div className="flex w-full flex-col justify-start">
      <div className="flex items-center justify-between gap-4">
        <Avatar
          className="flex-shrink-0"
          style={{
            width: "56px",
            height: "56px",
          }}
          alt={props.data.user}
        />
        <div className="flex w-full items-center justify-between">
          <h5 className="w-fit font-bold">{props.data.user}</h5>
          <h5 className="text-third">
            <span>{props.data.feedbackDate.format("HH:SS")}</span>
            <span className="ml-2 italic">
              {props.data.feedbackDate.format("DD/MM/YY")}
            </span>
          </h5>
        </div>
      </div>

      <div className="box-start mb-10 mt-6">
        <TextLabel>
          Chủ đề: <span>{props.data.problem}</span>
        </TextLabel>
      </div>
      <p className="line-height-[24px] space-x-3">{props.data.content}</p>
    </div>
  );
}

export default FeedBackPreview;
