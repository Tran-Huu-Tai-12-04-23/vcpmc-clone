import { ColumnsType } from "antd/es/table";
import PathUrl from "../../Routes/path-url";
import dayjs, { Dayjs } from "dayjs";
import { Link } from "react-router-dom";

const generateDummyDataPlaylist = (count: number): PlaylistColDataType[] => {
  const data: PlaylistColDataType[] = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: `record_${i + 1}`,
      index: i + 1,
      key: i + 1,
      title: "Playlist" + 1,
      amountRecord: 0,
      duration: 0,
      topic: ["Pop", "Chill", "Dingga", "Rock", "Ballad", "Trending"],
      createAt: dayjs(),
      personCreated: "Huu tai " + i,
    });
  }
  return data;
};

export interface PlaylistColDataType {
  id: string;
  key: number;
  index: number;
  title: string;
  amountRecord: number;
  duration: number;
  topic: string[];
  createAt: Dayjs;
  personCreated: string;
}

export const ConfigPlaylistColTale: ColumnsType<PlaylistColDataType> = [
  {
    title: "STT",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "Tiêu đề",
    dataIndex: "title",
    key: "title",
    render: (_, { title }) => <div className="min-w-[14rem]">{title}</div>,
  },
  {
    title: "Số bản ghi",
    dataIndex: "amountRecord",
    key: "amountRecord",
  },
  {
    title: "Thời lượng",
    key: "duration",
    dataIndex: "duration",
  },
  {
    title: "Chủ đề",
    key: "topic",
    dataIndex: "topic",
    render: (_, { topic }) => (
      <div className="box-start gap-2">
        {topic.map((tp, index) => {
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
      <h5 className="">{createAt.format("YY/MM/DD")}</h5>
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

export const dataExamplePlaylist = generateDummyDataPlaylist(40);
