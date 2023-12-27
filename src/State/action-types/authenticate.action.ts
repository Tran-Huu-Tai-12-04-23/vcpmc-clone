// File: authenticate.action.ts
import { IUser } from '../../Model/user.model';

export enum AuthenTicationActionType {
    LOGIN = 'AUTHENTICATE/LOG_IN',
    LOGOUT = 'AUTHENTICATE/LOG_OUT',
    LOG_ERROR = 'AUTHENTICATE/LOG_ERROR',
    LOADING = 'AUTHENTICATE/LOADING',
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
