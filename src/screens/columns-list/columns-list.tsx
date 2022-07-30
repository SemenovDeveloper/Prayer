import {FlatList, StyleSheet, Text, TextBase, View} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'src/hooks';
import {Container, Loader} from 'src/components';
import {getColumns} from 'src/store/ducks/column';
import {ColumnListItem} from './components';

export const ColumnsList: React.FC = () => {
  const {isLoading, error, columns} = useAppSelector(state => state.column);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getColumns());
  }, []);
  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          data={columns}
          renderItem={({item}) => (
            <ColumnListItem title={item.title} id={item.id} />
          )}
          keyExtractor={item => `${item.id}`}
        />
      )}
      {error && <Text>{error}</Text>}
    </Container>
  );
};
