import { Avatar } from "antd";
import { Dayjs } from "dayjs";
import { FeedBackItemType } from "./admin";
export type FeedBackItemProps = {
  data: {
    id: number;
    user: string;
    problem: string;
    isRead: boolean;
    content: string;
    feedbackDate: Dayjs;
  };
  active: boolean | null;
  onClick: (val: FeedBackItemType) => void;
};
function FeedBackItem(props: FeedBackItemProps) {
  return (
    <div
      className={`mb-4 flex items-center justify-between gap-4 rounded-xl p-4 ${
        props.active && "bg-modal"
      }`}
      onClick={() => props.onClick(props.data)}
    >
      <Avatar
        className="flex-shrink-0"
        style={{
          width: "56px",
          height: "56px",
        }}
        alt={props.data.user}
      />

      <div className="flex w-[86%] flex-col justify-between  text-white">
        <div className="flex items-center justify-between">
          <h5 className="w-fit font-bold">{props.data.user}</h5>
          <h5 className="text-third">
            <span>{props.data.feedbackDate.format("HH:SS")}</span>
            <span className="ml-2 italic">
              {props.data.feedbackDate.format("DD/MM/YY")}
            </span>
          </h5>
        </div>

        <div
          className={`flex w-full flex-shrink-0 items-center justify-start gap-2 ${
            !props.data.isRead && "font-bold"
          }`}
        >
          <h5 className="flex-shrink-0 ">{props.data.problem}</h5>
          <div className="h-[1px] w-[1px] rounded-full bg-white"></div>
          <p className="w-full truncate">{props.data.content}</p>
          {!props.data.isRead && (
            <div className="h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeedBackItem;
