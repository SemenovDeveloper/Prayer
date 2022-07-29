import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'src/hooks';
import {Container, Loader} from 'src/components';
import {getColumns} from 'src/store/ducks/column';

export const ColumnsList: React.FC = () => {
  const {isLoading, error, columns} = useAppSelector(state => state.column);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getColumns());
  }, []);
  Container
  return (
    <Container>
      {isLoading && <Loader />}
      {error && <Text>{error}</Text>}
      {columns.map(column => (
        <View style={styles.card} key={column.id}>
          <Text style={styles.title}>{column.title}</Text>
        </View>
      ))}
    </Container>
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