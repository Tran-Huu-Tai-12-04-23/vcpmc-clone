import { combineReducers } from 'redux';
import { authenticateReducer } from './authenticateInfo.reducer';

export type RootState = {};

export const rootReducers = combineReducers({
    authenticate: authenticateReducer,
});
