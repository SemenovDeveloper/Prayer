import {takeLatest, put, call} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {isLoading, registerError, signInSuccess} from './user-actions';
import {ISignUp, ISignIn} from './types';
import {api} from 'src/api';
import {IUser} from 'src/types';

const signUpRequest = async (signUpData: ISignUp) => {
  const {data} = await api.post(`auth/sign-up`, signUpData);
  return data;
};

function* signUpWorker(
  action: PayloadAction<{email: string; name: string; password: string}>,
) {
  const {email, name, password} = action.payload;
  const signUpData = {email, name, password};
  try {
    yield put(isLoading(true));
    const response: IUser = yield call(signUpRequest, signUpData);
    if (!response.token) {
      yield put(registerError('Email already registered'));
    } else {
      yield put(signInSuccess(response));
    }
  } catch (err: any) {
    yield put(registerError(err.message));
  }
}

export function* SignUpWatcher() {
  yield takeLatest('signUp', signUpWorker);
}

const signInRequest = async (signInData: ISignIn) => {
  const {data} = await api.post(`auth/sign-in`, signInData);
  return data;
};

function* signInWorker(
  action: PayloadAction<{email: string; password: string}>,
) {
  const {email, password} = action.payload;
  const signInData = {email, password};

  try {
    yield put(isLoading(true));
    const response: IUser = yield call(signInRequest, signInData);
    if (!response.token) {
      yield put(registerError('Wrong email or password'));
    } else {
      yield put(signInSuccess(response));
    }
  } catch (err: any) {
    yield put(registerError(err.message));
  }
}

export function* SignInWatcher() {
  yield takeLatest('signIn', signInWorker);
}
