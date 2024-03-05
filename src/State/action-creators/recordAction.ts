import { Dispatch } from "redux";
import { RecordAction, RecordActionType } from "../action-types/record.action";
import {
  RecordsResponseType,
  getRecordById,
  getRecords,
  removeRecordById,
  searchRecords,
  updateRecordById,
} from "../../Service/record.service";
import { IRecord } from "../../Model/record.model";

export const loadRecords = () => {
  return async (dispatch: Dispatch<RecordAction>) => {
    dispatch({
      type: RecordActionType.LOADING,
    });

    const res: RecordsResponseType | null = await getRecords();

    if (res === null) return;
    dispatch({
      type: RecordActionType.LOAD_RECORDS,
      payload: res.data ? res.data : [],
    });
  };
};

export const searchRecord = (key: string) => {
  return async (dispatch: Dispatch<RecordAction>) => {
    if (key === "") {
      return;
    }
    dispatch({
      type: RecordActionType.LOADING,
    });

    const res: RecordsResponseType | null = await searchRecords(key);

    if (res === null) {
      return;
    }
    dispatch({
      type: RecordActionType.LOAD_RECORDS,
      payload: res.data ? res.data : [],
    });
  };
};

export const changeCurrentRecord = (id: string) => {
  return async (dispatch: Dispatch<RecordAction>) => {
    dispatch({
      type: RecordActionType.LOADING,
    });

    const res: IRecord | null = await getRecordById(id);

    if (res === null) {
      return;
    }
    dispatch({
      type: RecordActionType.CHANGE_CURRENT_RECORD,
      payload: res,
    });
  };
};

export const updateRecord = (
  id: string,
  newRecord: IRecord,
  onFinish: () => void,
) => {
  return async (dispatch: Dispatch<RecordAction>) => {
    dispatch({
      type: RecordActionType.LOADING,
    });

    const res: IRecord | null = await updateRecordById(id, newRecord);
    if (!res) {
      return;
    }

    dispatch({
      type: RecordActionType.CHANGE_CURRENT_RECORD,
      payload: res,
    });
    onFinish();
  };
};

export const removeRecord = (id: string) => {
  return async (dispatch: Dispatch<RecordAction>) => {
    dispatch({
      type: RecordActionType.LOADING,
    });

    const res: boolean = await removeRecordById(id);
    if (res === null) {
      return;
    }

    dispatch({
      type: RecordActionType.CHANGE_CURRENT_RECORD,
      payload: null,
    });

    window.history.back();
  };
};
