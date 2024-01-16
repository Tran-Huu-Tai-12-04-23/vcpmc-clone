import { ColumnsType } from "antd/es/table";
import dayjs, { Dayjs } from "dayjs";
import { Link } from "react-router-dom";
import PathUrl from "../../../../Routes/path-url";

const generateDummyDataRevenueForContract = (
  count: number,
): RevenueForContractDataType[] => {
  const data: RevenueForContractDataType[] = [];
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
      totalDeviceSynced: i + 1,
      totalDevice: i + 1 + Math.ceil(Math.random()),
    });
  }
  return data;
};

export interface RevenueForContractDataType {
  id: string;
  key: number;
  index: number;
  numberContract: string;
  miningUnit: string;
  expiredContract: [Dayjs, Dayjs];
  totalDeviceSynced: number;
  typeContract: string;
  totalNumberPlay: number;
  totalRevenue: number;
  revenueNoDistribute: number;
  commitDateForControl: Dayjs;
  totalDevice: number;
}

export const ConfigRevenueContractCol: ColumnsType<RevenueForContractDataType> =
  [
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
      title: "Số thiết bị đã đồng bộ",
      dataIndex: "totalDeviceSynced",
      key: "totalDeviceSynced",
      width: 200,
      render: (_, { totalDeviceSynced, totalDevice }) =>
        totalDevice === totalDeviceSynced ? (
          <h5 className="">{totalDeviceSynced + "/" + totalDevice}</h5>
        ) : (
          <h5 className="text-error">
            {totalDeviceSynced + "/" + totalDevice}
          </h5>
        ),
    },
    {
      title: "Ngày chốt đối soát",
      key: "commitDateForControl",
      dataIndex: "commitDateForControl",
      render: (_, { commitDateForControl }) => (
        <h5 className="">{commitDateForControl.format("YY/MM/DD")}</h5>
      ),
      width: 170,
    },
    {
      title: "",
      dataIndex: "id",
      key: "id",
      render: (_, { id }) => (
        <div className="center-item gap-4">
          <Link
            to={
              "/" +
              PathUrl.URL_REVENUE +
              "/" +
              PathUrl.REVENUE_REPORT +
              "/" +
              id
            }
            className="text-primary underline hover:text-primary hover:underline hover:brightness-110"
          >
            Chi tiết doanh thu
          </Link>
          <Link
            to={
              "/" +
              PathUrl.URL_REVENUE +
              "/" +
              PathUrl.REVENUE_REPORT +
              "/" +
              PathUrl.HISTORY_SYNCED_DEVICE +
              "/" +
              id
            }
            className="text-primary underline hover:text-primary hover:underline hover:brightness-110"
          >
            Lịch sử đồng bộ trên thiết bị
          </Link>
        </div>
      ),
    },
  ];

export const dataExampleRevenueForContract =
  generateDummyDataRevenueForContract(40);
