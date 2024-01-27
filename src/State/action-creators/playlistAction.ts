import {
  removePlaylistById as removeById,
  updatePlaylistById as updatePlaylist,
} from "./../../Service/playlist.service";
import { Dispatch } from "redux";
import {
  PlaylistAction,
  PlaylistActionType,
} from "../action-types/playlist.action";
import {
  AddPlaylistResponseType,
  PlaylistResponseType,
  addPlaylist as add,
  getPlaylistById,
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

export const changeCurrentPlaylist = (id: string) => {
  return async (dispatch: Dispatch<PlaylistAction>) => {
    dispatch({
      type: PlaylistActionType.LOADING,
    });

    const res: IPlaylist | null = await getPlaylistById(id);

    if (res === null) {
      return;
    }
    dispatch({
      type: PlaylistActionType.CHANGE_CURRENT_PLAYLIST,
      payload: res,
    });
  };
};

export const removePlaylistById = (id: string, onFinish: () => void) => {
  return async (dispatch: Dispatch<PlaylistAction>) => {
    dispatch({
      type: PlaylistActionType.LOADING,
    });

    const res: boolean = await removeById(id);

    if (res) {
      dispatch({
        type: PlaylistActionType.REMOVE_PLAYLIST_BY_ID,
        payload: id,
      });
      onFinish();
      return;
    }
  };
};
export const updatePlaylistById = (
  id: string,
  newRecord: IPlaylist,
  onFinish: () => void,
) => {
  return async (dispatch: Dispatch<PlaylistAction>) => {
    dispatch({
      type: PlaylistActionType.LOADING,
    });

    const res: IPlaylist | null = await updatePlaylist(id, newRecord);
    if (res === null) {
      return;
    }
    dispatch({
      type: PlaylistActionType.CHANGE_CURRENT_PLAYLIST,
      payload: res,
    });
    onFinish()
  };
};
