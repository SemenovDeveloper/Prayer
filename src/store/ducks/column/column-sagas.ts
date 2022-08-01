import {takeLatest, put, call} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {api} from 'src/api';
import {IColumn} from 'src/types';
import {
  setColumns,
  setColumnsError,
  setColumnsIsLoading,
  setNewColumn,
} from './column-actions';
import { IAddColumn } from './types';

const fetchColumns = async () => {
  const response = await api.get('columns');
  return response.data;
};

function* getColumnsWorker() {
  try {
    yield put(setColumnsIsLoading(true));
    const response: IColumn[] = yield call(fetchColumns);
    yield put(setColumns(response));
  } catch (err: any) {
    yield put(setColumnsError(err.message));
  }
}

export function* getColumnsWatcher() {
  yield takeLatest('getColumns', getColumnsWorker);
}


const postNewColumn = async (data: IAddColumn) => {
  const response = await api.post('columns', data);
  return response.data
};

export function* addColumnWorker(action: PayloadAction<IAddColumn>,) {
  try {
    setColumnsIsLoading(true)
    const response: IColumn = yield call(postNewColumn, action.payload)
    yield put(setNewColumn(response))
  } catch (error: any) {
    setColumnsError(error.message)
    console.log(error.message);
  }
}

export function* addColumnWatcher() {
  yield takeLatest('addColumn', addColumnWorker);
}
