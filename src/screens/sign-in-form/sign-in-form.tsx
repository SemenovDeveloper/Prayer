import {StyleSheet} from 'react-native';
import React from 'react';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {EMAIL_REGEX} from 'src/lib';
import {Button, Container, Input} from 'src/components';

type UserProps = {
  username: string;
  email: string;
  password: string;
};

export const SignInForm = () => {
  const {control, handleSubmit} = useForm<UserProps>();
  const onSubmit: SubmitHandler<UserProps> = async data => {
    console.log(data);
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
      <Button onPress={handleSubmit(onSubmit)} title="SIGN IN" />
    </Container>
  );
};

const styles = StyleSheet.create({});
