import { Paging, TextHeader } from "../../../Component";
import FloatingActionButton from "../../../Component/UI/FloatingActionButton";
import TableCustom from "../../../Component/UI/Table";
import { EditIcon } from "../../../assets/icon";
import TableEdit from "./_configEditTable";
import { ConfigGenreSongColTable, dataGenreSong } from "./_configTable";
const PagingItems = [
  {
    name: "Trang chủ",
  },
  {
    name: "Cài đặt hệ thống",
  },
];
function InformationCreation() {
  const floatingButtons = [
    {
      name: "Chỉnh sửa",
      icon: <EditIcon />,
      action: () => {},
    },
  ];
  return (
    <div className="w-full">
      <Paging items={PagingItems} />
      <TextHeader>Thông tin tác phẩm</TextHeader>
      <h5 className="mt-6 text-[24px] font-semibold">Thể loại tác phẩm</h5>
      <div className="mt-5 flex items-start justify-between gap-10">
        <div className="w-full">
          {/* <TableCustom data={dataGenreSong} col={ConfigGenreSongColTable} /> */}
          <TableEdit />
        </div>
        <div className="w-fit">
          <FloatingActionButton floatingActionButtonConfig={floatingButtons} />
        </div>
      </div>
    </div>
  );
}

export default InformationCreation;
