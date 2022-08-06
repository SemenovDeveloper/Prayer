import {IAddNewComment} from './type';
import {PayloadAction} from '@reduxjs/toolkit';
import {
  getComments,
  setComments,
  setCommentsError,
  setCommentsIsLoading,
} from './comment-actions';
import {call, put, takeLatest} from 'redux-saga/effects';
import {IComment} from 'src/types';
import {api} from 'src/api';

const fetchComments = async () => {
  const response = await api.get('comments');
  return response.data;
};

function* getCommentsWorker() {
  try {
    yield put(setCommentsIsLoading(true));
    const response: IComment[] = yield call(fetchComments);
    yield put(setComments(response));
  } catch (err: any) {
    yield put(setCommentsError(err.message));
  }
}

export function* getCommentsWatcher() {
  yield takeLatest('getComments', getCommentsWorker);
}

const postNewComment = async (data: IAddNewComment) => {
  // const response = await api.post('/prayers', data);
  // return response.data;
};

function* addNewCommentWorker(action: PayloadAction<IAddNewComment>) {
  try {
    setCommentsIsLoading(true);
    yield put(getComments());
    // yield call(postNewComment, action.payload);
    // yield put(getPrayers());
  } catch (error: any) {
    setCommentsError(error.message);
    console.log(error.message);
  }
}

export function* addNewCommentWatcher() {
  yield takeLatest('addNewComment', addNewCommentWorker);
}
