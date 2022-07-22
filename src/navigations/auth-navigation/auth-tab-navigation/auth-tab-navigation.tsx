import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {SignInForm, SignUpForm} from 'src/screens';

const Tab = createMaterialTopTabNavigator();

export const AuthTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 13 },
        tabBarItemStyle: { paddingBottom: 16},
        tabBarActiveTintColor: '#72A8BC',
        tabBarInactiveTintColor: '#C8C8C8',
        tabBarIndicatorStyle: {backgroundColor: '#72A8BC'}
      }}
      initialRouteName={'Sign Up'}>
      <Tab.Screen name="Sign Up" component={SignUpForm} />
      <Tab.Screen name="Sign In" component={SignInForm} />
    </Tab.Navigator>
  );
};
