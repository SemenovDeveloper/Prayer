import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import { IColumn } from 'src/types';
import { setColumns, setColumnsError, setColumnsIsLoading, setNewColumn } from './column-actions';
import { IColumnState } from './types';

const initialState: IColumnState = {
  isLoading: false,
  error: '',
  columns: []
};

export const columnReducer = createReducer<IColumnState>(initialState, {
  [setColumnsIsLoading.type]: (state, action: PayloadAction<boolean>) => {
    state.isLoading = action.payload;
    state.error = ''
  },
  [setColumns.type]: (state, action: PayloadAction<IColumn[]>) => {
    state.columns = action.payload;
    state.isLoading = false;
    state.error = '';
  },
  [setColumnsError.type]: (state, action: PayloadAction<string>) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  [setNewColumn.type]: (state, action: PayloadAction<IColumn>) => {
    state.columns.push(action.payload)
    state.isLoading = false;
    state.error = '';
  },
});

export default columnReducer;
