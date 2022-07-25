import { createAction } from "@reduxjs/toolkit"
import * as types from './types'
import {ISignUp} from "./types"
import { IUser } from "src/types"

export const signUp = createAction<ISignUp>('signUp')
export const signInSuccess = createAction<IUser>('signInSuccess')
export const isLoading = createAction<boolean>('isLoading')
export const signUpError = createAction<string>('signUpError')

