import { useState } from "react";
import { Input, TextHeader } from "../../../Component";
import FloatingActionButton from "../../../Component/UI/FloatingActionButton";
import { ListIcon, ApplicationIcon, PlaylistIcon } from "../../../assets/icon";
import TableCustom from "../../../Component/UI/Table";
import { ConfigPlaylistColTale, dataExamplePlaylist } from "./_configTable";
import ListCardPlaylist from "./ListCardPlaylist";

function Playlist() {
  const [modeView, setModeView] = useState<"list" | "card">("list");

  const floatingAction = [
    {
      name: "Quản lý phê duyệt",
      icon: <PlaylistIcon />,
      action: () => {},
    },
  ];

  return (
    <div className="w-full">
      <TextHeader>Playlist</TextHeader>

      <div className="flex items-start justify-between gap-10">
        <div className="flex w-full flex-col">
          <div className="flex  w-full items-center justify-between">
            <Input
              className="mb-5 mt-5"
              placeholder="Tên chủ đề, người tạo,..."
              height={40}
              width={500}
              search
            />
            <div className="box-end gap-5">
              <ListIcon
                onClick={() => setModeView("list")}
                className={`cursor-pointer ${
                  modeView === "list" && "text-primary"
                }`}
              />
              <ApplicationIcon
                onClick={() => setModeView("card")}
                className={`cursor-pointer ${
                  modeView === "card" && "text-primary"
                }`}
              />
            </div>
          </div>
          <div className="">
            {modeView === "list" ? (
              <TableCustom
                data={dataExamplePlaylist}
                col={ConfigPlaylistColTale}
              />
            ) : (
              <ListCardPlaylist />
            )}
          </div>
        </div>
        <div className="w-fit">
          <FloatingActionButton floatingActionButtonConfig={floatingAction} />
        </div>
      </div>
    </div>
  );
}

export default Playlist;
