// File: authenticate.action.ts
import { IPlaylist } from "../../Model/playlist.model";

export enum PlaylistActionType {
  LOAD_PLAYLISTS = "PLAYLIST/LOAD_PLAYLISTS",
  GET_PLAYLIST = "PLAYLIST/GET_PLAYLIST",
  ADD_PLAYLIST = "PLAYLIST/ADD_PLAYLIST",
  REMOVE_PLAYLIST = "PLAYLIST/REMOVE_PLAYLIST",
  CHANGE_CURRENT_PLAYLIST = "PLAYLIST/CHANGE_CURRENT_PLAYLIST",
  LOG_ERROR = "PLAYLIST/LOG_ERROR",
  LOADING = "PLAYLIST/LOADING",
}

interface LoadPlaylists {
  type: PlaylistActionType.LOAD_PLAYLISTS;
  payload: IPlaylist[];
}
interface ChangeCurrentPlaylist {
  type: PlaylistActionType.CHANGE_CURRENT_PLAYLIST;
  payload: IPlaylist;
}
interface AddPlaylist {
  type: PlaylistActionType.ADD_PLAYLIST;
  payload: IPlaylist;
}

interface Loading {
  type: PlaylistActionType.LOADING;
}
interface LogError {
  type: PlaylistActionType.LOG_ERROR;
  payload: string;
}

export type PlaylistAction =
  | LoadPlaylists
  | LogError
  | Loading
  | ChangeCurrentPlaylist
  | AddPlaylist;
