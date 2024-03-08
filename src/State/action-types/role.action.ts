import { IRole } from "../../Model/role.model";

export enum RoleActionType {
  LOAD_DATA = "ROLE/LOAD_DATA",
  UPDATE_ROLE = "ROLE/UPDATE_ROLE",
  ADD_ROLE = "ROLE/ADD_ROLE",
  LOADING = "ROLE/LOADING",
  LOG_ERROR = "ROLE/LOG_ERROR",
  REMOVE_ROLE = "ROLE/REMOVE_ROLE",
  CHANGE_CURRENT_ROLE = "ROLE/CHANGE_CURRENT_ROLE",
}

interface LoadDataAction {
  type: RoleActionType.LOAD_DATA;
  payload: IRole[];
}
interface RemoveRoleAction {
  type: RoleActionType.REMOVE_ROLE;
  payload: {
    id: string;
  };
}
interface ChangeCurrentRoleAction {
  type: RoleActionType.CHANGE_CURRENT_ROLE;
  payload: IRole | null;
}

interface UpdateRoleAction {
  type: RoleActionType.UPDATE_ROLE;
  payload: IRole;
}
interface AddRoleAction {
  type: RoleActionType.ADD_ROLE;
  payload: IRole;
}

interface LoadingAction {
  type: RoleActionType.LOADING;
}

interface LogErrorAction {
  type: RoleActionType.LOG_ERROR;
  payload: string;
}

export type RoleAction =
  | LoadDataAction
  | UpdateRoleAction
  | LoadingAction
  | LogErrorAction
  | AddRoleAction
  | RemoveRoleAction
  | ChangeCurrentRoleAction;
