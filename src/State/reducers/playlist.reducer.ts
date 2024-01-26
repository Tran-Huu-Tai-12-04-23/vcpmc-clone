import {
  PlaylistAction,
  PlaylistActionType,
} from "../action-types/playlist.action";
import { IPlaylistState } from "./../../Model/playlist.model";

const initialState: IPlaylistState = {
  playlists: null,
  loading: false,
  error: undefined,
  currentPlaylist: null,
};

export const playlistReducer = (
  state = initialState,
  action: PlaylistAction,
) => {
  switch (action.type) {
    case PlaylistActionType.LOAD_PLAYLISTS: {
      return {
        ...state,
        loading: false,
        playlists: action.payload,
        error: undefined,
      };
    }
    case PlaylistActionType.ADD_PLAYLIST: {
      return {
        ...state,
        loading: false,
        playlists: [...(state.playlists ?? []), action.payload],
        error: undefined,
      };
    }
    case PlaylistActionType.CHANGE_CURRENT_PLAYLIST: {
      return {
        ...state,
        loading: false,
        error: undefined,
        currentPlaylist: action.payload,
      };
    }
    case PlaylistActionType.LOADING: {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }
    case PlaylistActionType.LOG_ERROR: {
      return {
        ...initialState,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
