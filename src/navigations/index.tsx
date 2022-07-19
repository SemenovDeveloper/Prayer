import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from '../screens/auth/auth';
import React from 'react';
import DeskList from '../screens/desklist/desklist';
import Desk from '../screens/desk/desk';
import Card from '../screens/card/card';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  const token = true;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {token ? (
          <>
            <Stack.Screen name="DeskList" component={DeskList} />
            <Stack.Screen name="Desk" component={Desk} />
            <Stack.Screen name="Card" component={Card} />
          </>
        ) : (
          <Stack.Screen name="Auth" component={Auth} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
