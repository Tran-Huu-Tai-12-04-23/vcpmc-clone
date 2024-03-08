import { IRole } from "../../Model/role.model";

import { RoleAction, RoleActionType } from "../action-types/role.action";

export type IRolState = {
  roles: IRole[];
  currentRole: IRole | null;
  loading: boolean;
  error: string | undefined;
};
const initialState: IRolState = {
  roles: [],
  currentRole: null,
  loading: false,
  error: undefined,
};

export const roleReducer = (state = initialState, action: RoleAction) => {
  switch (action.type) {
    case RoleActionType.LOAD_DATA: {
      return {
        ...state,
        loading: false,
        error: undefined,
        roles: action.payload,
      };
    }
    case RoleActionType.UPDATE_ROLE: {
      return {
        ...state,
        loading: false,
        error: undefined,
        roles: state.roles.map((role) =>
          role.id === action.payload.id ? action.payload : role,
        ),
      };
    }
    case RoleActionType.ADD_ROLE: {
      return {
        ...state,
        loading: false,
        error: undefined,
        currentRole: action.payload,
        roles: [...state.roles, action.payload],
      };
    }
    case RoleActionType.REMOVE_ROLE: {
      return {
        ...state,
        loading: false,
        error: undefined,
        roles: state.roles.filter((role) => role.id !== action.payload.id),
      };
    }
    case RoleActionType.CHANGE_CURRENT_ROLE: {
      return {
        ...state,
        loading: false,
        error: undefined,
        currentRole: action.payload,
      };
    }
    case RoleActionType.LOADING: {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }
    case RoleActionType.LOG_ERROR: {
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
