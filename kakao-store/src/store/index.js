import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productSlice";

const reducers = combineReducers({
  user: userReducer,
  product: productReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;