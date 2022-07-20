import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  StackNavigationProp,
} from '@react-navigation/stack';
import {SignInForm, SignUpForm} from 'src/screens';
import {NavigationContainer} from '@react-navigation/native';

export type RootStackParamList = {
  SignUpForm: undefined;
  SignInForm: undefined;
};

export type ProfileScreenNavigationProp =
  StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export const AuthNavigation: React.FC<Props> = ({navigation}) => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{swipeEnabled: false}}
        initialRouteName={'Sign Up'}>
        <Tab.Screen name="Sign Up" component={SignUpForm} />
        <Tab.Screen name="Sign In" component={SignInForm} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};







