import React from 'react';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {EMAIL_REGEX} from 'src/lib';
import {Button, Container, Input, Loader} from 'src/components';
import {ISignUp, signUp} from 'src/store/ducks';
import {useAppDispatch, useAppSelector} from 'src/hooks';
import {Text} from 'react-native';

export const SignUpForm = () => {
  const {control, handleSubmit} = useForm<ISignUp>();
  const {isLoading, error} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<ISignUp> = async data => {
    dispatch(signUp(data));
  };

  return (
    <Container>
      <Controller
        control={control}
        name="name"
        rules={{
          required: 'Username is missing',
          minLength: {
            value: 3,
            message: 'Username must be at least 3 characters long',
          },
        }}
        render={({field: {onChange, value}, fieldState: {error}}) => {
          return (
            <Input
              placeholder="Username"
              onChange={onChange}
              value={value}
              error={error}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="email"
        rules={{
          required: 'Wrong format of email',
          pattern: EMAIL_REGEX,
        }}
        render={({field: {onChange, value}, fieldState: {error}}) => {
          return (
            <Input
              placeholder="Email"
              onChange={onChange}
              value={value}
              error={error}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Password is missing',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters long',
          },
        }}
        render={({field: {onChange, value}, fieldState: {error}}) => {
          return (
            <Input
              placeholder="Password"
              onChange={onChange}
              value={value}
              error={error}
              isSequre
            />
          );
        }}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <Button onPress={handleSubmit(onSubmit)} title="SIGN UP" />
      )}
      {error && <Text>{error}</Text>}
    </Container>
  );
};
