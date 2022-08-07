import {StyleSheet, TouchableHighlight, ListRenderItemInfo} from 'react-native';
import React from 'react';
import {IComment} from 'src/types';
import {Comment} from './components';
import colors from 'src/styles/colors';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Button, Loader} from 'src/components';
import {useAppDispatch, useAppSelector} from 'src/hooks';
import {deleteComment} from 'src/store/ducks';

interface IComments {
  comments: IComment[];
}

export const Comments: React.FC<IComments> = ({comments}) => {
  const dispatch = useAppDispatch();
  const {isLoading} = useAppSelector(state => state.comment);

  const renderHiddenItem = (data: ListRenderItemInfo<IComment>) => {
    return (
      <TouchableHighlight style={styles.rowBack}>
        <Button
          onPress={() => dispatch(deleteComment(data.item.id))}
          title={'Delete'}
          deleteType={true}
        />
      </TouchableHighlight>
    );
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <SwipeListView
          data={comments}
          extraData={comments}
          style={styles.swipeList}
          rightOpenValue={-80}
          removeClippedSubviews={false}
          useNativeDriver={false}
          renderItem={data => (
            <Comment key={data.item.id} comment={data.item} />
          )}
          renderHiddenItem={renderHiddenItem}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'SFUIText-Regular',
    color: colors.blue,
    fontSize: 13,
    lineHeight: 15,
    marginBottom: 15,
    paddingLeft: 15,
  },
  subTitle: {
    width: '100%',
    textAlign: 'center',
    color: colors.lightestGray,
  },
  rowBack: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  swipeList: {
    width: '100%',
  },
});
