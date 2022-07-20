import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Auth, Card, Desk, DeskList} from 'src/screens';
import React from 'react';
import {AppNavigation} from './app-navigation';
import {AuthNavigation} from './auth-navigation';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const token = false;

  return (
    <>
      {token ? (
        <AppNavigation />
      ) : (
        // <>
        //   <Stack.Screen name="DeskList" component={DeskList} />
        //   <Stack.Screen name="Desk" component={Desk} />
        //   <Stack.Screen name="Card" component={Card} />
        // </>
        <AuthNavigation />
        // <Stack.Screen name="Auth" component={Auth} />
      )}
    </>
  );
};
