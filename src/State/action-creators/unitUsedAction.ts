import { Dispatch } from "redux";

import {
  UnitUsedAction,
  UnitUsedActionType,
} from "../action-types/unitUsed.action";
import {
  createUnitUsed,
  deleteUnitUsedById,
  getAllUnitUsed,
  getUnitUsedById,
  updateUnitUsedById,
} from "../../Service/unitUsed.service";
import { IUnitUsed } from "../../Model/unitUsed.model";

export const loadUnitUsed = () => {
  return async (dispatch: Dispatch<UnitUsedAction>) => {
    dispatch({
      type: UnitUsedActionType.LOADING,
    });

    const res = await getAllUnitUsed();

    if (res === null) return;
    dispatch({
      type: UnitUsedActionType.LOAD_DATA,
      payload: res,
    });
  };
};

export const changeCurrentUnitUsed = (id: string) => {
  return async (dispatch: Dispatch<UnitUsedAction>) => {
    dispatch({
      type: UnitUsedActionType.LOADING,
    });

    const res = await getUnitUsedById(id);

    if (!res) {
      dispatch({
        type: UnitUsedActionType.LOG_ERROR,
        payload: " Không tìm thấy đơn vị sử dụng!",
      });
      return;
    }
    dispatch({
      type: UnitUsedActionType.CHANGE_CURRENT_UNIT_USED,
      payload: res,
    });
  };
};

export const updateUnitUsed = (
  id: string,
  newUnitUsed: any,
  onFinish: () => void,
) => {
  return async (dispatch: Dispatch<UnitUsedAction>) => {
    dispatch({
      type: UnitUsedActionType.LOADING,
    });

    const res = await updateUnitUsedById(id, newUnitUsed);
    if (!res) {
      dispatch({
        type: UnitUsedActionType.LOG_ERROR,
        payload: "Không thể cập nhật đơn vị sử dụng!",
      });
      return;
    }

    dispatch({
      type: UnitUsedActionType.CHANGE_CURRENT_UNIT_USED,
      payload: res,
    });
    onFinish();
  };
};

export const addUnitUsed = (newUnitUsed: IUnitUsed, onFinish: () => void) => {
  return async (dispatch: Dispatch<UnitUsedAction>) => {
    console.log(newUnitUsed);
    dispatch({
      type: UnitUsedActionType.LOADING,
    });
    const res = await createUnitUsed(newUnitUsed);
    if (!res) {
      dispatch({
        type: UnitUsedActionType.LOG_ERROR,
        payload: "Không thể thêm đơn vị sử dụng!",
      });
      return;
    }

    dispatch({
      type: UnitUsedActionType.ADD_UNIT_USED,
      payload: res,
    });
    onFinish();
  };
};

export const removeUnitUsed = (id: string, onFinish: () => void) => {
  return async (dispatch: Dispatch<UnitUsedAction>) => {
    dispatch({
      type: UnitUsedActionType.LOADING,
    });

    const res = await deleteUnitUsedById(id);
    if (res === null) {
      dispatch({
        type: UnitUsedActionType.LOG_ERROR,
        payload: "Không thể xóa đơn vị sử dụng!",
      });
      return;
    }

    dispatch({
      type: UnitUsedActionType.REMOVE_UNIT_USED,
      payload: {
        id: id,
      },
    });

    onFinish();
  };
};
