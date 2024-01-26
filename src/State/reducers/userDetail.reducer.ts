import { IUserDetail } from "../../Model/userDetail.model";
import {
  UserDetailActionType,
  UserDetailAction,
} from "../action-types/userDetail.action";

export type IUserDetailState = {
  userDetail: IUserDetail | null;
  loading: boolean;
  error: string | undefined;
};
const initialState: IUserDetailState = {
  userDetail: null,
  loading: false,
  error: undefined,
};

export const userDetailReducer = (
  state = initialState,
  action: UserDetailActionType,
) => {
  switch (action.type) {
    case UserDetailAction.LOAD_DATA: {
      return {
        ...state,
        loading: false,
        error: undefined,
        userDetail: action.payload,
      };
    }
    case UserDetailAction.UPDATE_USER_DETAIL: {
      return {
        ...state,
        loading: false,
        error: undefined,
        userDetail: action.payload,
      };
    }
    case UserDetailAction.LOADING: {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }
    case UserDetailAction.LOG_ERROR: {
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
