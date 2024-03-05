import {
  DeviceActionType,
  DeviceAction,
} from "./../action-types/device.action";
import { Dispatch } from "redux";
import {
  createDevice,
  deleteDeviceById,
  getAllDevices,
  getDeviceById,
  updateDeviceById,
} from "../../Service/device.service";
import { IDevice } from "../../Model/device.model";

export const loadDevices = () => {
  return async (dispatch: Dispatch<DeviceAction>) => {
    dispatch({
      type: DeviceActionType.LOADING,
    });

    const res = await getAllDevices();

    if (res === null) return;
    dispatch({
      type: DeviceActionType.LOAD_DATA,
      payload: res,
    });
  };
};

export const changeCurrentRecord = (id: string) => {
  return async (dispatch: Dispatch<DeviceAction>) => {
    dispatch({
      type: DeviceActionType.LOADING,
    });

    const res = await getDeviceById(id);

    if (!res) {
      dispatch({
        type: DeviceActionType.LOG_ERROR,
        payload: " Không tìm thấy thiết bị!",
      });
      return;
    }
    dispatch({
      type: DeviceActionType.CHANGE_CURRENT_DEVICE,
      payload: res,
    });
  };
};

export const updateDevice = (
  id: string,
  newDevice: IDevice,
  onFinish: () => void,
) => {
  return async (dispatch: Dispatch<DeviceAction>) => {
    dispatch({
      type: DeviceActionType.LOADING,
    });

    const res = await updateDeviceById(id, newDevice);
    if (!res) {
      dispatch({
        type: DeviceActionType.LOG_ERROR,
        payload: "Không thể cập nhật thiết bị!",
      });
      return;
    }

    dispatch({
      type: DeviceActionType.CHANGE_CURRENT_DEVICE,
      payload: res,
    });
    onFinish();
  };
};

export const addDevice = (newDevice: IDevice, onFinish: () => void) => {
  return async (dispatch: Dispatch<DeviceAction>) => {
    dispatch({
      type: DeviceActionType.LOADING,
    });
    const res = await createDevice(newDevice);
    if (!res) {
      dispatch({
        type: DeviceActionType.LOG_ERROR,
        payload: "Không thể thêm thiết bị!",
      });
      return;
    }

    dispatch({
      type: DeviceActionType.ADD_DEVICE,
      payload: res,
    });
    onFinish();
  };
};

export const removeRecord = (id: string, onFinish: () => void) => {
  return async (dispatch: Dispatch<DeviceAction>) => {
    dispatch({
      type: DeviceActionType.LOADING,
    });

    const res = await deleteDeviceById(id);
    if (res === null) {
      dispatch({
        type: DeviceActionType.LOG_ERROR,
        payload: "Không thể xóa thiết bị!",
      });
      return;
    }

    dispatch({
      type: DeviceActionType.CHANGE_CURRENT_DEVICE,
      payload: null,
    });

    onFinish();
  };
};
