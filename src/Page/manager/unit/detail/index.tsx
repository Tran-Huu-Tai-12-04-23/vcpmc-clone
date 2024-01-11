import { Input, Paging, TextHeader } from "../../../../Component";
import FloatingActionButton from "../../../../Component/UI/FloatingActionButton";
import TableCustom from "../../../../Component/UI/Table";
import { useRouter } from "../../../../Routes/hooks";
import PathUrl from "../../../../Routes/path-url";
import { AddIcon, GroupPersonIcon, TrashIcon } from "../../../../assets/icon";
import { ConfigDetailUnitColTale, dataExampleDetailUnit } from "./_configTable";

const PagingItems = [
  {
    name: "Quản lý",
  },
  {
    name: "Đơn vị sử dụng",
  },
  {
    name: "Chi tiết",
  },
];
function DetailUnitUsed() {
  const router = useRouter();
  const floatingAction = [
    {
      name: "Thêm người dùng",
      icon: <AddIcon />,
      action: () => {
        router.push(
          PathUrl.URL_MANAGER +
            "/" +
            PathUrl.MANAGER_UNIT_USED +
            "/" +
            PathUrl.ADD_USER,
        );
      },
    },
    {
      name: "Xóa",
      icon: <TrashIcon />,
      action: () => {},
    },
    {
      name: "Vai trò",
      icon: <GroupPersonIcon />,
      action: () => {},
    },
  ];
  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Đơn vị sử dụng - ABCD</TextHeader>
      <div className="flex w-full items-start justify-between gap-10">
        <div className="w-full">
          <Input
            className="mb-5 mt-5"
            placeholder="Tên khoản giá trị, số hợp đồng,..."
            height={40}
            width={500}
            search
          />
          <TableCustom
            checked
            data={dataExampleDetailUnit}
            col={ConfigDetailUnitColTale}
          />
        </div>
        <div className="w-fit">
          <FloatingActionButton floatingActionButtonConfig={floatingAction} />
        </div>
      </div>
    </div>
  );
}

export default DetailUnitUsed;
