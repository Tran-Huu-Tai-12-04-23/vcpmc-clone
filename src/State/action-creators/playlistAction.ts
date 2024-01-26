import { data } from "./../../Page/manager/contract/authority/_configTable";
import { Dispatch } from "redux";
import {
  PlaylistAction,
  PlaylistActionType,
} from "../action-types/playlist.action";
import {
  AddPlaylistResponseType,
  PlaylistResponseType,
  addPlaylist as add,
  getPlaylists,
} from "../../Service/playlist.service";
import { IPlaylist } from "../../Model/playlist.model";

export const loadPlaylists = () => {
  return async (dispatch: Dispatch<PlaylistAction>) => {
    dispatch({
      type: PlaylistActionType.LOADING,
    });

    const res: PlaylistResponseType | null = await getPlaylists();

    if (res === null || res.data === null) return;
    dispatch({
      type: PlaylistActionType.LOAD_PLAYLISTS,
      payload: res.data ? res.data : [],
    });
  };
};

export const addPlaylist = (newPlaylist: IPlaylist, onFinish?: () => void) => {
  return async (dispatch: Dispatch<PlaylistAction>) => {
    dispatch({
      type: PlaylistActionType.LOADING,
    });

    const res: AddPlaylistResponseType | null = await add(newPlaylist);

    if (res === null || res.data === null) return;
    dispatch({
      type: PlaylistActionType.ADD_PLAYLIST,
      payload: res.data,
    });
    onFinish && onFinish();
  };
};
