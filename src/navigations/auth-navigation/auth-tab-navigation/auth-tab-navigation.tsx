import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {SignInForm, SignUpForm} from 'src/screens';

const Tab = createMaterialTopTabNavigator();

export const AuthTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{swipeEnabled: false}}
      initialRouteName={'Sign Up'}>
      <Tab.Screen name="Sign Up" component={SignUpForm} />
      <Tab.Screen name="Sign In" component={SignInForm} />
    </Tab.Navigator>
  );
};
