import React from 'react';
import {AppNavigation} from './app-navigation';
import {AuthNavigation} from './auth-navigation';

export const Navigation = () => {
  const token = '';

  return <>{token ? <AppNavigation /> : <AuthNavigation />}</>;
};
