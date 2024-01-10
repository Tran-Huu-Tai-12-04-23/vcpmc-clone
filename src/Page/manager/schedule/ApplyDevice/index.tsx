import { Paging, TextHeader } from "../../../../Component";
import FloatingActionButton from "../../../../Component/UI/FloatingActionButton";
import TableCustom from "../../../../Component/UI/Table";
import { TickIcon } from "../../../../assets/icon";
import CancelIcon from "../../../../assets/icon/cancel";
import { ColConfigDevice, dataExampleDevice } from "./_configTabel";
const PagingItems = [
  {
    name: "Lập lịch phát",
  },
  {
    name: "Thêm lịch phát mới",
  },
  {
    name: "Áp lịch cho thiết bị",
  },
];
function ApplyDevice() {
  const floatingAction = [
    {
      name: "Lưu",
      icon: <TickIcon />,
      action: () => {},
    },
    {
      name: "Hủy",
      icon: <CancelIcon className="text-primary" />,
      action: () => {},
    },
  ];
  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Danh sách thiết bị</TextHeader>

      <div className="mt-5 flex items-start justify-between gap-10">
        <div className="w-full">
          <TableCustom checked data={dataExampleDevice} col={ColConfigDevice} />
        </div>
        <div className="w-fit">
          <FloatingActionButton floatingActionButtonConfig={floatingAction} />
        </div>
      </div>
    </div>
  );
}

export default ApplyDevice;
