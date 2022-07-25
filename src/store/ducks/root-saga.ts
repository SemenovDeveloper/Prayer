import {all} from 'redux-saga/effects';
import {SignUpWatcher} from './user/user-sagas';

export function* rootSaga() {
  yield all([
   SignUpWatcher()
  ])

}