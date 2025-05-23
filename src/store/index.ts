import createSagaMiddleware from 'redux-saga';
import {rootReducer} from './ducks';
import {rootSaga} from './ducks/';
import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
