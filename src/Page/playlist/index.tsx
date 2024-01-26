import { useEffect, useState } from "react";
import { Input, TextHeader } from "../../Component";
import FloatingActionButton from "../../Component/UI/FloatingActionButton";
import { ListIcon, ApplicationIcon, PlaylistIcon } from "../../assets/icon";
import TableCustom from "../../Component/UI/Table";
import { ConfigPlaylistColTale } from "./_configTable";
import ListCardPlaylist from "./ListCardPlaylist";
import { useRouter } from "../../Routes/hooks";
import PathUrl from "../../Routes/path-url";
import { useDispatch, useSelector } from "react-redux";
import { RootState, actionPlaylist } from "../../State";
import { bindActionCreators } from "@reduxjs/toolkit";
import { IPlaylist } from "../../Model/playlist.model";

function Playlist() {
  const dispatch = useDispatch();
  const { loadPlaylists } = bindActionCreators(actionPlaylist, dispatch);
  const playlistState = useSelector((state: RootState) => state.playlists);
  const [dataSource, setDataSource] = useState<IPlaylist[]>([]);
  const [searchKey, setSearchKey] = useState<string>("");
  const router = useRouter();
  const [modeView, setModeView] = useState<"list" | "card">("list");
  const [loading, setLoading] = useState<boolean>(false);

  const floatingAction = [
    {
      name: "Thêm Playlist",
      icon: <PlaylistIcon />,
      action: () => {
        router.push(PathUrl.URL_PLAYLIST + "/" + PathUrl.ADD);
      },
    },
  ];

  //init playlist state
  useEffect(() => {
    loadPlaylists();
  }, []);

  // init data
  useEffect(() => {
    setDataSource(playlistState.playlists || []);
  }, [playlistState]);

  // handle search
  useEffect(() => {
    if (searchKey) {
      setLoading(true);
      const handleSearchTimeOut = setTimeout(() => {
        if (playlistState.playlists) {
          const searchData = playlistState.playlists.filter((pl) =>
            pl.title.toString().includes(searchKey),
          );
          setDataSource(searchData);
          setLoading(false);
        }
      }, 1000);

      return () => {
        clearTimeout(handleSearchTimeOut);
      };
    } else {
      setDataSource(playlistState.playlists || []);
    }
  }, [searchKey, playlistState.playlists]);

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
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
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
                data={dataSource}
                col={ConfigPlaylistColTale}
                loading={!loading ? playlistState.loading : loading}
              />
            ) : (
              <ListCardPlaylist dataSource={dataSource} />
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
