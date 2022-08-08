import {useMemo} from 'react';
import {RootState} from 'src/store';

export const selectCheckedPrayersForColumn =
  (id: number) => (state: RootState) =>
    useMemo(
      () =>
        state.prayers.prayers.filter(
          item => item.columnId === id && item.checked === true,
        ),
      [state.prayers.prayers],
    );

export const selectUncheckedPrayersForColumn =
  (id: number) => (state: RootState) =>
    useMemo(
      () =>
        state.prayers.prayers.filter(
          item => item.columnId === id && item.checked !== true,
        ),
      [state.prayers.prayers],
    );
