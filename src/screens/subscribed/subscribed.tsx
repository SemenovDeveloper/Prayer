import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  ListRenderItemInfo,
  View,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {useAppDispatch, useAppSelector} from 'src/hooks';
import {IPrayer} from 'src/types';
import {Button, Container, PrayerItem} from 'src/components';
import {deletePrayer} from 'src/store/ducks/prayers';
import {useNavigation} from '@react-navigation/native';
import {ProfileScreenNavigationProp} from 'src/navigations';

interface ISubscribed {
  columnId: number;
}

export const Subscribed: React.FC<ISubscribed> = ({columnId}) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const [isAnsweredVisible, setIsAnsweredVisible] = useState(false);
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
  inputBlock: {
    width: '100%',
    height: 50,
    marginBottom: 17,
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
