import { useParams } from "react-router-dom";
import { Paging, TextHeader } from "../../../../Component";
import FloatingActionButton from "../../../../Component/UI/FloatingActionButton";
import TableCustom from "../../../../Component/UI/Table";
import { useRouter } from "../../../../Routes/hooks";
import PathUrl from "../../../../Routes/path-url";
import { EditIcon } from "../../../../assets/icon";
import {
  ConfigDetailScheduleColTale,
  dataExampleDetailSchedule,
} from "./_configTable";

const pagingItems = [
  {
    name: "Lập lịch phát",
  },
  {
    name: "Chi tiết",
  },
];
function DetailSchedule() {
  const router = useRouter();
  const { id } = useParams();
  const floatingAction = [
    {
      name: "Chỉnh sửa lịch phát",
      icon: <EditIcon />,
      action: () => {
        router.push(PathUrl.URL_SCHEDULE + "/" + PathUrl.EDIT + "/" + id);
      },
    },
  ];

  const ConfigCol = ConfigDetailScheduleColTale({});
  return (
    <div className="w-full">
      <Paging items={pagingItems} />
      <TextHeader>Lịch phát số 1</TextHeader>
      <div className="mt-4 flex  items-start justify-between gap-10">
        <div className="w-full">
          <h5 className="mb-4 text-[16px] font-semibold">Danh sách Playlist</h5>
          <TableCustom data={dataExampleDetailSchedule} col={ConfigCol} />
        </div>
        <div className=" w-fit">
          <FloatingActionButton floatingActionButtonConfig={floatingAction} />
        </div>
      </div>
    </div>
  );
}

export default DetailSchedule;
