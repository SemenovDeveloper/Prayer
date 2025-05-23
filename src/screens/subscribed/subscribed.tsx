import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  ListRenderItemInfo,
  View,
  TextInput,
  Text,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {useAppDispatch, useAppSelector} from 'src/hooks';
import {IPrayer} from 'src/types';
import {addNewPrayer, deletePrayer} from 'src/store/ducks/prayers';
import {Button, Container, Loader, PrayerItem} from 'src/components';
import {PlusIcon} from 'src/assets';
import {useNavigation} from '@react-navigation/native';
import {ProfileScreenNavigationProp} from 'src/navigations';
import {useSelector} from 'react-redux';
import {
  selectCheckedPrayersForColumn,
  selectUncheckedPrayersForColumn,
} from 'src/store/ducks/prayers';

interface IMyPrayers {
  columnId: number;
}

export const Subscribed: React.FC<IMyPrayers> = ({columnId}) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [newPrayerName, setNewPrayerName] = useState('');
  const [isAnsweredVisible, setIsAnsweredVisible] = useState(false);
  const {error, isLoading} = useAppSelector(state => state.prayers);
  const checkedPrayers = useSelector(selectCheckedPrayersForColumn(columnId));
  const uncheckedPrayers = useSelector(
    selectUncheckedPrayersForColumn(columnId),
  );

  const deleteRow = (prayerId: number) => {
    dispatch(deletePrayer(prayerId));
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
      setNewPrayerName('');
    }
  };

  const cardNavigation = (id: number, title: string) => {
    navigation.navigate('Card', {
      prayerId: id,
      prayerTitle: title,
    });
  };

  const renderHiddenItem = (data: ListRenderItemInfo<IPrayer>) => {
    return (
      <TouchableHighlight style={styles.rowBack}>
        <Button
          onPress={() => deleteRow(data.item.id)}
          title={'Delete'}
          deleteType={true}
        />
      </TouchableHighlight>
    );
  };

  return (
    <Container>
      <View style={styles.prayers}>
        {isLoading ? (
          <Loader />
        ) : (
          <SwipeListView
            data={checkedPrayers}
            extraData={checkedPrayers}
            style={styles.swipeList}
            rightOpenValue={-80}
            removeClippedSubviews={false}
            useNativeDriver={false}
            renderItem={data => (
              <PrayerItem
                key={data.item.id}
                item={data.item}
                cardNavigation={cardNavigation}
              />
            )}
            renderHiddenItem={renderHiddenItem}
          />
        )}
        {error && <Text>{error}</Text>}
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
            style={styles.swipeList}
            rightOpenValue={-80}
            removeClippedSubviews={false}
            useNativeDriver={false}
            renderItem={data => (
              <PrayerItem
                key={data.item.id}
                item={data.item}
                cardNavigation={cardNavigation}
              />
            )}
            renderHiddenItem={renderHiddenItem}
          />
        )}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  prayers: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  swipeList: {
    marginTop: 17,
    width: '100%',
  },
  rowBack: {
    width: '100%',
    height: 59,
    display: 'flex',
    flexDirection: 'row-reverse',
  },
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
});
