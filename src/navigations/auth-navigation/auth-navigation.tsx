import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AuthTabNavigation} from './auth-tab-navigation';

const Stack = createNativeStackNavigator();

export const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          name="Auth"
          component={AuthTabNavigation}
          options={{
            title: 'PrayerX',
            headerTitleStyle: {
              fontSize: 17,
              fontWeight: 'bold',
              color: '#514D47',
              fontFamily: 'SFUIText-Regular',
            },
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
