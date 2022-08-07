import {createAction} from '@reduxjs/toolkit';
import {IColumn} from 'src/types';
import {IAddColumn, IUpdateColumn} from './types';

export const getColumns = createAction('getColumns');
export const setColumns = createAction<IColumn[]>('setColumns');
export const setColumnsIsLoading = createAction<boolean>('setColumnsIsLoading');
export const setColumnsError = createAction<string>('setColumnsError');
export const addColumn = createAction<IAddColumn>('addColumn');
export const setNewColumn = createAction<IColumn>('setNewColumn');
export const deleteColumn = createAction<number>('deleteColumn');
export const updateColumn = createAction<IUpdateColumn>('updateColumn');
