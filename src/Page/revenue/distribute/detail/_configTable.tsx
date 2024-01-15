import { ColumnsType } from "antd/es/table";
import { RevenueColDataType } from "../_configTable";

export const ConfigRevenueColTale: ColumnsType<RevenueColDataType> = [
  {
    title: (
      <div className="flex flex-col items-start justify-start gap-4 ">
        <h5 className="font-bold text-second">STT</h5>
        <h5 className="mt-4 font-bold text-white">Tổng</h5>
        <div className="h-[2px] w-full scale-x-150 bg-modal"></div>
      </div>
    ),
    dataIndex: "index",
    key: "index",
  },
  {
    title: (
      <div className="flex flex-col items-start justify-start gap-4 ">
        <h5 className="font-bold text-second">Bài hát</h5>
        <h5 className="mt-4 font-bold text-white">13</h5>
        <div className="h-[2px] w-full scale-x-150 bg-modal"></div>
      </div>
    ),
    dataIndex: "nameSong",
    key: "nameSong",
  },
  {
    title: (
      <div className="flex flex-col items-start justify-start gap-4 ">
        <h5 className="font-bold text-second">Số lượt phát</h5>
        <h5 className="mt-4 font-bold text-white">17,527</h5>
        <div className="h-[2px] w-full scale-x-150 bg-modal"></div>
      </div>
    ),
    dataIndex: "numberPlay",
    key: "numberPlay",
  },
  {
    title: (
      <div className="flex flex-col items-start justify-start gap-4 ">
        <h5 className="font-bold text-second">Doanh thu (VNĐ)</h5>
        <h5 className="mt-4 font-bold text-white">1.045.000,000</h5>
        <div className="h-[2px] w-full scale-x-150 bg-modal"></div>
      </div>
    ),
    dataIndex: "revenue",
    key: "revenue",
  },
  {
    title: (
      <div className="flex flex-col items-start justify-start gap-4 ">
        <h5 className="font-bold text-second">Hành chính phí (VNĐ)</h5>
        <h5 className="mt-4 font-bold text-white">1.045.000,000</h5>
        <div className="h-[2px] w-full scale-x-150 bg-modal"></div>
      </div>
    ),
    dataIndex: "administrativeFee",
    key: "administrativeFee",
  },
  {
    title: (
      <div className="flex flex-col items-start justify-start gap-4 ">
        <h5 className="font-bold text-second">Nhuận bút (VNĐ)</h5>
        <h5 className="mt-4 font-bold text-white">835.998.495</h5>
        <div className="h-[2px] w-full scale-x-150 bg-modal"></div>
      </div>
    ),
    dataIndex: "royaltyLevel",
    key: "royaltyLevel",
  },
];

type MissPhoneDataType = {
  miningUnit: string;
  numberPlay: number;
  revenue: number;
  id: string;
};

const generateDummyDataMissPhone = (count: number): MissPhoneDataType[] => {
  const data: MissPhoneDataType[] = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: `record_${i + 1}`,
      miningUnit: "CTy TNHH A",
      revenue: 365000000,
      numberPlay: 9 * i + 1,
    });
  }
  return data;
};
export const ConfigMissPhone: ColumnsType<MissPhoneDataType> = [
  {
    title: (
      <div className="flex flex-col items-start justify-start gap-4 ">
        <h5 className="font-bold text-second">Đơn vị khai thác</h5>
        <h5 className="mt-4 font-bold text-white">Tổng</h5>
        <div className="h-[2px] w-full scale-x-150 bg-modal"></div>
      </div>
    ),
    dataIndex: "miningUnit",
    key: "miningUnit",
  },
  {
    title: (
      <div className="flex flex-col items-start justify-start gap-4 ">
        <h5 className="font-bold text-second">Số lượt phát</h5>
        <h5 className="mt-4 font-bold text-white">100</h5>
        <div className="h-[2px] w-full scale-x-150 bg-modal"></div>
      </div>
    ),
    dataIndex: "numberPlay",
    key: "numberPlay",
  },
  {
    title: (
      <div className="flex flex-col items-start justify-start gap-4 ">
        <h5 className="font-bold text-second">Doanh thu (VNĐ)</h5>
        <h5 className="mt-4 font-bold text-white">835.998.495</h5>
        <div className="h-[2px] w-full scale-x-150 bg-modal"></div>
      </div>
    ),
    dataIndex: "revenue",
    key: "revenue",
  },
];
export const dataExampleMissPhone = generateDummyDataMissPhone(40);
