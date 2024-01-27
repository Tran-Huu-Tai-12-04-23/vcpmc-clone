import { useState } from "react";
import { TextHeader } from "../../Component";
import FloatingActionButton from "../../Component/UI/FloatingActionButton";
import TableCustom from "../../Component/UI/Table";
import { PlaylistIcon } from "../../assets/icon";
import ModalRemoveSchedule from "./edit/ModalRemoveSchedule";
import { ConfigScheduleColTale, dataExampleSchedule } from "./_configTable";
import { useRouter } from "../../Routes/hooks";
import PathUrl from "../../Routes/path-url";

function Schedule() {
  const router = useRouter();
  const [isModalRemoveSchedule, setISModalRemoveSchedule] =
    useState<boolean>(false);

  const floatingAction = [
    {
      name: "Thêm lịch phát",
      icon: <PlaylistIcon />,
      action: () => {
        router.push(PathUrl.URL_SCHEDULE + "/" + PathUrl.ADD);
      },
    },
  ];

  const ConfigCol = ConfigScheduleColTale({
    onRemove: (id) => {
      setISModalRemoveSchedule(true);
      console.log(id);
    },
  });
  return (
    <div className="">
      <ModalRemoveSchedule
        isOpen={isModalRemoveSchedule}
        onOk={function (): void {
          throw new Error("Function not implemented.");
        }}
        scheduleId={""}
        onCancel={() => setISModalRemoveSchedule(false)}
      />
      <TextHeader>Danh sách lịch phát</TextHeader>
      <div className="mt-4 flex items-start justify-between gap-10">
        <div className="w-full">
          <TableCustom data={dataExampleSchedule} col={ConfigCol} />
        </div>
        <div className="mt-16 w-fit">
          <FloatingActionButton floatingActionButtonConfig={floatingAction} />
        </div>
      </div>
    </div>
  );
}

export default Schedule;
