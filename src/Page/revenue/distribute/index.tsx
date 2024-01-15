import dayjs from "dayjs";
import {
  DatePicker,
  Input,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../Component";
import FloatingActionButton from "../../../Component/UI/FloatingActionButton";
import { ExportIcon } from "../../../assets/icon";
import TableCustom from "../../../Component/UI/Table";
import {
  ConfigRevenueColTale,
  dataExampleRevenue,
} from "../distribute/_configTable";

const PagingItems = [
  {
    name: "Doanh thu",
  },
  {
    name: "Phân phối doanh thu",
  },
];
function DistributeRevenue() {
  const floatingAction = [
    {
      name: "Xuất dữ liệu",
      icon: <ExportIcon />,
      action: () => {},
    },
  ];
  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Quản lý phân phối doanh thu</TextHeader>

      <div className="flex  items-start justify-between gap-10">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="box-start gap-4">
              <TextLabel>Theo tháng : </TextLabel>
              <DatePicker width={200} value={dayjs()} typePicker="month" />
            </div>
            <Input
              className="mb-5 mt-5"
              placeholder="Nhập tên bài hát"
              height={48}
              width={500}
              search
            />
          </div>
          <h5 className="mb-4 text-[24px] font-semibold">
            Danh sách hợp đồng ủy quyền
          </h5>

          <TableCustom data={dataExampleRevenue} col={ConfigRevenueColTale} />
        </div>
        <div className="mt-4 w-fit">
          <FloatingActionButton floatingActionButtonConfig={floatingAction} />
        </div>
      </div>
    </div>
  );
}

export default DistributeRevenue;
