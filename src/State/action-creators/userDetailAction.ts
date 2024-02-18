import { Dispatch } from "redux";

import {
  UserDetailAction,
  UserDetailActionType,
} from "../action-types/userDetail.action";
import { IUser, IUserDetail } from "../../Model/user.model";
import { getUserById, updateUserById } from "../../Service/user.service";

export const loadUserDetail = (userId: string) => {
  return async (dispatch: Dispatch<UserDetailActionType>) => {
    dispatch({
      type: UserDetailAction.LOADING,
    });

    const data = await getUserById(userId);

    console.log(data);

    if (data && data.userDetail) {
      dispatch({
        type: UserDetailAction.LOAD_DATA,
        payload: data.userDetail,
      });
    } else {
      dispatch({
        type: UserDetailAction.LOG_ERROR,
        payload: "Không tìm thấy tài khoản!",
      });
    }
  };
};

export const updateUserDetail = (
  userId: string,
  data: IUserDetail,
  onFinish: () => void,
) => {
  return async (dispatch: Dispatch<UserDetailActionType>) => {
    dispatch({
      type: UserDetailAction.LOADING,
    });

    const result = await updateUserById(userId, {
      userDetail: { ...data },
    });
    if (result) {
      dispatch({
        type: UserDetailAction.LOAD_DATA,
        payload: {
          ...data,
        },
      });

      onFinish();
    } else {
      dispatch({
        type: UserDetailAction.LOG_ERROR,
        payload: "Cập nhật thông tin tài khoản không thành công!",
      });
    }
  };
};
