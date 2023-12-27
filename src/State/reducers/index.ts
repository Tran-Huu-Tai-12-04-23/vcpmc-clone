import { combineReducers } from 'redux';
import { authenticateReducer } from './authenticateInfo.reducer';
import { IAuthenticateInfo } from '../../Model/authenticateInfo.model';
import { UserDetailTypeReducer, userDetailReducer } from './userDetail.reducer';

export type RootState = {
    authenticate: IAuthenticateInfo;
    userDetail: UserDetailTypeReducer;
};

export const rootReducers = combineReducers({
    authenticate: authenticateReducer,
    userDetail: userDetailReducer,
});
