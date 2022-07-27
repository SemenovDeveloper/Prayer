import {takeLatest, put, call} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {api} from 'src/api';
import { IColumn } from 'src/types';
import { setColumns, setColumnsError, setColumnsIsLoading } from './column-actions';

const fetchColumns = async () => {
  const response = await api.get('columns')
  return response.data
}

function* getColumnsWorker() {
  try {
    yield put(setColumnsIsLoading(true))
    const response: IColumn[] = yield call(fetchColumns);
    
    console.log(response);
    
    yield put(setColumns(response))
  } catch (err: any) {
    setColumnsError
    yield put(setColumnsError(err.message));
  }
}

export function* getColumnsWatcher() {
  yield takeLatest('getColumns', getColumnsWorker);
}
