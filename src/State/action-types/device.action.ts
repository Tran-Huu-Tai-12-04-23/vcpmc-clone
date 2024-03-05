import { IDevice } from "../../Model/device.model";

export enum DeviceActionType {
  LOAD_DATA = "DEVICE/LOAD_DATA",
  UPDATE_DEVICE = "DEVICE/UPDATE_DEVICE",
  ADD_DEVICE = "DEVICE/ADD_DEVICE",
  LOADING = "DEVICE/LOADING",
  LOG_ERROR = "DEVICE/LOG_ERROR",
  REMOVE_DEVICE = "DEVICE/REMOVE_DEVICE",
  CHANGE_CURRENT_DEVICE = "DEVICE/CHANGE_CURRENT_DEVICE",
}

interface LoadDataAction {
  type: DeviceActionType.LOAD_DATA;
  payload: IDevice[];
}
interface RemoveDeviceAction {
  type: DeviceActionType.REMOVE_DEVICE;
  payload: {
    id: string;
  };
}
interface ChangeCurrentDeviceAction {
  type: DeviceActionType.CHANGE_CURRENT_DEVICE;
  payload: IDevice | null;
}

interface UpdateDeviceAction {
  type: DeviceActionType.UPDATE_DEVICE;
  payload: IDevice;
}
interface AddDeviceAction {
  type: DeviceActionType.ADD_DEVICE;
  payload: IDevice;
}

interface LoadingAction {
  type: DeviceActionType.LOADING;
}

interface LogErrorAction {
  type: DeviceActionType.LOG_ERROR;
  payload: string;
}

export type DeviceAction =
  | LoadDataAction
  | UpdateDeviceAction
  | LoadingAction
  | LogErrorAction
  | AddDeviceAction
  | RemoveDeviceAction
  | ChangeCurrentDeviceAction;
