import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {IComment} from 'src/types';
import {useAppDispatch, useAppSelector} from 'src/hooks';
import colors from 'src/styles/colors';
import {Controller, useForm, SubmitHandler} from 'react-hook-form';
import {CustomInput} from 'src/components';
import {changeComment} from 'src/store/ducks';

type CommentProps = {
  comment: IComment;
};

export const Comment: React.FC<CommentProps> = ({comment}) => {
  const dispatch = useAppDispatch();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const name = useAppSelector(state => state.user.user.name);

  const {handleSubmit, control} = useForm({
    defaultValues: {
      body: comment.body,
    },
  });
  const onSubmit: SubmitHandler<{body: string}> = ({body}) => {
    dispatch(
      changeComment({
        commentId: comment.id,
        body: body,
        created: comment.created,
        prayerId: comment.prayerId,
      }),
    );
    setIsDisabled(true);
  };

  return (
    <View style={styles.comment}>
      <Image
        source={require('src/assets/img/photo1.png')}
        style={styles.image}
      />
      <TouchableOpacity onLongPress={() => setIsDisabled(false)}>
        <View style={styles.textBlock}>
          <Text style={styles.commentAuthor}>
            {name} <Text style={styles.commentDate}> 2 days ago</Text>
          </Text>

          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <CustomInput
                isDisable={isDisabled}
                placeholder={comment.body}
                onBlur={handleSubmit(onSubmit)}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="body"
            rules={{required: true}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    width: '100%',
    height: 74,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    borderTopColor: colors.lightGray,
    borderTopWidth: 1,
  },
  image: {
    height: 44,
    width: 44,
    borderRadius: 50,
    marginRight: 10,
  },
  textBlock: {},
  commentAuthor: {
    fontFamily: 'SF UI Text',
    fontSize: 17,
    lineHeight: 20,
    color: colors.black,
  },
  commentDate: {
    fontFamily: 'SF UI Text',
    fontSize: 13,
    lineHeight: 16,
    color: colors.lightestGray,
  },
  commentBody: {},
});
