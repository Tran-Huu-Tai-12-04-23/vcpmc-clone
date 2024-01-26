// File: authenticate.action.ts
import { IRecord } from "../../Model/record.model";

export enum RecordActionType {
  LOAD_RECORDS = "RECORD/LOAD_RECORDS",
  GET_RECORD = "RECORD/GET_RECORD",
  ADD_RECORD = "RECORD/ADD_RECORD",
  REMOVE_RECORD = "RECORD/REMOVE_RECORD",
  EDIT_RECORD = "RECORD/EDIT_RECORD",
  LOG_ERROR = "RECORD/LOG_ERROR",
  LOADING = "RECORD/LOADING",
  CHANGE_CURRENT_RECORD = "RECORD/CHANGE_CURRENT_RECORD",
}

interface LoadRecords {
  type: RecordActionType.LOAD_RECORDS;
  payload: IRecord[];
}

interface ChangeCurrentRecord {
  type: RecordActionType.CHANGE_CURRENT_RECORD;
  payload: IRecord | null;
}

interface AddRecord {
  type: RecordActionType.ADD_RECORD;
  payload: IRecord;
}
interface RemoveRecord {
  type: RecordActionType.REMOVE_RECORD;
  payload: {
    id: string;
  };
}
interface EditRecord {
  type: RecordActionType.EDIT_RECORD;
  payload: {
    id: string;
    data: IRecord;
  };
}
interface Loading {
  type: RecordActionType.LOADING;
}
interface LogError {
  type: RecordActionType.LOG_ERROR;
  payload: string;
}
// Use 'export type' for exporting types
export type RecordAction =
  | LoadRecords
  | RemoveRecord
  | EditRecord
  | AddRecord
  | LogError
  | Loading
  | ChangeCurrentRecord;
