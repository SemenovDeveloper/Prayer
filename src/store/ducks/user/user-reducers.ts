import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from 'src/types';
import {IUserState} from './types';
import {isLoading, registerError, signInSuccess} from './user-actions';

const initialState: IUserState = {
  isLoading: false,
  error: '',
  user: {id: 0, email: '', name: '', token: ''},
};

export const userReducer = createReducer<IUserState>(initialState, {
  [isLoading.type]: (state, action: PayloadAction<boolean>) => {
    state.isLoading = action.payload;
    state.error = ''
  },
  [signInSuccess.type]: (state, action: PayloadAction<IUser>) => {
    state.user = action.payload;
    state.isLoading = false;
    state.error = '';
  },
  [registerError.type]: (state, action: PayloadAction<string>) => {
    state.isLoading = false;
    state.error = action.payload;
  },
});

export default userReducer;
