import {createReducer, PayloadAction} from '@reduxjs/toolkit';

interface IPrayersState {
  isLoading: boolean
  error: string
}

const initialState: IPrayersState = {
  isLoading: false,
  error: '',
};

export const prayersReducer = createReducer<IPrayersState>(initialState, {

});

export default prayersReducer;
