import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AuthTabNavigation} from './auth-tab-navigation';

const Stack = createNativeStackNavigator();

export const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthTabNavigation}
          options={{title: 'PrayerX'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
