import {all} from 'redux-saga/effects';
import {
  addColumnWatcher,
  deleteColumnWatcher,
  getColumnsWatcher,
  updateColumnWatcher,
} from './column';
import {
  addNewCommentWatcher,
  changeCommentWatcher,
  deleteCommentWatcher,
  getCommentsWatcher,
} from './comment';
import {
  addNewPrayerWatcher,
  updatePrayerWatcher,
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
    updatePrayerWatcher(),
    addNewCommentWatcher(),
    getCommentsWatcher(),
    deleteCommentWatcher(),
    changeCommentWatcher(),
    deleteColumnWatcher(),
    updateColumnWatcher(),
  ]);
}
