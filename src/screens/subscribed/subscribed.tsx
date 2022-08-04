import React, {useMemo, useState} from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  ListRenderItemInfo,
  View,
  TextInput,
} from 'react-native';
import {RowMap, SwipeListView} from 'react-native-swipe-list-view';
import {useAppDispatch, useAppSelector} from 'src/hooks';
import {IPrayer} from 'src/types';
import {addNewPrayer} from 'src/store/ducks/prayers';
import {Button, Container, PrayerItem} from 'src/components';
import PlusIcon from 'src/assets/icons/plus-icon';
import {getColumns} from 'src/store/ducks';

interface ISubscribed {
  columnId: number;
}

export const Subscribed: React.FC<ISubscribed> = ({columnId}) => {
  const dispatch = useAppDispatch();
  const prayers = useAppSelector(state => state.prayers.prayers);
  const [newPrayerName, setNewPrayerName] = useState('');
  const [isAnsweredVisible, setIsAnsweredVisible] = useState(false);

  const checkedPrayers = useMemo(
    () =>
      prayers.filter(
        item => item.checked === true && item.columnId === columnId,
      ),
    [prayers, columnId],
  );

  const uncheckedPrayers = useMemo(
    () =>
      prayers.filter(
        item => item.checked !== true && item.columnId === columnId,
      ),
    [prayers, columnId],
  );

  const deleteRow = (rowMap: RowMap<IPrayer>, prayerId: number) => {
    closeRow(rowMap, prayerId);
    console.log('delete row', prayerId);
    // dispatch(deletePrayer(prayerId));
  };

  const closeRow = (rowMap: RowMap<IPrayer>, prayerId: number) => {
    if (rowMap[`${prayerId}`]) {
      rowMap[`${prayerId}`].closeRow();
    }
  };

  const handleSubmit = () => {
    if (newPrayerName) {
      dispatch(
        addNewPrayer({
          title: newPrayerName,
          columnId: columnId,
          description: '',
          checked: true,
        }),
      );
      dispatch(getColumns());
      setNewPrayerName('');
    }
  };

  const renderHiddenItem = (
    data: ListRenderItemInfo<IPrayer>,
    rowMap: RowMap<IPrayer>,
  ) => {
    return (
      <TouchableHighlight style={styles.rowBack}>
        <Button
          onPress={() => deleteRow(rowMap, data.item.id)}
          title={'Delete'}
          deleteType={true}
        />
      </TouchableHighlight>
    );
  };

  return (
    <Container>
      <View style={styles.prayersBlock}>
        <SwipeListView
          data={checkedPrayers}
          extraData={checkedPrayers}
          leftOpenValue={200}
          removeClippedSubviews={false}
          useNativeDriver={false}
          renderItem={data => (
            <PrayerItem key={data.item.id} item={data.item} />
          )}
          renderHiddenItem={renderHiddenItem}
        />
        <Button
          onPress={() => setIsAnsweredVisible(!isAnsweredVisible)}
          title={
            isAnsweredVisible
              ? 'Hide Answered Prayers'
              : 'Show Answered Prayers'
          }
        />
        {isAnsweredVisible && (
          <SwipeListView
            data={uncheckedPrayers}
            extraData={uncheckedPrayers}
            // rightOpenValue={300}
            // leftOpenValue={300}
            // removeClippedSubviews={false}
            // useNativeDriver={false}
            renderItem={data => (
              <PrayerItem key={data.item.id} item={data.item} />
            )}
            renderHiddenItem={renderHiddenItem}
          />
        )}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  inputBlock: {
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 14,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 10,
    fontFamily: 'SFUIText-Regular',
    fontSize: 17,
    color: '#9C9C9C',
  },
  input: {
    marginLeft: 14,
  },
  rowBack: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  prayersBlock: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
