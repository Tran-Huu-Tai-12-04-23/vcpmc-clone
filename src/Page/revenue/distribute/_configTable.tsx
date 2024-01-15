import { ColumnsType } from "antd/es/table";
import dayjs, { Dayjs } from "dayjs";
import { Link } from "react-router-dom";
import PathUrl from "../../../Routes/path-url";

const generateDummyDataRevenueColDataType = (
  count: number,
): RevenueColDataType[] => {
  const data: RevenueColDataType[] = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: `record_${i + 1}`,
      index: i + 1,
      key: i + 1,
      nameContractAuthority: "UQ789",
      authorityPerson: "Vương Anh Tú",
      amountSongAuthority: 15,
      revenue: 365000000,
      administrativeFee: 100000000000,
      royaltyLevel: 3900000000,
      closingDateReconciliation: dayjs(),
      nameSong: "song " + i,
      numberPlay: 9 * i + 1,
    });
  }
  return data;
};

export interface RevenueColDataType {
  id: string;
  key: number;
  index: number;
  nameContractAuthority: string;
  authorityPerson: string;
  amountSongAuthority: number;
  revenue: number;
  administrativeFee: number;
  royaltyLevel: number;
  closingDateReconciliation: Dayjs;
  nameSong: string;
  numberPlay: number;
}

export const ConfigRevenueColTale: ColumnsType<RevenueColDataType> = [
  {
    title: "STT",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "Hợp đồng ủy quyền",
    dataIndex: "nameContractAuthority",
    key: "nameContractAuthority",
  },
  {
    title: "Người ủy quyền",
    dataIndex: "authorityPerson",
    key: "authorityPerson",
  },
  {
    title: "Số bài hát ủy quyền",
    dataIndex: "amountSongAuthority",
    key: "amountSongAuthority",
  },
  {
    title: "Doanh thu (VNĐ)",
    dataIndex: "revenue",
    key: "revenue",
  },
  {
    title: "Hành chính phí (VNĐ)",
    dataIndex: "administrativeFee",
    key: "administrativeFee",
  },
  {
    title: "Mức nhuận bút (VNĐ)",
    dataIndex: "royaltyLevel",
    key: "royaltyLevel",
  },
  {
    title: "Ngày chốt đối soát",
    key: "closingDateReconciliation",
    dataIndex: "closingDateReconciliation",
    render: (_, { closingDateReconciliation }) => (
      <h5 className="">{closingDateReconciliation.format("YY/MM/DD")}</h5>
    ),
  },
  {
    title: "Chi tiết doanh thu",
    dataIndex: "id",
    key: "id",
    render: (_, { id }) => (
      <Link
        to={
          "/" +
          PathUrl.URL_REVENUE +
          "/" +
          PathUrl.REVENUE_DISTRIBUTION +
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

export const dataExampleRevenue = generateDummyDataRevenueColDataType(40);
