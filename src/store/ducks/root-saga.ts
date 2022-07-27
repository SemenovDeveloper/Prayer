import {all} from 'redux-saga/effects';
import { getColumns, getColumnsWatcher } from './column';

import { getPrayers } from './prayers/prayers-actions';
import {SignInWatcher, SignUpWatcher} from './user/user-sagas';
export function* rootSaga() {
  yield all([
   SignUpWatcher(),
   SignInWatcher(),
   getPrayers(),
   getColumnsWatcher(),
  ])
}