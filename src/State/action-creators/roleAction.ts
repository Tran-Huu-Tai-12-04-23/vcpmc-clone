import { Dispatch } from "redux";

import { RoleAction, RoleActionType } from "../action-types/role.action";
import {
  createRole,
  deleteRoleById,
  getAllRole,
  getRoleById,
  updateRoleById,
} from "../../Service/role.service";
import { IRole } from "../../Model/role.model";

export const loadRoles = () => {
  return async (dispatch: Dispatch<RoleAction>) => {
    dispatch({
      type: RoleActionType.LOADING,
    });

    const res = await getAllRole();

    if (res === null) return;
    dispatch({
      type: RoleActionType.LOAD_DATA,
      payload: res,
    });
  };
};

export const changeCurrentRole = (id: string) => {
  return async (dispatch: Dispatch<RoleAction>) => {
    dispatch({
      type: RoleActionType.LOADING,
    });

    const res = await getRoleById(id);

    if (!res) {
      dispatch({
        type: RoleActionType.LOG_ERROR,
        payload: " Không tìm thấy đối tác ủy quyền!",
      });
      return;
    }
    dispatch({
      type: RoleActionType.CHANGE_CURRENT_ROLE,
      payload: res,
    });
  };
};

export const updateRole = (
  id: string,
  newRole: IRole,
  onFinish: () => void,
) => {
  return async (dispatch: Dispatch<RoleAction>) => {
    dispatch({
      type: RoleActionType.LOADING,
    });

    const res = await updateRoleById(id, newRole);
    if (!res) {
      dispatch({
        type: RoleActionType.LOG_ERROR,
        payload: "Không thể cập nhật vai trò!",
      });
      return;
    }

    dispatch({
      type: RoleActionType.CHANGE_CURRENT_ROLE,
      payload: res,
    });
    onFinish();
  };
};

export const addRole = (newRole: IRole, onFinish: () => void) => {
  return async (dispatch: Dispatch<RoleAction>) => {
    dispatch({
      type: RoleActionType.LOADING,
    });
    const res = await createRole(newRole);
    if (!res) {
      dispatch({
        type: RoleActionType.LOG_ERROR,
        payload: "Không thể thêm vai trò ủy quyền!",
      });
      return;
    }

    dispatch({
      type: RoleActionType.ADD_ROLE,
      payload: res,
    });
    onFinish();
  };
};

export const removeRole = (id: string, onFinish: () => void) => {
  return async (dispatch: Dispatch<RoleAction>) => {
    dispatch({
      type: RoleActionType.LOADING,
    });

    const res = await deleteRoleById(id);
    if (res === null) {
      dispatch({
        type: RoleActionType.LOG_ERROR,
        payload: "Không thể xóa vai trò!",
      });
      return;
    }

    dispatch({
      type: RoleActionType.REMOVE_ROLE,
      payload: {
        id: id,
      },
    });

    onFinish();
  };
};
