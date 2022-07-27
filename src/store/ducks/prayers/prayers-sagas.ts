import {takeLatest, put, call} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';

function* getPrayersWorker() {
  console.log("getPrayersWorker");
}

export function* getPrayersWatcher() {
  yield takeLatest('getPrayers', getPrayersWorker);
}
