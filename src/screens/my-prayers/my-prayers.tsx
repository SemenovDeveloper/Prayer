import * as React from 'react';
import {useState, useMemo} from 'react';
import {View, FlatList, TextInput} from 'react-native';
import {useAppDispatch, useAppSelector} from 'src/hooks';
import {StyleSheet} from 'react-native';
import {Container} from 'src/components';
import PlusIcon from 'src/assets/icons/plus-icon';
import {addNewPrayer} from 'src/store/ducks/prayers/prayers-actions';

interface IMyPrayers {
  columnId: number;
}

export const MyPrayers: React.FC<IMyPrayers> = ({columnId}) => {
  const dispatch = useAppDispatch();
  const [newPrayerName, setNewPrayerName] = useState('');
  const [isShowAnswered, setIsShowAnswered] = useState(false);

  const handleSubmit = () => {
    if (newPrayerName) {
      dispatch(
        addNewPrayer({
          title: newPrayerName,
          colomnId: columnId,
          description: '',
          checked: true,
        }),
      );
      setNewPrayerName('');
    }
  };

  const prayers = useAppSelector(state => state.prayers.prayers);

  const checkedPrayers = useMemo(
    () => prayers.filter(item => item.checked === true),
    [prayers],
  );

  const uncheckedPrayers = useMemo(
    () => prayers.filter(item => item.checked !== true),
    [prayers],
  );

  return (
    <Container>
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
      {/* <AddPrayerInput
          // maxLength={70}
          // underlineColorAndroid="transparent"
          // placeholder="Add a prayer..."
          // newPrayerName={newPrayerName}
          // // onBlur={() => dispatch(stopAddColumn())}
          // onChangeText={(value) => setNewPrayerName(value)}
          // onSubmitEditing={handleSubmit}
        /> */}
      {/* <FlatList
          style={styles.cardList}
          contentContainerStyle={styles.cardListContainer}
          data={uncheckedCards}
          renderItem={({item}) => <CardPreview {...props} item={item} />}
          keyExtractor={item => 'key' + item.id}
        /> */}
      {/* {checkedCards.length > 0 && (
          <BrownButton
            text={
              isShowAnswered ? 'Hide Answered Prayers' : 'Show Answered Prayers'
            }
            onPress={() => setIsShowAnswered(!isShowAnswered)}
          />
        )} */}
      {/* {isShowAnswered && (
          <FlatList
            style={styles.cardList}
            contentContainerStyle={styles.cardListContainer}
            data={checkedCards}
            renderItem={({item}) => <CardPreview {...props} item={item} />}
            keyExtractor={item => 'key' + item.id}
          />
        )} */}
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
  cardPreview: {
    width: '90%',
    height: 66,
    flexDirection: 'row',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardList: {
    width: '100%',
    flexGrow: 0,
    flexShrink: 0,
  },
  cardListContainer: {
    width: '100%',
    alignItems: 'center',
  },
});
