import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {IPrayer} from 'src/types';
import {StateIcon} from 'src/assets/icons';
import {OffIcon, OnIcon, PrayerIcon, UserIcon} from 'src/assets';
import {useAppDispatch} from 'src/hooks';
import {updatePrayer} from 'src/store/ducks/prayers';
import {Controller, useForm, SubmitHandler} from 'react-hook-form';
import {CustomInput} from 'src/components';
import colors from 'src/styles/colors';

interface IPrayerItem {
  item: IPrayer;
  cardNavigation: (id: number, title: string) => void;
}

export const PrayerItem: React.FC<IPrayerItem> = ({item, cardNavigation}) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  const handleCheckboxClick = () => {
    const data = {
      title: item.title,
      description: item.description,
      checked: !item.checked,
      columnId: item.columnId,
      prayerId: item.id,
    };
    dispatch(updatePrayer(data));
  };

  const {handleSubmit, control} = useForm({
    defaultValues: {
      title: item.title,
    },
  });
  const onSubmit: SubmitHandler<{title: string}> = ({title}) => {
    const data = {
      title: title,
      description: item.description,
      checked: item.checked,
      columnId: item.columnId,
      prayerId: item.id,
    };
    dispatch(updatePrayer(data));
    setIsDisabled(true);
  };

  return (
    <View style={styles.prayer}>
      <View style={styles.controlBlock}>
        <View style={styles.border}>
          <StateIcon />
        </View>
        <TouchableHighlight onPress={handleCheckboxClick}>
          <View style={styles.checkboxIcon}>
            {item.checked ? <OffIcon /> : <OnIcon />}
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onLongPress={() => setIsDisabled(false)}
          onPress={() => cardNavigation(item.id, item.title)}>
          {isDisabled ? (
            <Text>{item.title}</Text>
          ) : (
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <CustomInput
                  isDisable={isDisabled}
                  placeholder={item.title}
                  onBlur={handleSubmit(onSubmit)}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="title"
              rules={{required: true}}
            />
          )}
        </TouchableHighlight>
      </View>
      <View style={styles.iconsBlock}>
        <View style={styles.iconContainer}>
          <UserIcon />
          <Text style={styles.count}>3</Text>
        </View>
        <View style={styles.iconContainer}>
          <PrayerIcon fill={'#72A8BC'} />
          <Text style={styles.count}>33</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  prayer: {
    width: '100%',
    height: 68,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  controlBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsBlock: {
    width: 106,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  prayerTitle: {
    color: colors.black,
    fontFamily: 'SF UI Text',
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 20,
    marginRight: 5,
  },
  count: {
    textAlign: 'center',
    color: colors.black,
    fontFamily: 'SF UI Text',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 14,
    marginLeft: 5,
  },
});
