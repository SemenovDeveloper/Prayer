import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import PlusIcon from 'src/assets/icons/plus-icon';
import {ProfileScreenNavigationProp, route} from '../../navigations';
import {useNavigation} from '@react-navigation/native';

interface IAddColumnButton {
  onPress: () => void;
}

export const AddColumnButton: React.FC<IAddColumnButton> = ({onPress}) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  return (
    <TouchableHighlight
      onPress={onPress}
      // onPress={() => navigation.navigate(route.ADD_COLUMN_ROUTE)}
    >
      <PlusIcon />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({});
