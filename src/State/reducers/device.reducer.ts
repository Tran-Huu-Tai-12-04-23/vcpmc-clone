import { IDevice } from "../../Model/device.model";
import { DeviceAction, DeviceActionType } from "../action-types/device.action";

export type IDeviceState = {
  devices: IDevice[];
  currentDevice: IDevice | null;
  loading: boolean;
  error: string | undefined;
};
const initialState: IDeviceState = {
  devices: [],
  currentDevice: null,
  loading: false,
  error: undefined,
};

export const deviceReducer = (state = initialState, action: DeviceAction) => {
  switch (action.type) {
    case DeviceActionType.LOAD_DATA: {
      return {
        ...state,
        loading: false,
        error: undefined,
        devices: action.payload,
      };
    }
    case DeviceActionType.UPDATE_DEVICE: {
      return {
        ...state,
        loading: false,
        error: undefined,
        devices: state.devices.map((device) =>
          device.id === action.payload.id ? action.payload : device,
        ),
      };
    }
    case DeviceActionType.ADD_DEVICE: {
      return {
        ...state,
        loading: false,
        error: undefined,
        currentDevice: action.payload,
      };
    }
    case DeviceActionType.REMOVE_DEVICE: {
      return {
        ...state,
        loading: false,
        error: undefined,
        devices: state.devices.filter(
          (device) => device.id !== action.payload.id,
        ),
      };
    }
    case DeviceActionType.CHANGE_CURRENT_DEVICE: {
      return {
        ...state,
        loading: false,
        error: undefined,
        currentDevice: action.payload,
      };
    }
    case DeviceActionType.LOADING: {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }
    case DeviceActionType.LOG_ERROR: {
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
