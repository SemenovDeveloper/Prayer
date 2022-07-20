import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Auth, Card, Desk, DeskList } from 'src/screens';
import React from 'react';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const token = false;

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

