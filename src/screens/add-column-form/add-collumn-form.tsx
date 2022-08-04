import React from 'react';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {Button, Container, Input, Loader} from 'src/components';
import {useAppDispatch, useAppSelector} from 'src/hooks';
import {Text} from 'react-native';
import {addColumn, IAddColumn} from 'src/store/ducks';
import {useNavigation} from '@react-navigation/native';
import {ProfileScreenNavigationProp} from 'src/navigations';

export const AddColumnForm = () => {
  const {control, handleSubmit} = useForm<IAddColumn>({
    defaultValues: {
      title: '',
      description: '',
      prayerId: 0,
    },
  });
  const {isLoading, error} = useAppSelector(state => state.column);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const onSubmit: SubmitHandler<IAddColumn> = async data => {
    await dispatch(addColumn(data));
    await navigation.navigate('ColumnsList');
  };

  return (
    <Container>
      <Controller
        control={control}
        name="title"
        rules={{
          required: 'Title is missing',
          maxLength: {
            value: 99,
            message: 'Title must be less than 99 characters long',
          },
        }}
        render={({field: {onChange, value}, fieldState: {error}}) => {
          return (
            <Input
              placeholder="Column Title"
              onChange={onChange}
              value={value}
              error={error}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="description"
        render={({field: {onChange, value}, fieldState: {error}}) => {
          return (
            <Input
              placeholder="Add Description"
              onChange={onChange}
              value={value}
              error={error}
            />
          );
        }}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <Button onPress={handleSubmit(onSubmit)} title="Create Columm" />
      )}
      {error && <Text>{error}</Text>}
    </Container>
  );
};
