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
import PlusIcon from 'src/assets/icons/plus-icon';
import {getColumns} from 'src/store/ducks';
import {useNavigation} from '@react-navigation/native';
import {ProfileScreenNavigationProp} from 'src/navigations';

interface IMyPrayers {
  columnId: number;
}

export const MyPrayers: React.FC<IMyPrayers> = ({columnId}) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [newPrayerName, setNewPrayerName] = useState('');
  const [isAnsweredVisible, setIsAnsweredVisible] = useState(false);
  const {error, isLoading} = useAppSelector(state => state.prayers);
  const checkedPrayers = useAppSelector(state =>
    state.prayers.prayers.filter(
      item => item.columnId === columnId && item.checked === true,
    ),
  );
  const uncheckedPrayers = useAppSelector(state =>
    state.prayers.prayers.filter(
      item => item.columnId === columnId && item.checked !== true,
    ),
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
      dispatch(getColumns());
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
      <View style={styles.prayersBlock}>
        <View style={styles.inputBlock}>
          <PlusIcon />
          <TextInput
            maxLength={70}
            placeholder="Add a prayer..."
            style={styles.input}
            onChangeText={value => setNewPrayerName(value)}
            onSubmitEditing={handleSubmit}
            onBlur={handleSubmit}
            value={newPrayerName}
          />
        </View>
        {isLoading ? (
          <Loader />
        ) : (
          <SwipeListView
            style={styles.swipeList}
            data={checkedPrayers}
            extraData={checkedPrayers}
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
            style={styles.swipeList}
            data={uncheckedPrayers}
            extraData={uncheckedPrayers}
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
    height: '100%',
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
  swipeList: {
    marginTop: 17,
  },
});
