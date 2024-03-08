import { IUnitUsed } from "../../Model/unitUsed.model";

export enum UnitUsedActionType {
  LOAD_DATA = "UNIT_USED/LOAD_DATA",
  UPDATE_UNIT_USED = "UNIT_USED/UPDATE_UNIT_USED",
  ADD_UNIT_USED = "UNIT_USED/ADD_UNIT_USED",
  LOADING = "UNIT_USED/LOADING",
  LOG_ERROR = "UNIT_USED/LOG_ERROR",
  REMOVE_UNIT_USED = "UNIT_USED/REMOVE_UNIT_USED",
  CHANGE_CURRENT_UNIT_USED = "UNIT_USED/CHANGE_CURRENT_UNIT_USED",
}

interface LoadDataAction {
  type: UnitUsedActionType.LOAD_DATA;
  payload: IUnitUsed[];
}
interface RemoveUnitUsedAction {
  type: UnitUsedActionType.REMOVE_UNIT_USED;
  payload: {
    id: string;
  };
}
interface ChangeCurrentUnitUsedAction {
  type: UnitUsedActionType.CHANGE_CURRENT_UNIT_USED;
  payload: IUnitUsed | null;
}

interface UpdateUnitUsedAction {
  type: UnitUsedActionType.UPDATE_UNIT_USED;
  payload: IUnitUsed;
}
interface AddUnitUsedAction {
  type: UnitUsedActionType.ADD_UNIT_USED;
  payload: IUnitUsed;
}

interface LoadingAction {
  type: UnitUsedActionType.LOADING;
}

interface LogErrorAction {
  type: UnitUsedActionType.LOG_ERROR;
  payload: string;
}

export type UnitUsedAction =
  | LoadDataAction
  | UpdateUnitUsedAction
  | LoadingAction
  | LogErrorAction
  | AddUnitUsedAction
  | RemoveUnitUsedAction
  | ChangeCurrentUnitUsedAction;
