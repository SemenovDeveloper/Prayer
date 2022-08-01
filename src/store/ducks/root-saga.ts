import {all} from 'redux-saga/effects';
import { addColumnWatcher, getColumnsWatcher } from './column';
import { addNewPrayerWatcher, getPrayersWatcher } from './prayers/prayers-sagas';
import {SignInWatcher, SignUpWatcher} from './user/user-sagas';
export function* rootSaga() {
  yield all([
   SignUpWatcher(),
   SignInWatcher(),
   getPrayersWatcher(),
   getColumnsWatcher(),
   addColumnWatcher(),
   addNewPrayerWatcher(),
  ])
}