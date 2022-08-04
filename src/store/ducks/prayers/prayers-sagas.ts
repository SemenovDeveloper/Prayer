import {takeLatest, put, call} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {api} from 'src/api';
import {
  getPrayers,
  setNewPrayer,
  setPrayers,
  setPrayersError,
  setPrayersIsLoading,
} from './prayers-actions';
import {IPrayer} from 'src/types';
import {IAddNewPrayer} from './types';

const fetchPrayers = async () => {
  const response = await api.get('prayers');
  return response.data;
};

function* getPrayersWorker() {
  try {
    yield put(setPrayersIsLoading(true));
    const response: IPrayer[] = yield call(fetchPrayers);
    yield put(setPrayers(response));
  } catch (err: any) {
    yield put(setPrayersError(err.message));
  }
}

export function* getPrayersWatcher() {
  yield takeLatest('getPrayers', getPrayersWorker);
}

const postNewPrayer = async (data: IAddNewPrayer) => {
  const response = await api.post('/prayers', data);
  return response.data;
};

function* addNewPrayerWorker(action: PayloadAction<IAddNewPrayer>) {
  try {
    setPrayersIsLoading(true);
    yield call(postNewPrayer, action.payload);
    yield put(getPrayers());
  } catch (error: any) {
    setPrayersError(error.message);
    console.log(error.message);
  }
}

export function* addNewPrayerWatcher() {
  yield takeLatest('addNewPrayer', addNewPrayerWorker);
}
