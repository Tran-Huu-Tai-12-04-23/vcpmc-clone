import { ColumnsType } from "antd/es/table";
import dayjs, { Dayjs } from "dayjs";
import { Link } from "react-router-dom";
import PathUrl from "../../../../Routes/path-url";

const generateScheduleDataExample = (count: number): PlaylistColDataType[] => {
  const data: PlaylistColDataType[] = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: `record_${i + 1}`,
      index: i + 1,
      key: i + 1,
      namePlaylist: "playlist" + 1,
      timeStartPlayPlaylist: dayjs("12-05-2023"),
      timeEndPlayPlaylist: dayjs(),
      rangeTimes: ["06:00:00 - 08:00:00"],
      circlePlay: ["Thứ 3", "Thứ 6"],
      devices: ["Thiết bị 1 ", "Thiết bị 2", "Thiết bị 3"],
    });
  }
  return data;
};

export interface PlaylistColDataType {
  id: string;
  key: number;
  index: number;
  namePlaylist: string;
  timeStartPlayPlaylist: Dayjs;
  timeEndPlayPlaylist: Dayjs;
  rangeTimes: string[];
  circlePlay: string[];
  devices: string[];
}
type ConfigScheduleProps = {};
export const ConfigDetailScheduleColTale = (props: ConfigScheduleProps) => {
  const colConfig: ColumnsType<PlaylistColDataType> = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Tên Playlist",
      dataIndex: "namePlaylist",
      key: "namePlaylist",
      render: (_, { namePlaylist }) => (
        <div className="w-fit">{namePlaylist}</div>
      ),
    },
    {
      title: "Ngày phát Playlist",
      dataIndex: "timePlayPlaylist",
      key: "timePlayPlaylist",
      render: (_, { timeStartPlayPlaylist, timeEndPlayPlaylist }) => (
        <div className="w-fit">
          {timeStartPlayPlaylist.format("DD/MM/YY") +
            " - " +
            timeEndPlayPlaylist.format("DD/MM/YY")}
        </div>
      ),
    },
    {
      title: "Bắt đầu - Kết thúc",
      dataIndex: "rangeTimes",
      key: "rangeTimes",
      render: (_, { rangeTimes }) => (
        <div className="">
          <div className="flex flex-col gap-4">
            {rangeTimes.map((time, index) => {
              return <div key={index}>{time}</div>;
            })}
          </div>
        </div>
      ),
    },
    {
      title: "Chu kỳ phát",
      dataIndex: "circlePlay",
      key: "circlePlay",
      render: (_, { circlePlay }) => (
        <div className="flex -translate-x-2 items-center justify-start gap-4">
          {circlePlay.map((time, index) => {
            return (
              <div key={index}>
                <span className="mr-2"> {index > 0 && "|"} </span>

                {time}
              </div>
            );
          })}
        </div>
      ),
    },
    {
      title: "Thiết bị",
      dataIndex: "devices",
      key: "devices",
      render: (_, { devices }) => (
        <div className="flex -translate-x-2 items-center justify-start ">
          {devices.map((dev, index) => {
            return (
              <div key={index}>
                <span className="mr-2"> {index > 0 && "|"} </span>

                {dev}
              </div>
            );
          })}
        </div>
      ),
    },
  ];
  return colConfig;
};

export const dataExampleDetailSchedule = generateScheduleDataExample(40);
