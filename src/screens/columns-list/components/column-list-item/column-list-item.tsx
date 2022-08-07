import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {useAppDispatch} from 'src/hooks';
import colors from 'src/styles/colors';
import {Controller, useForm, SubmitHandler} from 'react-hook-form';
import {CustomInput} from 'src/components';
import {useNavigation} from '@react-navigation/native';
import {ProfileScreenNavigationProp} from 'src/navigations';
import {updateColumn} from 'src/store/ducks';

interface IColumnListItem {
  title: string;
  id: number;
}

export const ColumnListItem: React.FC<IColumnListItem> = ({title, id}) => {
  const dispatch = useAppDispatch();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const {handleSubmit, control} = useForm({
    defaultValues: {
      title: title,
    },
  });

  const onSubmit: SubmitHandler<{title: string}> = ({title}) => {
    const data = {
      title: title,
      description: '',
      prayerId: 0,
      columnId: id,
    };
    dispatch(updateColumn(data));
    setIsDisabled(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onLongPress={() => setIsDisabled(false)}
        onPress={() =>
          navigation.navigate('Column', {
            columnId: id,
            columnTitle: title,
          })
        }>
        <View style={styles.card}>
          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <CustomInput
                isDisable={isDisabled}
                placeholder={title}
                onBlur={handleSubmit(onSubmit)}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="title"
            rules={{required: true}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 74,
    backgroundColor: colors.white,
  },
  card: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 4,
    marginBottom: 10,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 17,
    color: '#514D47',
  },
  // comment: {
  //   width: '100%',
  //   height: 74,
  //   display: 'flex',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   backgroundColor: 'white',
  //   paddingHorizontal: 15,
  //   borderTopColor: colors.lightGray,
  //   borderTopWidth: 1,
  // },
  // image: {
  //   height: 44,
  //   width: 44,
  //   borderRadius: 50,
  //   marginRight: 10,
  // },
  // textBlock: {},
  // commentAuthor: {
  //   fontFamily: 'SF UI Text',
  //   fontSize: 17,
  //   lineHeight: 20,
  //   color: colors.black,
  // },
  // commentDate: {
  //   fontFamily: 'SF UI Text',
  //   fontSize: 13,
  //   lineHeight: 16,
  //   color: colors.lightestGray,
  // },
  // commentBody: {},
});

// import {StyleSheet, Text, TouchableOpacity} from 'react-native';
// import React from 'react';
// import {useNavigation} from '@react-navigation/native';
// import {ProfileScreenNavigationProp} from 'src/navigations';

// interface IColumnListItem {
//   title: string;
//   id: number;
// }

// export const ColumnListItem = ({id, title}: IColumnListItem) => {
//   const navigation = useNavigation<ProfileScreenNavigationProp>();

//   return (
//     <TouchableOpacity
//       style={styles.card}
// onPress={() =>
//   navigation.navigate('Column', {
//     columnId: id,
//     columnTitle: title,
//   })
//       }>
//       <Text style={styles.title}>{title}</Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     width: '100%',
//     paddingVertical: 20,
//     paddingHorizontal: 15,
//     borderWidth: 1,
//     borderColor: '#E5E5E5',
//     borderRadius: 4,
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 17,
//     color: '#514D47',
//   },
// });
