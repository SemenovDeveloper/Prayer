import {all} from 'redux-saga/effects';
import {addColumnWatcher, getColumnsWatcher} from './column';
import {addNewCommentWatcher, getCommentsWatcher} from './comment';
import {
  addNewPrayerWatcher,
  checkPrayerWatcher,
  deletePrayerWatcher,
  getPrayersWatcher,
} from './prayers/prayers-sagas';
import {SignInWatcher, SignUpWatcher} from './user/user-sagas';

export function* rootSaga() {
  yield all([
    SignUpWatcher(),
    SignInWatcher(),
    getPrayersWatcher(),
    getColumnsWatcher(),
    addColumnWatcher(),
    addNewPrayerWatcher(),
    deletePrayerWatcher(),
    checkPrayerWatcher(),
    addNewCommentWatcher(),
    getCommentsWatcher(),
  ]);
}
