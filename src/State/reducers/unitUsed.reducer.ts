import { IUnitUsedState } from "./../../Model/unitUsed.model";

import {
  UnitUsedAction,
  UnitUsedActionType,
} from "../action-types/unitUsed.action";

const initialState: IUnitUsedState = {
  currentUnitUsed: null,
  unitUsed: [],
  loading: false,
  error: undefined,
};

export const unitUsedReducer = (
  state = initialState,
  action: UnitUsedAction,
) => {
  switch (action.type) {
    case UnitUsedActionType.LOAD_DATA: {
      return {
        ...state,
        loading: false,
        error: undefined,
        unitUsed: action.payload,
      };
    }
    case UnitUsedActionType.UPDATE_UNIT_USED: {
      return {
        ...state,
        loading: false,
        error: undefined,
        unitUsed: state.unitUsed.map((un) =>
          un.id === action.payload.id ? action.payload : un,
        ),
      };
    }
    case UnitUsedActionType.ADD_UNIT_USED: {
      return {
        ...state,
        loading: false,
        error: undefined,
        unitUsedReducer: [...state.unitUsed, action.payload],
      };
    }
    case UnitUsedActionType.REMOVE_UNIT_USED: {
      return {
        ...state,
        loading: false,
        error: undefined,
        unitUsed: state.unitUsed.filter((uni) => uni.id !== action.payload.id),
      };
    }
    case UnitUsedActionType.CHANGE_CURRENT_UNIT_USED: {
      return {
        ...state,
        loading: false,
        error: undefined,
        currentUnitUsed: action.payload,
      };
    }
    case UnitUsedActionType.LOADING: {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }
    case UnitUsedActionType.LOG_ERROR: {
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
