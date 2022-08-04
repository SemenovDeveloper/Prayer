import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {IPrayer} from 'src/types';
import {StateIcon} from 'src/assets/icons/state-icon';
import {OffIcon, OnIcon, PrayerIcon, UserIcon} from 'src/assets';
import {Button} from '../ui';
import {useAppDispatch} from 'src/hooks';

interface IPrayerItem {
  item: IPrayer;
}

export const PrayerItem: React.FC<IPrayerItem> = ({item}) => {
  const dispatch = useAppDispatch();

  const renderRightActions = () => (
    <Button onPress={() => {}} title="Delete" deleteType={true} />
  );

  const handleCheckboxClick = () => {
    const data = {
      title: item.title,
      description: item.description,
      checked: !item.checked,
      columnId: item.columnId,
    };
    // dispatch({
    //   type: sagaPrayerActions.CHANGE_PRAYERS_SAGA,
    //   data,
    //   prayerId: item.id,
    // });
  };

  return (
    <View style={styles.prayer}>
      <View style={styles.border}>
        <StateIcon />
      </View>
      <TouchableHighlight onPress={handleCheckboxClick}>
        <View style={styles.checkboxIcon}>
          {item.checked ? <OnIcon /> : <OffIcon />}
        </View>
      </TouchableHighlight>
      <Text style={styles.prayerTitle}>{item.title}</Text>
      <View style={styles.iconContainer}>
        <UserIcon />
        <Text style={styles.count}>3</Text>
      </View>
      <View style={styles.iconContainer}>
        <PrayerIcon fill={'#72A8BC'} />
        <Text style={styles.count}>33</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  prayer: {
    backgroundColor: 'white',
    display: 'flex',
    width: '100%',
    height: 68,
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  border: {
    width: 3,
    height: 22,
    marginRight: 15,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxIcon: {
    width: 22,
    height: 22,
    marginRight: 15,
  },
  iconContainer: {
    marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  plusButton: {
    position: 'absolute',
    top: 8,
    left: 10,
    width: 24,
    height: 24,
  },
  prayerTitle: {
    width: 199,
    color: 'black',
    fontFamily: 'SF UI Text',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: -0.024,
    marginRight: 5,
  },
  count: {
    textAlign: 'center',
    color: '#514D47',
    fontFamily: 'SF UI Text',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 14,
    letterSpacing: -0.024,
    marginLeft: 5,
  },
});
