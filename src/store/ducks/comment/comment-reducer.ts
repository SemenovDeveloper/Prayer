import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {IComment} from 'src/types';
import {
  setComments,
  setCommentsError,
  setCommentsIsLoading,
  setNewComment,
} from './comment-actions';

interface ICommentsState {
  isLoading: boolean;
  error: string;
  comments: IComment[];
}

const initialState: ICommentsState = {
  isLoading: false,
  error: '',
  comments: [],
};

export const commentReducer = createReducer<ICommentsState>(initialState, {
  [setCommentsIsLoading.type]: (state, action: PayloadAction<boolean>) => {
    state.isLoading = action.payload;
    state.error = '';
  },
  [setComments.type]: (state, action: PayloadAction<IComment[]>) => {
    console.log(action.payload);
    state.comments = action.payload;
    state.isLoading = false;
    state.error = '';
  },
  [setCommentsError.type]: (state, action: PayloadAction<string>) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  [setNewComment.type]: (state, action: PayloadAction<IComment>) => {
    state.comments.push(action.payload);
    state.isLoading = false;
    state.error = '';
  },
});
