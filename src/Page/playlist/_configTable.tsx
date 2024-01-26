import { ColumnsType } from "antd/es/table";
import PathUrl from "../../Routes/path-url";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { IPlaylist } from "../../Model/playlist.model";
import Helper from "../../Helper";

export const ConfigPlaylistColTale: ColumnsType<IPlaylist> = [
  {
    title: "STT",
    dataIndex: "index",
    key: "index",
    render: (_, __, index) => index + 1,
  },
  {
    title: "Tiêu đề",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Số bản ghi",
    dataIndex: "amountRecord",
    key: "amountRecord",
  },
  {
    title: "Thời lượng",
    key: "totalDuration",
    dataIndex: "totalDuration",
    render: (_, { totalDuration }) => {
      return <div>{Helper.convertDurationToString(totalDuration)}</div>;
    },
  },
  {
    title: "Chủ đề",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <div className="box-start gap-2">
        {tags.map((tp, index) => {
          if (index < 5) {
            return (
              <div
                className="rounded-lg border-[1px] border-solid border-[#727288] p-2 text-[12px] text-third"
                key={index}
              >
                {tp}
              </div>
            );
          } else {
            return (
              <div
                className="min-h-[26px] min-w-[44px] rounded-lg border-[1px] border-solid border-[#727288] p-2 text-center text-[12px] text-third"
                key={index}
              >
                ...
              </div>
            );
          }
        })}
      </div>
    ),
  },
  {
    title: "Ngày tạo",
    key: "createAt",
    dataIndex: "createAt",
    render: (_, { createAt }) => (
      <h5 className="">{dayjs(createAt).format("DD/MM/YYYY")}</h5>
    ),
  },
  {
    title: "Người tạo",
    key: "personCreated",
    dataIndex: "personCreated",
  },
  {
    title: "",
    dataIndex: "id",
    key: "id",
    render: (_, { id }) => (
      <div className="box-start gap-4">
        <Link
          to={"/" + PathUrl.URL_PLAYLIST + "/" + id}
          className="text-primary underline hover:text-primary hover:underline hover:brightness-110"
        >
          Chi tiết
        </Link>
      </div>
    ),
  },
];
