// File: authenticate.action.ts
import { IUser } from "../../Model/user.model";

export enum UserActionType {
  LOAD_USERS = "USER/LOAD_USERS",
  GET_USER = "USER/GET_USER",
  ADD_USER = "USER/ADD_USER",
  REMOVE_USER = "USER/REMOVE_USER",
  EDIT_USER = "USER/EDIT_USER",
  LOG_ERROR = "USER/LOG_ERROR",
  LOADING = "USER/LOADING",
  CHANGE_CURRENT_USER = "USER/CHANGE_CURRENT_USER",
}

interface LoadUsers {
  type: UserActionType.LOAD_USERS;
  payload: IUser[];
}

interface ChangeCurrentUser {
  type: UserActionType.CHANGE_CURRENT_USER;
  payload: IUser | null;
}

interface AddUser {
  type: UserActionType.ADD_USER;
  payload: IUser;
}
interface RemoveUser {
  type: UserActionType.REMOVE_USER;
  payload: {
    id: string;
  };
}
interface EditUser {
  type: UserActionType.EDIT_USER;
  payload: {
    id: string;
    data: IUser;
  };
}
interface Loading {
  type: UserActionType.LOADING;
}
interface LogError {
  type: UserActionType.LOG_ERROR;
  payload: string;
}
// Use 'export type' for exporting types
export type UserAction =
  | LoadUsers
  | RemoveUser
  | EditUser
  | AddUser
  | LogError
  | Loading
  | ChangeCurrentUser;
