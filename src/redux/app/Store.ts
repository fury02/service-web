import { configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import counterReducer from '../features/counter/counterSlice';
import accountReducer from '../features/values/AccountSlice';
;
const reducers = combineReducers({
  account_values: accountReducer,
  other_data: accountReducer,
  counter: counterReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage ,
  blacklist: ['navigation'],
  whitelist: ['counter', 'other_data', 'account_values'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
