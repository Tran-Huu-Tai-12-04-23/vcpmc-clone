import { ColumnsType } from "antd/es/table";
import dayjs, { Dayjs } from "dayjs";
import { Link } from "react-router-dom";
import PathUrl from "../../../Routes/path-url";

const generateDummyDataHistoryForControlDataType = (
  count: number,
): HistoryForControlDataType[] => {
  const data: HistoryForControlDataType[] = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: `record_${i + 1}`,
      index: i + 1,
      key: i + 1,
      numberContract: "HĐ123",
      miningUnit: "Cty TNHH TM DV ABCEDEF",
      expiredContract: [dayjs(), dayjs()],
      typeContract: "Trọn gói",
      totalNumberPlay: 1000,
      totalRevenue: 123123000,
      revenueNoDistribute: 12312300013123,
      commitDateForControl: dayjs(),
    });
  }
  return data;
};

export interface HistoryForControlDataType {
  id: string;
  key: number;
  index: number;
  numberContract: string;
  miningUnit: string;
  expiredContract: [Dayjs, Dayjs];
  typeContract: string;
  totalNumberPlay: number;
  totalRevenue: number;
  revenueNoDistribute: number;
  commitDateForControl: Dayjs;
}

export const ConfigHistoryForControl: ColumnsType<HistoryForControlDataType> = [
  {
    title: "STT",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "Số hợp đồng",
    dataIndex: "numberContract",
    key: "numberContract",
    width: 130,
  },
  {
    title: "Đơn vị khai thác",
    dataIndex: "miningUnit",
    key: "miningUnit",
    width: 225,
  },
  {
    title: "Thời hạn hợp đồng",
    dataIndex: "expiredContract",
    key: "expiredContract",
    width: 175,
    render: (_, { expiredContract }) => (
      <h5 className="">
        {expiredContract[0].format("YY/MM/DD") +
          "-" +
          expiredContract[1].format("YY/MM/DD")}
      </h5>
    ),
  },
  {
    title: "Loại hợp đồng",
    dataIndex: "typeContract",
    key: "typeContract",
    width: 140,
  },
  {
    title: "Tổng lượt phát",
    dataIndex: "totalNumberPlay",
    key: "totalNumberPlay",
    width: 145,
  },
  {
    title: "Tổng doanh thu",
    dataIndex: "totalRevenue",
    key: "totalRevenue",
    width: 150,
  },
  {
    title: "Doanh thu chưa phân phối",
    dataIndex: "revenueNoDistribute",
    key: "revenueNoDistribute",
    width: 150,
  },
  {
    title: "Ngày chốt đối soát",
    key: "commitDateForControl",
    dataIndex: "commitDateForControl",
    render: (_, { commitDateForControl }) => (
      <h5 className="">{commitDateForControl.format("YY/MM/DD")}</h5>
    ),
    width: 150,
  },
  {
    title: "",
    dataIndex: "id",
    key: "id",
    render: (_, { id }) => (
      <Link
        to={
          "/" +
          PathUrl.URL_REVENUE +
          "/" +
          PathUrl.REVENUE_HISTORY_FOR_CONTROL +
          "/" +
          id
        }
        className="text-primary underline hover:text-primary hover:underline hover:brightness-110"
      >
        Xem chi tiết
      </Link>
    ),
  },
];

export const dataExampleHistoryForControl =
  generateDummyDataHistoryForControlDataType(40);
