import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Card, Desk, ColumnsList, AddColumnForm} from 'src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {AddColumnButton} from 'src/components';
import {route} from './routes';
import {
  StackNavigationProp,
} from '@react-navigation/stack';

export type RootStackParamList = {
  ColumnsList: undefined;
  AddColumnForm: undefined;
  Desk: undefined;
  Card: undefined;
};

export type ProfileScreenNavigationProp =
  StackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}} initialRouteName={route.COLUMNS_LIST}>
        <Stack.Screen
          name={route.COLUMNS_LIST}
          component={ColumnsList}
          options={{
            headerRight: () => <AddColumnButton/>,
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
        <Stack.Screen name={route.ADD_COLUMN_ROUTE} component={AddColumnForm} />
        <Stack.Screen name={route.DESK_ROUTE} component={Desk} />
        <Stack.Screen name={route.CARD_ROUTE} component={Card} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
