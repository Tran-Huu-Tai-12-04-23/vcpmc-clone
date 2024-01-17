import { ColumnsType } from "antd/es/table";
import dayjs, { Dayjs } from "dayjs";

export type TypeContract = {
  id: string;
  index: number;
  key: number;
  typeContract: string;
  VCPCMRevenue_contract: string;
  dateApply?: Dayjs;
};
export const ConfigTypeContractCol: ColumnsType<TypeContract> = [
  {
    title: "STT",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "Loại hợp đồng",
    dataIndex: "typeContract",
    key: "typeContract",
  },
  {
    title: "Doanh thu VCPCM/hợp đồng (Đơn vị: %) ",
    dataIndex: "VCPCMRevenue_contract",
    key: "VCPCMRevenue_contract",
    render: (_, { VCPCMRevenue_contract }) => <h5>{VCPCMRevenue_contract}</h5>,
  },
];
export const dataTypeContract = [
  {
    id: "1",
    index: 1,
    key: 1,
    typeContract: "Trọn gói",
    VCPCMRevenue_contract: "20%",
    isNewRow: true,
    dateApply: dayjs(),
  },
  {
    id: "2",
    index: 2,
    key: 2,
    typeContract: "Giá trị bài hát/ lượt phát",
    VCPCMRevenue_contract: "20%",
    isNewRow: true,
    dateApply: dayjs(),
  },
];
