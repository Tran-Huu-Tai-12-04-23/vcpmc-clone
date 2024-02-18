import { IUserState } from "../../Model/user.model";
import { UserAction, UserActionType } from "../action-types/user.action";

const initialState: IUserState = {
  loading: false,
  users: [],
  currentUser: null,
  error: undefined,
};

export const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case UserActionType.LOAD_USERS: {
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: undefined,
      };
    }
    case UserActionType.ADD_USER: {
      return {
        ...state,
        loading: false,
        users: [...(state.users ?? []), action.payload],
        error: undefined,
      };
    }
    case UserActionType.CHANGE_CURRENT_USER: {
      return {
        ...state,
        loading: false,
        error: undefined,
        currentUser: action.payload,
      };
    }
    case UserActionType.REMOVE_USER: {
      return {
        ...state,
        loading: false,
        error: undefined,
        users: state.users.filter((ct) => ct.id !== action.payload.id),
      };
    }

    case UserActionType.LOADING: {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }
    case UserActionType.LOG_ERROR: {
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
