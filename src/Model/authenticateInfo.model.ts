import { IUser } from "./user.model";
export interface IAuthenticateInfoState {
  isAuthenticated: boolean;
  user?: IUser | null;
  loading: boolean;
  error: string | undefined;
}
