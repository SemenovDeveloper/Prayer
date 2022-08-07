import {createAction} from '@reduxjs/toolkit';
import {IPrayer} from 'src/types';
import {IAddNewPrayer, ICheckPrayer} from './types';

export const getPrayers = createAction('getPrayers');
export const setPrayersIsLoading = createAction<boolean>('setPrayersIsLoading');
export const setPrayers = createAction<IPrayer[]>('setPrayers');
export const setPrayersError = createAction<string>('setPrayersError');
export const addNewPrayer = createAction<IAddNewPrayer>('addNewPrayer');
export const setNewPrayer = createAction<IPrayer>('setNewPrayer');
export const deletePrayer = createAction<number>('deletePrayer');
export const checkPrayer = createAction<ICheckPrayer>('checkPrayer');
