import { Dispatch } from "redux";

import { IPlaylist } from "../../Model/playlist.model";
import { UserAction, UserActionType } from "../action-types/user.action";
import {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
} from "../../Service/user.service";
import { IUser } from "../../Model/user.model";

export const loadUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionType.LOADING,
    });

    const res: IUser[] | undefined = await getAllUsers();

    if (!res) return;
    dispatch({
      type: UserActionType.LOAD_USERS,
      payload: res ? res : [],
    });
  };
};

export const addUser = (newUser: IUser, onFinish?: () => void) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionType.LOADING,
    });

    const res: string | undefined = await createUser(newUser);

    if (!res) return;
    dispatch({
      type: UserActionType.ADD_USER,
      payload: {
        ...newUser,
        id: res,
      },
    });
    onFinish && onFinish();
  };
};

export const changeCurrentUser = (id: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionType.LOADING,
    });

    const res: IUser | undefined = await getUserById(id);

    if (!res) return;
    dispatch({
      type: UserActionType.CHANGE_CURRENT_USER,
      payload: res,
    });
  };
};

export const removeUserById = (id: string, onFinish: () => void) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionType.LOADING,
    });

    const res: boolean = await deleteUserById(id);

    if (res) {
      dispatch({
        type: UserActionType.REMOVE_USER,
        payload: {
          id,
        },
      });
      onFinish();
      return;
    }
  };
};
