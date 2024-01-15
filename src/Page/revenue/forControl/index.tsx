import {
  DatePicker,
  Input,
  Paging,
  TextHeader,
  TextLabel,
} from "../../../Component";
import FloatingActionButton from "../../../Component/UI/FloatingActionButton";
import TableCustom from "../../../Component/UI/Table";
import { ExportIcon } from "../../../assets/icon";
import {
  ConfigHistoryForControl,
  dataExampleHistoryForControl,
} from "./_configTable";

const PagingItems = [
  {
    name: "Doanh thu",
  },
  {
    name: "Lịch sử đối soát",
  },
];
function HistoryForControl() {
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
      <TextHeader>Lịch sử đối soát doanh thu</TextHeader>

      <div className="mt-4 flex w-full items-start justify-between gap-10">
        <div className="w-full">
          <div className="flex w-full items-center justify-between">
            <div className="box-start gap-4">
              <TextLabel>Thời gian thực hiện:</TextLabel>
              <DatePicker width={200} typePicker="month" />
            </div>
            <Input
              className="mb-5 mt-5"
              placeholder="Nhập tên tài khoản quản trị"
              height={48}
              width={500}
              search
            />
          </div>
          <h5 className="mb-4 text-[24px] font-bold">
            Danh sách hợp đồng khai thác đã đối soát
          </h5>

          <TableCustom
            data={dataExampleHistoryForControl}
            col={ConfigHistoryForControl}
          />
        </div>
        <div className="mt-4 w-fit">
          <FloatingActionButton floatingActionButtonConfig={floatingAction} />
        </div>
      </div>
    </div>
  );
}

export default HistoryForControl;
