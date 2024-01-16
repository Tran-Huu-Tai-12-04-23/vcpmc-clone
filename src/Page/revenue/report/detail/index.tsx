import { useState } from "react";
import {
  DropDown,
  Input,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../../Component";
import FloatingActionButton from "../../../../Component/UI/FloatingActionButton";
import { CommitRevenueIcon, ExportIcon } from "../../../../assets/icon";
import TableCustom from "../../../../Component/UI/Table";
import {
  ConfigRevenueContractCol,
  dataExampleRevenueForContract,
} from "./_configTable";
import ModalCommitRevenue from "./ModalCommitRevenue";

const PagingItems = [
  {
    name: "Doanh thu",
  },
  {
    name: "Lịch sử đối soát",
  },
  {
    name: "Báo cáo chi tiết",
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
function ReportRevenueDetail() {
  const [typeReport, setTypeReport] = useState<{ name: string; key: number }>(
    TypeReportList[0],
  );
  const [active, setActive] = useState<{ name: string; key: number }>({
    ...monthList[0],
    name: monthList[0].name + " / " + new Date().getFullYear(),
  });

  const [isCommitRevenue, setIsCommitRevenue] = useState<boolean>(false);

  const floatingAction = [
    {
      name: "Chốt doanh thu",
      icon: <CommitRevenueIcon />,
      action: () => {
        setIsCommitRevenue(true);
      },
    },
    {
      name: "Xuất dữ liệu",
      icon: <ExportIcon />,
      action: () => {},
    },
  ];
  return (
    <div className="w-full">
      <ModalCommitRevenue
        onCancel={() => setIsCommitRevenue(false)}
        onOk={() => setIsCommitRevenue(false)}
        isOpen={isCommitRevenue}
        width={550}
      />
      <Paging items={PagingItems} />
      <TextHeader>Doanh thu theo hợp đồng khai thác</TextHeader>

      <div className="mt-4 flex w-full items-start justify-between gap-10">
        <div className="w-full">
          <div className="mb-4 flex w-full items-center justify-between">
            <div className="box-start gap-6">
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
            <Input
              placeholder="Nhập tên người dùng"
              height={48}
              width={500}
              search
            />
          </div>
          <TableCustom
            data={dataExampleRevenueForContract}
            col={ConfigRevenueContractCol}
          />
        </div>

        <div className="w-fit">
          <FloatingActionButton floatingActionButtonConfig={floatingAction} />
        </div>
      </div>
    </div>
  );
}

export default ReportRevenueDetail;
