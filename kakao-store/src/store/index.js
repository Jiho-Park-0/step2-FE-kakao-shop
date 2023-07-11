import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import productReducer from './slices/productSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const reducer= combineReducers({
  // User reducer: email
  user: userReducer,
  product: productReducer
});

const peristedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: peristedReducer,
});

export default store;