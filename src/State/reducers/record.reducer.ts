import {
  RecordAction,
  RecordActionType,
} from "./../action-types/record.action";
import { IRecordState } from "../../Model/record.model";

const initialState: IRecordState = {
  data: null,
  loading: false,
  error: undefined,
  currentRecord: null,
};

export const recordReducer = (state = initialState, action: RecordAction) => {
  switch (action.type) {
    case RecordActionType.LOAD_RECORDS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: undefined,
      };
    }
    case RecordActionType.CHANGE_CURRENT_RECORD: {
      return {
        ...state,
        loading: false,
        error: undefined,
        currentRecord: action.payload,
      };
    }
    case RecordActionType.LOADING: {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }
    case RecordActionType.LOG_ERROR: {
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
