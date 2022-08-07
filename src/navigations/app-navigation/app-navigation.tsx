import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Card, ColumnsList, AddColumnForm} from 'src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {AddColumnButton} from 'src/components/ui/add-column-button';
import {route} from './routes';
import {StackNavigationProp} from '@react-navigation/stack';
import {StyleSheet, TouchableHighlight} from 'react-native';
import {ColumnTabNavigation} from './column-tab-navigation';
import colors from 'src/styles/colors';
import {BackIcon, HandsIcon, Settings} from 'src/assets';

export type RootStackParamList = {
  ColumnsList: undefined;
  AddColumnForm: undefined;
  Column: {columnId: number; columnTitle: string};
  Card: {prayerId: number; prayerTitle: string};
};

export type ProfileScreenNavigationProp =
  StackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerTitleAlign: 'center'}}
        initialRouteName={route.COLUMNS_LIST}>
        <Stack.Screen
          name={route.COLUMNS_LIST}
          component={ColumnsList}
          options={({navigation}) => ({
            headerRight: () => (
              <AddColumnButton
                onPress={() => navigation.navigate(route.ADD_COLUMN_ROUTE)}
              />
            ),
            title: 'My Desk',
            headerTitleStyle: styles.header,
          })}
        />
        <Stack.Screen
          name={route.ADD_COLUMN_ROUTE}
          component={AddColumnForm}
          options={{
            title: 'Add Column',
            headerTitleStyle: styles.header,
          }}
        />
        <Stack.Screen
          name={route.COLUMN_ROUTE}
          component={ColumnTabNavigation}
          options={{
            headerTitleStyle: styles.header,
            headerShadowVisible: false,
            headerRight: () => <Settings />,
            headerLeft: () => null,
          }}
        />
        <Stack.Screen
          name={route.CARD_ROUTE}
          component={Card}
          options={({navigation}) => ({
            headerStyle: styles.cardHeader,
            headerRight: () => <HandsIcon stroke={colors.white} />,
            headerLeft: () => (
              <TouchableHighlight onPress={() => navigation.goBack()}>
                <BackIcon />
              </TouchableHighlight>
            ),
            title: '',
            headerShadowVisible: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#514D47',
    fontFamily: 'SFUIText-Regular',
  },
  cardHeader: {
    backgroundColor: colors.beige,
    color: '#ffffff',
  },
});
