import UserHelper from "../../Helper/UserHelper";
import { IAuthenticateInfoState } from "../../Model/authenticateInfo.model";
import {
  AuthenTicationActionType,
  AuthenticateAction,
} from "../action-types/authenticate.action";

const initialState: IAuthenticateInfoState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: undefined,
};

const user = UserHelper.getInformationLogin();
if (user) {
  initialState.isAuthenticated = true;
  initialState.user = user;
}

export const authenticateReducer = (
  state = initialState,
  action: AuthenticateAction,
) => {
  switch (action.type) {
    case AuthenTicationActionType.LOGIN: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
        error: undefined,
      };
    }
    case AuthenTicationActionType.LOGOUT: {
      return {
        ...initialState,
        isAuthenticated: false,
        loading: false,
      };
    }
    case AuthenTicationActionType.LOADING: {
      return {
        ...initialState,
        loading: true,
      };
    }

    case AuthenTicationActionType.LOG_ERROR: {
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
