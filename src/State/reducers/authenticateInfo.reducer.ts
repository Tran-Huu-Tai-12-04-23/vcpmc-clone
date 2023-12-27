import { IAuthenticateInfo } from '../../Model/authenticateInfo.model';
import { AuthenTicationActionType, AuthenticateAction } from '../action-types';

const initialState: IAuthenticateInfo = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: undefined,
};

export const authenticateReducer = (state = initialState, action: AuthenticateAction) => {
    switch (action.type) {
        case AuthenTicationActionType.LOGIN: {
            return {
                isAuthenticated: true,
                user: action.payload,
                loading: false,
                error: undefined,
            };
        }
        case AuthenTicationActionType.LOGOUT: {
            return {
                ...initialState,
            };
        }
        case AuthenTicationActionType.LOADING: {
            return {
                ...initialState,
                loading: true,
            };
        }

        case AuthenTicationActionType.LOG_ERROR: {
            return {
                ...initialState,
                loading: false,
                error: action.payload,
            };
        }

        default:
            return state;
    }
};
