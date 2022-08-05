import {takeLatest, put, call} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {api} from 'src/api';
import {
  checkPrayer,
  getPrayers,
  setPrayers,
  setPrayersError,
  setPrayersIsLoading,
} from './prayers-actions';
import {IPrayer} from 'src/types';
import {IAddNewPrayer, ICheckPrayer} from './types';

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

const deletePrayerRequest = async (data: number) => {
  console.log(data);
  const response = await api.delete(`prayers/${data}`);
  return response.data;
};

function* deletePrayerWorker(action: PayloadAction<number>) {
  try {
    setPrayersIsLoading(true);
    yield call(deletePrayerRequest, action.payload);
    yield put(getPrayers());
  } catch (error: any) {
    setPrayersError(error.message);
    console.log(error.message);
  }
}

export function* deletePrayerWatcher() {
  yield takeLatest('deletePrayer', deletePrayerWorker);
}

const checkPrayerRequest = async (data: ICheckPrayer) => {
  const requestData = {
    title: data.title,
    description: data.prayerId,
    checked: data.checked,
    columnId: data.columnId,
  };
  const response = await api.put(`prayers/${data.prayerId}`, requestData);
  return response.data;
};

export function* checkPrayerWorker(action: PayloadAction<ICheckPrayer>) {
  try {
    setPrayersIsLoading(true);
    yield call(checkPrayerRequest, action.payload);
    yield put(getPrayers());
  } catch (error: any) {
    setPrayersError(error.message);
    console.log(error.message);
  }
}

export function* checkPrayerWatcher() {
  yield takeLatest('checkPrayer', checkPrayerWorker);
}
