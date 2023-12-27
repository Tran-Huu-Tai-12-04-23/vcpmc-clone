// File: authenticate.action.ts
import { IUser } from '../../Model/user.model';

export enum AuthenTicationActionType {
    LOGIN = 'LOG_IN',
    LOGOUT = 'LOG_OUT',
    LOG_ERROR = 'LOG_ERROR',
    LOADING = 'LOADING',
}

interface Login {
    type: AuthenTicationActionType.LOGIN;
    payload: IUser;
}

interface Logout {
    type: AuthenTicationActionType.LOGOUT;
}

interface Loading {
    type: AuthenTicationActionType.LOADING;
}
interface LogError {
    type: AuthenTicationActionType.LOG_ERROR;
    payload: string;
}
// Use 'export type' for exporting types
export type AuthenticateAction = Login | Logout | Loading | LogError;
