import { ColumnsType } from "antd/es/table";
import PathUrl from "../../../Routes/path-url";
import dayjs, { Dayjs } from "dayjs";
import { Link } from "react-router-dom";

const generateScheduleDataExample = (count: number): PlaylistColDataType[] => {
  const data: PlaylistColDataType[] = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: `record_${i + 1}`,
      index: i + 1,
      key: i + 1,
      nameSchedule: "Schedule" + 1,
      timePlayStart: dayjs("12-05-2023"),
      timePlayEnd: dayjs(),
    });
  }
  return data;
};

export interface PlaylistColDataType {
  id: string;
  key: number;
  index: number;
  nameSchedule: string;
  timePlayStart: Dayjs;
  timePlayEnd: Dayjs;
}
type ConfigScheduleProps = {
  onRemove: (id: string) => void;
};
export const ConfigScheduleColTale = (props: ConfigScheduleProps) => {
  const colConfig: ColumnsType<PlaylistColDataType> = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Tên lịch",
      dataIndex: "nameSchedule",
      key: "nameSchedule",
      render: (_, { nameSchedule }) => (
        <div className="w-full min-w-[14rem]">{nameSchedule}</div>
      ),
    },
    {
      title: "Thời gian phát",
      dataIndex: "timePlay",
      key: "timePlay",
      render: (_, { timePlayStart, timePlayEnd }) => (
        <div className="w-full min-w-[14rem]">
          {timePlayStart.format("DD/MM/YY") +
            " - " +
            timePlayEnd.format("DD/MM/YY")}
        </div>
      ),
    },
    {
      title: "",
      dataIndex: "id",
      key: "id",
      render: (_, { id }) => (
        <div className=" flex w-full items-center justify-end gap-4">
          <Link
            to={"/" + PathUrl.URL_SCHEDULE + "/" + id}
            className="min-w-[10rem] text-primary underline hover:text-primary hover:underline hover:brightness-110"
          >
            Xem chi tiết
          </Link>
          <span
            onClick={() => props.onRemove(id)}
            className="min-w-[10rem] cursor-pointer text-error underline hover:text-error hover:underline hover:brightness-110"
          >
            Xóa
          </span>
        </div>
      ),
    },
  ];
  return colConfig;
};

export const dataExampleSchedule = generateScheduleDataExample(40);
