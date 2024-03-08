import { Dayjs } from "dayjs";
import { IUser } from "./user.model";

export interface IUnitUsed {
  id?: string;
  key?: string;
  adminAccountName: string;
  admin: string;
  numberContract: string;
  user: string;
  specifiedDevice: string;
  expirationDate: Dayjs;
  status: boolean;
  users: IUser[];
}
export interface IUnitUsedState {
  loading: boolean;
  error?: string | undefined;
  unitUsed: IUnitUsed[];
  currentUnitUsed: IUnitUsed | null;
}
