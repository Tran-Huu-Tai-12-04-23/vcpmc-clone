import { Dispatch } from "redux";
import {
  getUserDetailByID,
  updateUserDetailById,
} from "../../Service/userdetail.service";
import {
  UserDetailAction,
  UserDetailActionType,
} from "../action-types/userDetail.action";
import { IUserDetail } from "../../Model/userDetail.model";

export const loadUserDetail = (userId: string) => {
  return async (dispatch: Dispatch<UserDetailActionType>) => {
    dispatch({
      type: UserDetailAction.LOADING,
    });

    const data = await getUserDetailByID(userId);

    if (data) {
      dispatch({
        type: UserDetailAction.LOAD_DATA,
        payload: data,
      });
    }
  };
};

export const updateUserDetail = (userDetailId: string, data: IUserDetail) => {
  return async (dispatch: Dispatch<UserDetailActionType>) => {
    dispatch({
      type: UserDetailAction.LOADING,
    });

    const result = await updateUserDetailById(userDetailId, data);

    if (result) {
      dispatch({
        type: UserDetailAction.LOAD_DATA,
        payload: {
          ...data,
          id: userDetailId,
        },
      });
    } else {
      dispatch({
        type: UserDetailAction.LOG_ERROR,
        payload: "Cập nhật thông tin tài khoản không thành công!",
      });
    }
  };
};
