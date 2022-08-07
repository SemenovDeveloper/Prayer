import {
  StyleSheet,
  Text,
  TouchableHighlight,
  ListRenderItemInfo,
} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'src/hooks';
import {Button, Container, Loader} from 'src/components';
import {deleteColumn, getColumns} from 'src/store/ducks';
import {IColumn} from 'src/types';
import {SwipeListView} from 'react-native-swipe-list-view';
import {ColumnListItem} from './components';

export const ColumnsList: React.FC = () => {
  const {isLoading, error, columns} = useAppSelector(state => state.column);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getColumns());
  }, []);

  const renderHiddenItem = (data: ListRenderItemInfo<IColumn>) => {
    return (
      <TouchableHighlight style={styles.rowBack}>
        <Button
          onPress={() => dispatch(deleteColumn(data.item.id))}
          title={'Delete'}
          deleteType={true}
        />
      </TouchableHighlight>
    );
  };
  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <SwipeListView
          data={columns}
          extraData={columns}
          style={styles.swipeList}
          rightOpenValue={-80}
          removeClippedSubviews={false}
          useNativeDriver={false}
          renderItem={data => (
            <ColumnListItem
              key={data.item.id}
              id={data.item.id}
              title={data.item.title}
            />
          )}
          renderHiddenItem={renderHiddenItem}
        />
      )}
      {error && <Text>{error}</Text>}
    </Container>
  );
};

const styles = StyleSheet.create({
  rowBack: {
    width: '100%',
    height: 59,
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  swipeList: {
    width: '100%',
  },
});
