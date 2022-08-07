import {IColumn} from 'src/types';

export interface IColumnState {
  isLoading: boolean;
  error: string;
  columns: IColumn[];
}

export interface IAddColumn {
  title: string;
  description: string;
  prayerId: number;
}

export interface IUpdateColumn {
  title: string;
  description: string;
  prayerId: number;
  columnId: number;
}
