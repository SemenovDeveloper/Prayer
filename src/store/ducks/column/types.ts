import { IColumn } from "src/types"

export interface IColumnState {
  isLoading: boolean
  error: string
  columns: IColumn[]
}