import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import colors from 'src/styles/colors';
import {PlusIcon} from 'src/assets/icons/plus-icon';
import {Controller, useForm, SubmitHandler} from 'react-hook-form';
import {CustomInput} from 'src/components';
import {CommentIcon} from 'src/assets';
import {useAppDispatch, useAppSelector} from 'src/hooks';
import {addNewComment, getComments} from 'src/store/ducks';
import {Comments} from './components';

interface ICard {
  prayerId: number;
  prayerTitle: string;
}

interface IAddComment {
  text: string;
}

export const Card = () => {
  const route = useRoute<RouteProp<{params: ICard}, 'params'>>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getComments());
  }, []);
  const {error} = useAppSelector(state => state.comment);
  const comments = useAppSelector(state =>
    state.comment.comments.filter(
      comment => comment.prayerId === route.params.prayerId,
    ),
  );

  const {handleSubmit, control, reset} = useForm({
    defaultValues: {
      text: '',
    },
  });

  const onSubmit: SubmitHandler<IAddComment> = (data: IAddComment) => {
    dispatch(addNewComment({text: data.text, prayerId: route.params.prayerId}));
    reset({text: ''});
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{route.params.prayerTitle}</Text>
      </View>
      <View style={styles.lastPrayed}>
        <View style={styles.lastPrayedIndicator} />
        <Text style={styles.lastPrayedText}>Last prayed 8 min ago</Text>
      </View>
      <View style={styles.prayerInfo}>
        <View style={styles.block}>
          <Text style={styles.date}>July 25 2017</Text>
          <Text style={styles.text}>Date Added</Text>
          <Text style={styles.openedText}>Opened for 4 days</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.number}>123</Text>
          <Text style={styles.text}>Times Prayed Total</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.number}>60</Text>
          <Text style={styles.text}>Times Prayed by Me</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.number}>63</Text>
          <Text style={styles.text}>Times Prayed by Others</Text>
        </View>
      </View>
      <View style={styles.membersContainer}>
        <Text style={styles.membersTitle}>MEMBERS</Text>
        <View style={styles.membersBlock}>
          <Image
            source={require('src/assets/img/photo1.png')}
            style={styles.image}
          />
          <Image
            source={require('src/assets/img/photo2.png')}
            style={styles.image}
          />
          <View style={styles.plusButton}>
            <PlusIcon color={colors.white} />
          </View>
        </View>
      </View>
      <Text style={styles.commentsTitle}>COMMENTS</Text>
      <Comments comments={comments} />
      {error && <Text>{error}</Text>}
      <View style={styles.inputBlock}>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={styles.commentButton}>
          <CommentIcon />
        </TouchableOpacity>
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <CustomInput
              placeholder={'Add a comment...'}
              onBlur={handleSubmit(onSubmit)}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="text"
          rules={{required: true}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  titleContainer: {
    backgroundColor: colors.beige,
    paddingHorizontal: 15,
    paddingBottom: 23,
  },
  title: {
    fontFamily: 'SFUIText-Regular',
    color: colors.white,
    fontSize: 17,
    lineHeight: 27,
  },
  lastPrayed: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 15,
    height: 50,
  },
  lastPrayedIndicator: {
    height: 22,
    width: 3,
    backgroundColor: colors.red,
  },
  lastPrayedText: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 17,
    lineHeight: 20,
    marginLeft: 10,
    color: colors.black,
  },
  prayerInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  block: {
    justifyContent: 'center',
    height: 108,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: colors.lightGray,
    width: '50%',
  },
  number: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 32,
    lineHeight: 37,
    color: colors.beige,
  },
  date: {
    fontFamily: 'SFUIText-Regular',
    marginVertical: 10,
    fontSize: 22,
    lineHeight: 26,
    color: colors.beige,
  },
  text: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 13,
    lineHeight: 15,
    color: colors.black,
  },
  openedText: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 13,
    lineHeight: 15,
    color: colors.blue,
  },

  membersContainer: {
    paddingTop: 20,
    width: '100%',
    padding: 15,
  },
  membersTitle: {
    fontFamily: 'SFUIText-Regular',
    color: colors.blue,
    fontSize: 13,
    lineHeight: 15,
    marginBottom: 15,
  },
  membersBlock: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    borderRadius: 50,
    marginRight: 5,
  },
  commentsTitle: {
    fontFamily: 'SFUIText-Regular',
    color: colors.blue,
    fontSize: 13,
    lineHeight: 15,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  plusButton: {
    width: 32,
    height: 32,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.beige,
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
    fontFamily: 'SFUIText-Regular',
    fontSize: 17,
    color: '#9C9C9C',
  },
  commentButton: {
    marginRight: 10,
  },
});
