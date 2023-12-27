import { message } from 'antd';
import { Dispatch } from 'redux';
import { AuthenTicationActionType, AuthenticateAction } from '../action-types';
import { login as handleLogin } from '../../Service/authentication';
import { IUser } from '../../Model/user.model';

export const login = (user: IUser) => {
    return async (dispatch: Dispatch<AuthenticateAction>) => {
        dispatch({
            type: AuthenTicationActionType.LOADING,
        });

        const result = await handleLogin(user);

        if (result?.status && result.data) {
            dispatch({
                type: AuthenTicationActionType.LOGIN,
                payload: result.data,
            });
        } else if (result?.message) {
            dispatch({
                type: AuthenTicationActionType.LOG_ERROR,
                payload: result.message,
            });
        }
    };
};

export const logout = () => {
    return (dispatch: Dispatch<AuthenticateAction>) => {
        dispatch({
            type: AuthenTicationActionType.LOGOUT,
        });
    };
};
