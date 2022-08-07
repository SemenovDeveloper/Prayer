import {takeLatest, put, call} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {api} from 'src/api';
import {IColumn} from 'src/types';
import {
  getColumns,
  setColumns,
  setColumnsError,
  setColumnsIsLoading,
  setNewColumn,
} from './column-actions';
import {IAddColumn, IUpdateColumn} from './types';

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
  return response.data;
};

export function* addColumnWorker(action: PayloadAction<IAddColumn>) {
  try {
    setColumnsIsLoading(true);
    const response: IColumn = yield call(postNewColumn, action.payload);
    yield put(setNewColumn(response));
  } catch (error: any) {
    setColumnsError(error.message);
    console.log(error.message);
  }
}

export function* addColumnWatcher() {
  yield takeLatest('addColumn', addColumnWorker);
}

const deleteColumnRequest = async (data: number) => {
  await api.delete(`columns/${data}`);
};

function* deleteColumnWorker(action: PayloadAction<number>) {
  try {
    setColumnsIsLoading(true);
    yield call(deleteColumnRequest, action.payload);
    yield put(getColumns());
  } catch (error: any) {
    setColumnsError(error.message);
    console.log(error.message);
  }
}

export function* deleteColumnWatcher() {
  yield takeLatest('deleteColumn', deleteColumnWorker);
}

const updateColumnRequest = async (data: IUpdateColumn) => {
  const requestData = {
    title: data.title,
    description: data.description,
    prayerId: data.prayerId,
  };
  await api.put(`columns/${data.columnId}`, requestData);
};

export function* updateColumnWorker(action: PayloadAction<IUpdateColumn>) {
  try {
    setColumnsIsLoading(true);
    yield call(updateColumnRequest, action.payload);
    yield put(getColumns());
  } catch (error: any) {
    setColumnsError(error.message);
    console.log(error.message);
  }
}

export function* updateColumnWatcher() {
  yield takeLatest('updateColumn', updateColumnWorker);
}
