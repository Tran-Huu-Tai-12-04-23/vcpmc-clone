import { Dayjs } from "dayjs";

export interface IRecord {
  id?: string;
  codeISRC: string;
  nameRecord: string;
  duration: number;
  single: string;
  author: string;
  genre: string;
  format: string;
  expiryDate: Dayjs;
  key?: number | string;
  thumbnails: string;
  numberContract: string;
  link?: string;
  manufactory?: string;
  createAt?: Dayjs;
  approvalDate?: Dayjs;
  uploader?: string;
  approvedBy?: string;
  dateReceivingAuthorization?: Dayjs;
}
export interface IRecordState {
  loading: boolean;
  error?: string | undefined;
  data: IRecord[] | null;
  currentRecord: IRecord | null;
}
