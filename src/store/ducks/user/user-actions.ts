import {createAction} from '@reduxjs/toolkit';
import {ISignUp, ISignIn} from './types';
import {IUser} from 'src/types';

export const signUp = createAction<ISignUp>('signUp');
export const signIn = createAction<ISignIn>('signIn');
export const signInSuccess = createAction<IUser>('signInSuccess');
export const isLoading = createAction<boolean>('isLoading');
export const registerError = createAction<string>('signUpError');
