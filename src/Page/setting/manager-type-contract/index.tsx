import { Paging, TableCustom, TextHeader } from "../../../Component";
import FloatingActionButton from "../../../Component/UI/FloatingActionButton";
import { useRouter } from "../../../Routes/hooks";
import PathUrl from "../../../Routes/path-url";
import { EditContractIcon, WarningCalenderIcon } from "../../../assets/icon";
import { ConfigTypeContractCol, dataTypeContract } from "./_configTable";

const PagingItems = [
  {
    name: "Cài đặt",
  },
  {
    name: "Quản lý loại hợp đồng",
  },
];
function ManagerTypeContract() {
  const router = useRouter();
  const FloatingButtons = [
    {
      name: "Chỉnh sửa loại hợp đồng",
      icon: <EditContractIcon />,
      action: () => {
        router.push(
          PathUrl.URL_SETTING +
            "/" +
            PathUrl.MANAGER_CONTRACT +
            "/" +
            PathUrl.EDIT_TYPE_CONTRACT,
        );
      },
    },
    {
      name: "Chỉnh sửa cảnh báo hết hạn",
      icon: <WarningCalenderIcon />,
      action: () => {
        router.push(
          PathUrl.URL_SETTING +
            "/" +
            PathUrl.MANAGER_CONTRACT +
            "/" +
            PathUrl.EDIT,
        );
      },
    },
  ];
  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Loại hợp đồng</TextHeader>

      <div className="mt-10 flex w-full items-start justify-between gap-10">
        <div className="flex min-h-[10rem] w-[90%] flex-shrink-0 items-center justify-between gap-10">
          <div className="w-1/2">
            <TableCustom
              hiddenFooter
              minHeight="10rem"
              data={dataTypeContract}
              col={ConfigTypeContractCol}
            />
          </div>
          <div className="h-full min-h-[14rem] w-1/2 rounded-xl bg-[#2a2a3b] p-10">
            <h5 className="text-[24px] font-semibold">
              Cảnh báo hết hạn khai thác tác phẩm
            </h5>

            <div className="box-start mt-[6%] gap-4">
              <h5 className="font-semibold">
                Hợp đồng được cảnh báo trước thời gian hết hạn:
              </h5>
              <h5 className="text-third">365 ngày</h5>
            </div>
          </div>
        </div>
        <div className="w-fit">
          <FloatingActionButton floatingActionButtonConfig={FloatingButtons} />
        </div>
      </div>
    </div>
  );
}

export default ManagerTypeContract;
