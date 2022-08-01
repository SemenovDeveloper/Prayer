import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';
import {ProfileScreenNavigationProp} from 'src/navigations';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {MyPrayers, Subscribed} from 'src/screens';
import {columnRoute} from './routes';

interface IColumnScreen {
  columnId: number;
  columnTitle: string;
}
const Tab = createMaterialTopTabNavigator();

export const ColumnTabNavigator = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const route = useRoute<RouteProp<{params: IColumnScreen}, 'params'>>();

  useEffect(() => {
    navigation.setOptions({
      title: route.params.columnTitle,
    });
  }, []);
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}></Tab.Navigator>
    // <Tab.Navigator
    //   screenOptions={{
    //     tabBarLabelStyle: {fontSize: 13, fontFamily: 'SFUIText-Regular'},
    //     tabBarItemStyle: {paddingBottom: 16},
    //     tabBarActiveTintColor: '#72A8BC',
    //     tabBarInactiveTintColor: '#C8C8C8',
    //     tabBarIndicatorStyle: {backgroundColor: '#72A8BC'},
    //   }}
    //   initialRouteName={'Sign Up'}>
    //   <Tab.Screen
    //     name={columnRoute.MY_PRAYERS}
    //     component={MyPrayers}
    //     options={{
    //       title: 'MY PRAYERS',
    //     }}
    //   />
    //   <Tab.Screen
    //     name={columnRoute.SUBSCRIBED}
    //     component={Subscribed}
    //     options={{

    //     }}
    //   />
    // </Tab.Navigator>
  );
};
