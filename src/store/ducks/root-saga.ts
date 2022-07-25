import {all} from 'redux-saga/effects';
import {SignInWatcher, SignUpWatcher} from './user/user-sagas';

export function* rootSaga() {
  yield all([
   SignUpWatcher(),
   SignInWatcher(),
  ])
}