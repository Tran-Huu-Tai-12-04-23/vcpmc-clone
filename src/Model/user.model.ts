import { IUserDetail } from "./userDetail.model";

export interface IUser {
  id?: string;
  username: string;
  password: string;
  userDetail?: IUserDetail;
}
