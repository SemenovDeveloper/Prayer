import {createAction} from '@reduxjs/toolkit';
import {IComment} from 'src/types';
import {IAddNewComment} from './type';

export const getComments = createAction('getComments');
export const addNewComment = createAction<IAddNewComment>('addNewComment');
export const setCommentsIsLoading = createAction<boolean>(
  'setCommentsIsLoading',
);
export const setComments = createAction<IComment[]>('setComments');
export const setCommentsError = createAction<string>('setCommentsError');
export const setNewComment = createAction<IComment>('setNewComment');
