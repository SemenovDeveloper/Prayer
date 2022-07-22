import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {EMAIL_REGEX} from 'src/lib';
import {Button, Input} from 'src/components';
import {api} from 'src/api';

type UserProps = {
  username: string;
  email: string;
  password: string;
};

export interface IUser {
	name: string,
	email: string,
	token: string,
	id: number
}

export const SignUpForm = () => {
  const {control, handleSubmit} = useForm<UserProps>();
  const onSubmit: SubmitHandler<UserProps> = async data => {
    try {
      const response = await api.post(`auth/sign-up`, data);
      const resdata = response
      console.log(resdata);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <Controller
        control={control}
        name="username"
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
              placeholder="username"
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
          required: 'Email is not valid',
          pattern: EMAIL_REGEX,
        }}
        render={({field: {onChange, value}, fieldState: {error}}) => {
          return (
            <Input
              placeholder="email"
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
              placeholder="password"
              onChange={onChange}
              value={value}
              error={error}
              isSequre
            />
          );
        }}
      />
      <Button onPress={handleSubmit(onSubmit)} title="register" />
    </View>
  );
};

const styles = StyleSheet.create({});
