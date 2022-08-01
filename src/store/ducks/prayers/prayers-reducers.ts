import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import { IPrayer } from 'src/types';
import { setNewPrayer, setPrayers, setPrayersError, setPrayersIsLoading } from './prayers-actions';

interface IPrayersState {
  isLoading: boolean
  error: string
  prayers: IPrayer[]
}

const initialState: IPrayersState = {
  isLoading: false,
  error: '',
  prayers: []
};

export const columnReducer = createReducer<IPrayersState>(initialState, {
  [setPrayersIsLoading.type]: (state, action: PayloadAction<boolean>) => {
    state.isLoading = action.payload;
    state.error = ''
  },
  [setPrayers.type]: (state, action: PayloadAction<IPrayer[]>) => {
    state.prayers = action.payload;
    state.isLoading = false;
    state.error = '';
  },
  [setPrayersError.type]: (state, action: PayloadAction<string>) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  [setNewPrayer.type]: (state, action: PayloadAction<IPrayer>) => {
    state.prayers.push(action.payload)
    state.isLoading = false;
    state.error = '';
  },
});

export default columnReducer;
