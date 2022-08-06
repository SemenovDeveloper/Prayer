import * as React from 'react';
import {useEffect} from 'react';
import {Text} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';

interface ICard {
  prayerId: number;
}

export const Card = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<{params: ICard}, 'params'>>();

  return (
    <>
      <Text>{route.params.prayerId}</Text>
    </>
  );
};
