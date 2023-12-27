import { Dispatch } from 'redux';
import { AuthenTicationActionType, AuthenticateAction } from '../action-types';
import { login as handleLogin } from '../../Service/authentication';
import { IUser } from '../../Model/user.model';
import UserHelper from '../../Helper/UserHelper';

export const login = (user: IUser, isRememberLogin: boolean) => {
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

            if (isRememberLogin) {
                UserHelper.saveInformationLogin(result.data);
            }

            return;
        }
        dispatch({
            type: AuthenTicationActionType.LOG_ERROR,
            payload: result?.message ? result?.message : 'Đăng nhập thất bại!',
        });
    };
};

export const logout = () => {
    return (dispatch: Dispatch<AuthenticateAction>) => {
        dispatch({
            type: AuthenTicationActionType.LOGOUT,
        });
    };
};
