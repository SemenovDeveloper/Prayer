import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {EMAIL_REGEX} from 'src/lib';
import {Button, Container, Input, Loader} from 'src/components';
import {useAppDispatch, useAppSelector} from 'src/hooks';
import {ISignIn, signIn} from 'src/store/ducks';

export const SignInForm = () => {
  const {control, handleSubmit} = useForm<ISignIn>();
  const {isLoading, error} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  
  const onSubmit: SubmitHandler<ISignIn> = async data => {
    dispatch(signIn(data));
  };

  return (
    <Container>
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
        <Button onPress={handleSubmit(onSubmit)} title="SIGN IN" />
      )}
      {error && <Text>{error}</Text>}
    </Container>
  );
};

const styles = StyleSheet.create({});
