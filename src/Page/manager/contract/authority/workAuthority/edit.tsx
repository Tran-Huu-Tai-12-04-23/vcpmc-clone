import { Button, Input, Paging, TextHeader } from "../../../../../Component";
import FloatingActionButton from "../../../../../Component/UI/FloatingActionButton";
import TableCustom from "../../../../../Component/UI/Table";
import CancelIcon from "../../../../../assets/icon/cancel";
import {
  dataExampleListSong,
  ConfigColTaleListSongInContractAuthority,
} from "../_config";

const pagingItems = [
  {
    name: "Quan ly",
  },
  {
    name: "Quan ly hop dong",
  },
  {
    name: "Chinh sua danh sach tac pham uy quyen",
  },
];

function EditWorkAuthority() {
  const floatingAction = [
    {
      name: "Tu choi bản ghi",
      icon: <CancelIcon className="text-error" />,
      action: () => {},
    },
  ];
  return (
    <div className="flex w-full items-start justify-between gap-10">
      <div className="flex w-full flex-col items-start justify-between gap-6 ">
        <Paging items={pagingItems} />
        <TextHeader>Chỉ tiết hợp đồng ủy quyền bài hát - </TextHeader>

        <Input
          search
          width={600}
          placeholder="Tên bản ghi, tên ca sĩ, tác giả,..."
        />
        <TableCustom
          checked
          data={dataExampleListSong}
          col={ConfigColTaleListSongInContractAuthority}
        />

        <div className="center-item w-full gap-10">
          <Button typebtn="outline" sizetype="hug">
            Huy
          </Button>
          <Button typebtn="primary" sizetype="hug">
            Luu
          </Button>
        </div>
      </div>

      <div className="flex-shrink-0 translate-y-20 ">
        <FloatingActionButton floatingActionButtonConfig={floatingAction} />
      </div>
    </div>
  );
}

export default EditWorkAuthority;
