import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {IPrayer} from 'src/types';
import {StateIcon} from 'src/assets/icons';
import {OffIcon, OnIcon, PrayerIcon, UserIcon} from 'src/assets';
import {useAppDispatch} from 'src/hooks';
import {updatePrayer} from 'src/store/ducks/prayers';
import {useNavigation} from '@react-navigation/native';
import {ProfileScreenNavigationProp} from 'src/navigations';
import {Controller, useForm, SubmitHandler} from 'react-hook-form';
import {CustomInput} from 'src/components';

interface IPrayerItem {
  item: IPrayer;
}

export const PrayerItem: React.FC<IPrayerItem> = ({item}) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
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
      <View style={styles.border}>
        <StateIcon />
      </View>
      <TouchableHighlight onPress={handleCheckboxClick}>
        <View style={styles.checkboxIcon}>
          {item.checked ? <OffIcon /> : <OnIcon />}
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.name}
        onLongPress={() => setIsDisabled(false)}
        onPress={() =>
          navigation.navigate('Card', {
            prayerId: item.id,
            prayerTitle: item.title,
          })
        }>
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
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
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
    fontWeight: '400',
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
  name: {
    width: 200,
  },
});
