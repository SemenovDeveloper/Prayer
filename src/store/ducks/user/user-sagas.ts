import {takeLatest, put, call} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {isLoading, signInSuccess, signUpError} from './user-actions';
import {ISignUp} from './types';
import {api} from 'src/api';
import { IUser } from 'src/types';

const signUpRequest = async (signUpData: ISignUp) => {
		const {data} = await api.post(`auth/sign-up`, signUpData);
	return data
}

function* signUp(
  action: PayloadAction<{email: string; name: string; password: string}>,
) {
  const {email, name, password} = action.payload;
  const signUpData = {email, name, password};
	try {
		yield put(isLoading(true))
		const response: IUser = yield call(signUpRequest, signUpData)
		if (!response.token) {
			yield put(signUpError('Email already registered'))
		} else {
			yield put(signInSuccess(response));
		}
	} catch (err) {
		console.log(err);
	}
}

export function* SignUpWatcher() {
  yield takeLatest('signUp', signUp);
}
