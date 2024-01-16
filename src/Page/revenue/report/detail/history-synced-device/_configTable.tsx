import { ColumnsType } from "antd/es/table";
import dayjs, { Dayjs } from "dayjs";

const generateDummyDataHistorySyncedData = (
  count: number,
): HistorySyncedDataType[] => {
  const data: HistorySyncedDataType[] = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: `record_${i + 1}`,
      index: i + 1,
      key: i + 1,
      totalNumberPlay: 1000,
      dateSyncedData: dayjs(),
      status: i % 2 === 0 ? true : false,
      nameDevice: "device " + i,
    });
  }
  return data;
};

const generateDummySongData = (count: number): SongDataType[] => {
  const data: SongDataType[] = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: `record_${i + 1}`,
      index: i + 1,
      key: i + 1,
      numberPlay: 5 * i,
      nameSong: "song " + i,
    });
  }
  return data;
};

export interface HistorySyncedDataType {
  id: string;
  key: number;
  index: number;
  nameDevice: string;
  status: boolean;
  dateSyncedData: Dayjs;
  totalNumberPlay: number;
}

export const ConfigHistorySyncedDataCol: ColumnsType<HistorySyncedDataType> = [
  {
    title: "STT",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "Tên thiết bị",
    dataIndex: "nameDevice",
    key: "nameDevice",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    render: (_, { status }) => (
      <div className="box-start gap-2">
        {status ? (
          <>
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <h5>Đang hoạt động</h5>
          </>
        ) : (
          <>
            <div className="h-2 w-2 rounded-full bg-red-500"></div>
            <h5>Ngưng hoạt động</h5>
          </>
        )}
      </div>
    ),
  },
  {
    title: "Thời gian đồng bộ dữ liệu",
    dataIndex: "dateSyncedData",
    key: "dateSyncedData",
    render: (_, { dateSyncedData }) => (
      <h5 className="text-center">{dateSyncedData.format("YY/MM/DD")}</h5>
    ),
  },
  {
    title: "Tống số lượt phát",
    dataIndex: "totalNumberPlay",
    key: "totalNumberPlay",
    render: (_, { totalNumberPlay }) => (
      <h5 className="text-center">{totalNumberPlay}</h5>
    ),
  },
];

type SongDataType = {
  id: string;
  key: number;
  index: number;
  nameSong: string;
  numberPlay: number;
};
export const ConfigSongCol: ColumnsType<SongDataType> = [
  {
    title: "STT",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "Danh sách bài hát",
    dataIndex: "nameSong",
    key: "nameSong",
  },
  {
    title: "Số lượt phát",
    dataIndex: "numberPlay",
    key: "numberPlay",
    render: (_, { numberPlay }) => (
      <h5 className="text-center">{numberPlay}</h5>
    ),
  },
];

export const dataExampleHistorySyncedData =
  generateDummyDataHistorySyncedData(40);
export const dataExampleSong = generateDummySongData(40);
