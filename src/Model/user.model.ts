import { Dayjs } from "dayjs";

export interface IUser {
  id?: string;
  username: string;
  password: string;
  confirmPassword?: string;
  fullName?: string;
  updateDate?: Dayjs;
  userDetail?: IUserDetail;
  status?: boolean;
  dateExpired?: Dayjs;
}

export interface IUserState {
  loading: boolean;
  error?: string | undefined;
  users: IUser[];
  currentUser: IUser | null;
}

export interface IUserDetail {
  id?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  dateOfBirth?: Dayjs;
  role?: string;
  userId?: string;
  nationality?: string;
}
