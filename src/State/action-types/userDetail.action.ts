import { IUserDetail } from "../../Model/user.model";

export enum UserDetailAction {
  LOAD_DATA = "USER_DETAIL/LOAD_DATA",
  UPDATE_USER_DETAIL = "USER_DETAIL/UPDATE_USER_DETAIL",
  LOADING = "USER_DETAIL/LOADING",
  LOG_ERROR = "USER_DETAIL/LOG_ERROR",
}

interface LoadDataAction {
  type: UserDetailAction.LOAD_DATA;
  payload: IUserDetail;
}

interface UpdateUserDetailAction {
  type: UserDetailAction.UPDATE_USER_DETAIL;
  payload: IUserDetail;
}

interface LoadingAction {
  type: UserDetailAction.LOADING;
}

interface LogErrorAction {
  type: UserDetailAction.LOG_ERROR;
  payload: string;
}

export type UserDetailActionType =
  | LoadDataAction
  | UpdateUserDetailAction
  | LoadingAction
  | LogErrorAction;
