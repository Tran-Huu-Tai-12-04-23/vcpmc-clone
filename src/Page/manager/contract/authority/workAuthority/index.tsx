import { Input } from "../../../../../Component";
import { TextLabel, DropDown } from "../../../../../Component";
import FloatingActionButton from "../../../../../Component/UI/FloatingActionButton";
import TableCustom from "../../../../../Component/UI/Table";
import { useRouter } from "../../../../../Routes/hooks";
import PathUrl from "../../../../../Routes/path-url";
import { EditIcon, ContractIcon, AddIcon } from "../../../../../assets/icon";
import {
  dataExampleListSong,
  ConfigColTaleListSongInContractAuthority,
} from "../_config";

type WorkAuthorityProps = {
  id?: string;
};
function WorkAuthority(props: WorkAuthorityProps) {
  const router = useRouter();
  const floatingAction = [
    {
      name: "Chỉnh sửa tác phẩm",
      icon: <EditIcon className="text-primary" />,
      action: () => {
        router.push(
          PathUrl.URL_MANAGER +
            "/" +
            PathUrl.MANAGER_CONTRACT +
            "/" +
            PathUrl.AUTHORITY +
            "/" +
            PathUrl.WORK +
            "/" +
            props.id,
        );
      },
    },
    {
      name: "Gia hạn hợp đồng",
      icon: <ContractIcon className="text-primary" />,
      action: () => {},
    },
    {
      name: "Hủy hợp đồng",
      icon: <ContractIcon className="text-primary" />,
      action: () => {},
    },
    {
      name: "Thêm bản ghi",
      icon: <AddIcon className="text-error" />,
      action: () => {},
    },
  ];
  return (
    <div className="flex w-full items-start justify-between gap-10">
      <div className="flex w-full flex-col items-center justify-between gap-6 ">
        <div className="flex w-full items-center justify-between">
          <div className="box-start w-fit flex-shrink-0 gap-4">
            <TextLabel>Tình trạng phê duyệt</TextLabel>
            <DropDown
              className="w-fit"
              classDropItem="border-primary"
              active={{
                key: -1,
                name: "Tất cả",
              }}
              dropItems={[
                {
                  name: "Mới",
                  key: 1,
                },
                {
                  name: "Đã phê duyệt",
                  key: 2,
                },
                {
                  name: "Từ chối",
                  key: 3,
                },
              ]}
              onSelect={function (value: { name: string; key: number }): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
          <Input
            className="float-end"
            search
            width={400}
            placeholder="Tên bản ghi, tên ca sĩ, tác giả,..."
          />
        </div>
        <TableCustom
          data={dataExampleListSong}
          col={ConfigColTaleListSongInContractAuthority}
        />
      </div>

      <div className="flex-shrink-0 -translate-y-20">
        <FloatingActionButton floatingActionButtonConfig={floatingAction} />
      </div>
    </div>
  );
}

export default WorkAuthority;
