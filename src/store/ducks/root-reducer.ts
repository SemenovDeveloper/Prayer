import {combineReducers} from '@reduxjs/toolkit';
import {columnReducer} from './column';
import {commentReducer} from './comment';
import prayersReducer from './prayers/prayers-reducers';
import {userReducer} from './user';

export const rootReducer = combineReducers({
  user: userReducer,
  column: columnReducer,
  prayers: prayersReducer,
  comment: commentReducer,
});
