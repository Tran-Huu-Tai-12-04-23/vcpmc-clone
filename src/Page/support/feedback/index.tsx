import { Paging, TextHeader } from "../../../Component";
import Admin from "./admin";
import User from "./user";

const PagingItems = [
  {
    name: "Hỗ trợ",
  },
  {
    name: "Feedback",
  },
];
function FeedBack() {
  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Feedback</TextHeader>

      <div className="mt-5 w-full">
        <Admin />
        {/* <User /> */}
      </div>
    </div>
  );
}

export default FeedBack;
