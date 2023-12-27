import { IUser } from './user.model';
export interface IAuthenticateInfo {
    isAuthenticated: boolean;
    user?: IUser | null;
    loading: boolean;
    error: string | undefined;
}
