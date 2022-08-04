import {combineReducers} from '@reduxjs/toolkit';
import {columnReducer} from './column';
import prayersReducer from './prayers/prayers-reducers';
import {userReducer} from './user';

export const rootReducer = combineReducers({
  user: userReducer,
  column: columnReducer,
  prayers: prayersReducer,
});
