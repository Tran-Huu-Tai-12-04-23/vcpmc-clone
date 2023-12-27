import { configureStore } from '@reduxjs/toolkit';
import { rootReducers, RootState } from '../reducers';
import { thunk } from 'redux-thunk';

// Create store using Redux Toolkit
export const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type { RootState };
export type AppDispatch = typeof store.dispatch;
