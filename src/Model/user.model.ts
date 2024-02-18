import { Dayjs } from "dayjs";
import { typeRole } from "./contractMining.model";

export interface IUser {
  id?: string;
  username: string;
  password: string;
  userDetail?: IUserDetail;
}

export interface IUserState {
  loading: boolean;
  error?: string | undefined;
  users: IUser[];
  currentUser: IUser | null;
}

export interface IUserDetail {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: Dayjs;
  role?: typeRole;
  userId: string;
  nationality?: string;
}
