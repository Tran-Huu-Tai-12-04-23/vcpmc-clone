import { useEffect, useState } from "react";
import {
  Paging,
  LineChart,
  TextHeader,
  TextLabel,
  DropDown,
} from "../../../Component";
import FloatingActionButton from "../../../Component/UI/FloatingActionButton";
import { InvoiceIcon } from "../../../assets/icon";

const PagingItems = [
  {
    name: "Doanh thu",
  },
  {
    name: "Lịch sử đối soát",
  },
];

const TypeReportList = [
  { name: "Theo tháng", key: 1 },
  {
    name: "Theo quý",
    key: 2,
  },
];

const quarterList = [
  {
    name: "Quý 1",
    key: 1,
  },
  {
    name: "Quý 2",
    key: 2,
  },
  {
    name: "Quý 3",
    key: 3,
  },
  {
    name: "Quý 4",
    key: 4,
  },
];
const monthList = [
  {
    name: "Tháng 1",
    key: 1,
  },
  {
    name: "Tháng 2",
    key: 2,
  },
  {
    name: "Tháng 3",
    key: 3,
  },
  {
    name: "Tháng 4",
    key: 4,
  },
  {
    name: "Tháng 5",
    key: 5,
  },
  {
    name: "Tháng 6",
    key: 6,
  },
  {
    name: "Tháng 7",
    key: 7,
  },
  {
    name: "Tháng 8",
    key: 8,
  },
  {
    name: "Tháng 9",
    key: 9,
  },
  {
    name: "Tháng 10",
    key: 10,
  },
  {
    name: "Tháng 11",
    key: 11,
  },
  {
    name: "Tháng 12",
    key: 12,
  },
];
function ReportRevenue() {
  const [typeReport, setTypeReport] = useState<{ name: string; key: number }>(
    TypeReportList[0],
  );
  const [active, setActive] = useState<{ name: string; key: number }>({
    ...monthList[0],
    name: monthList[0].name + " / " + new Date().getFullYear(),
  });
  const floatingAction = [
    {
      name: "Báo cáo chi tiết",
      icon: <InvoiceIcon />,
      action: () => {},
    },
  ];
  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Báo cáo doanh thu</TextHeader>
      <div className="mt-4 flex w-full justify-between gap-10">
        <div className="w-full">
          <div className="box-start mb-6 gap-6">
            <div className="box-start gap-4">
              <TextLabel>Theo tháng:</TextLabel>
              <DropDown
                classDropItem="border-second min-w-[14rem] bg-main"
                active={typeReport}
                dropItems={TypeReportList}
                onSelect={(val) => setTypeReport(val)}
              />
            </div>
            <DropDown
              active={active}
              classDropItem="border-second min-w-[14rem] bg-main"
              dropItems={typeReport.key === 1 ? monthList : quarterList}
              onSelect={(val) =>
                setActive({
                  ...val,
                  name: val.name + " / " + new Date().getFullYear(),
                })
              }
            />
          </div>
          <div className="mb-4 flex w-full items-center justify-center gap-10 rounded-xl bg-input p-10">
            <div className="flex flex-col items-center justify-center border-r-[1px] border-solid border-second pr-10">
              <h5 className="text-[18px] font-semibold text-third">
                Tổng số bài hát
              </h5>
              <h5 className="text-[24px] font-semibold text-second">100</h5>
            </div>
            <div className="flex flex-col items-center justify-center  border-r-[1px] border-solid border-second pr-10">
              <h5 className="text-[18px] font-semibold text-third">
                Tổng số lượt phát
              </h5>
              <h5 className="text-[24px] font-semibold text-second">
                32.000.000
              </h5>
            </div>
            <div className="flex flex-col items-center justify-center  border-r-[1px] border-solid border-second pr-10">
              <h5 className="text-[18px] font-semibold text-third">
                Doanh thu trên lượt phát
              </h5>
              <h5 className="text-[24px] font-semibold text-second">
                1.564.745.000đ
              </h5>
            </div>
            <div className="flex flex-col items-center justify-center  border-r-[1px] border-solid border-second pr-10">
              <h5 className="text-[18px] font-semibold text-third">
                Doanh thu chưa phân phối
              </h5>
              <h5 className="text-[24px] font-semibold text-second">
                164.745.000đ
              </h5>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h5 className="text-[18px] font-semibold text-third">
                Hành chính phí
              </h5>
              <h5 className="text-[24px] font-semibold text-second">
                3.253.000đ
              </h5>
            </div>
          </div>
          <h5 className="mb-4 text-[18px] font-semibold">
            Biểu đồ theo dõi lượt phát - 29/06/2021
          </h5>
          <LineChart />
        </div>

        <div className="w-fit">
          <FloatingActionButton floatingActionButtonConfig={floatingAction} />
        </div>
      </div>
    </div>
  );
}

export default ReportRevenue;
