import * as React from 'react';
import {useEffect, useState} from 'react';
import {
  NavigationState,
  SceneMap,
  SceneRendererProps,
  TabBar,
  TabView,
} from 'react-native-tab-view';
import {useWindowDimensions, Text, View, StyleSheet} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {MyPrayers, Subscribed} from 'src/screens';
import {useAppDispatch} from 'src/hooks';
import {getPrayers} from 'src/store/ducks/prayers';

interface IColumnScreen {
  columnId: number;
  columnTitle: string;
}

interface ITabRoute {
  route: {
    key: string;
  };
}

export const ColumnTabNavigation = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const route = useRoute<RouteProp<{params: IColumnScreen}, 'params'>>();
  const layout = useWindowDimensions();
  const routes = [
    {key: 'Prayers', title: 'MY PRAYERS'},
    {key: 'Subscribed', title: 'SUBSCRIBED'},
  ];

  useEffect(() => {
    navigation.setOptions({
      title: route.params.columnTitle,
    });
    dispatch(getPrayers());
  }, []);

  const getTabBarIcon = (props: ITabRoute) => {
    const tabRoute = props.route;

    if (tabRoute.key === 'Subscribed') {
      return (
        <View style={styles.icon}>
          <Text style={styles.iconText}>3</Text>
        </View>
      );
    }
  };

  const renderScene = SceneMap({
    Prayers: () => <MyPrayers columnId={route.params.columnId} />,
    Subscribed: () => <Subscribed columnId={route.params.columnId} />,
  });

  const renderTabBar = (
    props: SceneRendererProps & {
      navigationState: NavigationState<{key: string; title: string}>;
    },
  ) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      tabStyle={styles.tab}
      activeColor="#72A8BC"
      inactiveColor="#C8C8C8"
      pressColor="#72A8BC"
      labelStyle={styles.text}
      style={styles.tabBar}
      renderIcon={props => getTabBarIcon(props)}
    />
  );

  return (
    <>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        swipeEnabled={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#ffffff',
  },
  tab: {
    flexDirection: 'row-reverse',
  },
  text: {
    fontSize: 13,
    lineHeight: 16,
    fontFamily: 'SFUIText-Regular',
    fontWeight: 'bold',
  },
  indicator: {
    backgroundColor: '#72A8BC',
  },
  icon: {
    height: 16,
    width: 16,
    marginBottom: 5,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AC5253',
  },
  iconText: {
    fontSize: 9,
    fontFamily: 'SFUIText-Regular',
    color: '#ffffff',
  },
});
