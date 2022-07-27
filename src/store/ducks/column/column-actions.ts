import { createAction } from "@reduxjs/toolkit"
import { IColumn } from "src/types"

export const getColumns = createAction('getColumns')
export const setColumns = createAction<IColumn[]>('setColumns')
export const setColumnsIsLoading = createAction<boolean>('setColumnsIsLoading')
export const setColumnsError = createAction<string>('setColumnsError')
