import { combineReducers } from "@reduxjs/toolkit";
import { columnReducer } from "./column";
import prayersReducer from "./prayers/prayers-reducers";
import { userReducer } from "./user";
prayersReducer

export const rootReducer = combineReducers({
  user: userReducer,
  columns: columnReducer,
  prayers: prayersReducer
});