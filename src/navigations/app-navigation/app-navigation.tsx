import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Card, Desk, ColumnsList} from 'src/screens';
import {NavigationContainer} from '@react-navigation/native';
import PlusIcon from 'src/assets/icons/plus-icon';

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          name="ColumnsList"
          component={ColumnsList}
          options={{
            headerRight: () => <PlusIcon />,
            title: 'My Desk',
            headerStyle: {},
            headerTitleStyle: {
              fontSize: 17,
              fontWeight: 'bold',
              color: '#514D47',
              fontFamily: 'SFUIText-Regular',
            },
          }}
        />
        <Stack.Screen name="Desk" component={Desk} />
        <Stack.Screen name="Card" component={Card} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
