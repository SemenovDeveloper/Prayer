
import {RootState} from 'src/store';

export const selectCheckedPrayersForColumn = (state: RootState) =>
  state.column.columns;
