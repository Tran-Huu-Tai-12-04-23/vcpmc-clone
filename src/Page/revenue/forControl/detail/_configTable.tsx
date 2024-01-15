import { ColumnsType } from "antd/es/table";
import dayjs, { Dayjs } from "dayjs";

const generateDummyDataListRecord = (count: number): RecordDataType[] => {
  const data: RecordDataType[] = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: `record_${i + 1}`,
      index: i + 1,
      key: i + 1,
      nameSong: "Let Us Be" + i,
      totalNumberPlay: 200 * i,
      totalRevenue: 365.0 * i,
      performanceRight: 36.266 * i,
      productionRight: 20.04 * i,
      VCPMC: 20.04 * i,
    });
  }
  return data;
};

export interface RecordDataType {
  id: string;
  key: number;
  index: number;
  nameSong: string;
  totalNumberPlay: number;
  totalRevenue: number;
  performanceRight: number;
  productionRight: number;
  VCPMC: number;
}

export const ConfigColListRecord: ColumnsType<RecordDataType> = [
  {
    title: "STT",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "Tên bài hát",
    dataIndex: "nameSong",
    key: "nameSong",
    width: 180,
  },
  {
    title: "Tổng số lượt phát",
    dataIndex: "totalNumberPlay",
    key: "totalNumberPlay",
    width: 250,
  },
  {
    title: "Tổng doanh thu",
    dataIndex: "totalRevenue",
    key: "totalRevenue",
    width: 225,
  },
  {
    title: "Quyền biểu diễn",
    dataIndex: "performanceRight",
    key: "performanceRight",
    width: 225,
  },
  {
    title: "Quyền sản xuất",
    dataIndex: "productionRight",
    key: "productionRight",
    width: 225,
  },
  {
    title: "VCPMC",
    dataIndex: "VCPMC",
    key: "VCPMC",
    width: 225,
  },
];

export const dataExampleListRecord = generateDummyDataListRecord(40);
