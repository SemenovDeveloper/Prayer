import {RootState} from 'src/store';
import {useMemo} from 'react';

export const selectComments = (state: RootState) => state.comment.comments;
export const selectCommentsIsLoading = (state: RootState) =>
  state.comment.isLoading;

export const selectCommentsForCard = (id: number) => (state: RootState) =>
  useMemo(
    () => state.comment.comments.filter(comment => comment.prayerId === id),
    [state.comment.comments],
  );
