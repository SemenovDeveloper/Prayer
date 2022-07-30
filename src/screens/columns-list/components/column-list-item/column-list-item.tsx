import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ProfileScreenNavigationProp} from 'src/navigations';

interface IColumnListItem {
	title: string,
	id: number
}

export const ColumnListItem = ({id, title}: IColumnListItem) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('Column', {
          columnId: id,
          columnTitle: title,
        })
      }>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 4,
    marginBottom: 10,
  },
  title: {
    fontSize: 17,
    color: '#514D47',
  }
})