import { useState } from "react";
import { List } from "antd";
import FeedBackItem from "./feedbackItem";
import dayjs, { Dayjs } from "dayjs";
import FeedBackImg from "../../../assets/img/FeedbackImg";
import FeedBackPreview from "./FeedBackPreview";

const data = Array.from({ length: 23 }).map((_, i) => ({
  id: i,
  user: "User " + i,
  problem: "Tài khoản",
  isRead: true,
  active: false,
  content:
    "Lorem " +
    i +
    " ipsum dolor sit amet, consectetur adipiscing elit. Euismod iaculis metus, nisl risus urna morbi risus. Blandit tempor, ac eu ut volutpat adipiscing aliquam. Habitasse a semper cras non. Laoreet nibh et, erat sit curabitur sapien, commodo. Accumsan eget ut blandit sed. Tortor ultrices id amet non sit facilisis auctor phasellus nisl. Bibendum et ultrices consequat luctus interdum elementum. Leo pellentesque nulla lectus adipiscing risus, bibendum. Iaculis porttitor ornare sit nisl. Tellus lectus amet mattis sed at. Nisi augue congue ac faucibus nunc. Sed maecenas mus a",
  feedbackDate: dayjs(),
}));
export type FeedBackItemType = {
  id: number;
  user: string;
  problem: string;
  isRead: boolean;
  content: string;
  feedbackDate: Dayjs;
};
const AdminFeedBack = () => {
  const [feedbackSelected, setFeedbackSelected] =
    useState<FeedBackItemType | null>(null);
  return (
    <div className="flex items-center justify-between gap-10 pr-24">
      <div className="h-[734px] max-w-[571px]  rounded-xl bg-table p-4 text-white">
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 6,
            className: "m-auto mt-auto flex justify-center items-center",
          }}
          dataSource={data}
          renderItem={(item) => (
            <FeedBackItem
              active={feedbackSelected && feedbackSelected.id === item.id}
              data={item}
              onClick={(val) => {
                setFeedbackSelected(val);
              }}
            />
          )}
        />
      </div>

      <div className="flex  h-[734px] w-full  rounded-xl bg-table p-10">
        {feedbackSelected ? (
          <FeedBackPreview data={feedbackSelected} />
        ) : (
          <div className="m-auto">
            <FeedBackImg />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminFeedBack;
