import React from 'react';
import { useAppSelector } from 'src/hooks';
import {AppNavigation} from './app-navigation';
import {AuthNavigation} from './auth-navigation';
export const Navigation = () => {
  const token = useAppSelector(state => state.user.user.token);

  return <>{token ? <AppNavigation /> : <AuthNavigation />}</>;
};
