import {IAddNewComment, IDeleteComment, IChangeComment} from './type';
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
import {getDate} from 'src/hooks/useDate';

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
  const date = getDate();
  const requestData = {
    body: data.text,
    created: date,
    prayerId: data.prayerId,
  };
  await api.post('comments', requestData);
};

function* addNewCommentWorker(action: PayloadAction<IAddNewComment>) {
  try {
    setCommentsIsLoading(true);
    yield call(postNewComment, action.payload);
    yield put(getComments());
  } catch (error: any) {
    setCommentsError(error.message);
    console.log(error.message);
  }
}

export function* addNewCommentWatcher() {
  yield takeLatest('addNewComment', addNewCommentWorker);
}

const deleteCommentRequest = async (data: IDeleteComment) => {
  await api.delete(`comments/${data}`);
};

function* deleteCommentWorker(action: PayloadAction<IDeleteComment>) {
  try {
    setCommentsIsLoading(true);
    yield call(deleteCommentRequest, action.payload);
    yield put(getComments());
  } catch (error: any) {
    setCommentsError(error.message);
    console.log(error.message);
  }
}

export function* deleteCommentWatcher() {
  yield takeLatest('deleteComment', deleteCommentWorker);
}

const changeCommentRequest = async (data: IChangeComment) => {
  const requestData = {
    body: data.body,
    created: data.created,
  };
  await api.put(`comments/${data.commentId}`, requestData);
};

function* changeCommentWorker(action: PayloadAction<IChangeComment>) {
  try {
    setCommentsIsLoading(true);
    yield call(changeCommentRequest, action.payload);
    yield put(getComments());
  } catch (error: any) {
    setCommentsError(error.message);
    console.log(error.message);
  }
}

export function* changeCommentWatcher() {
  yield takeLatest('changeComment', changeCommentWorker);
}
