import React from 'react';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {EMAIL_REGEX} from 'src/lib';
import {Button, Container, Input} from 'src/components';
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
    // try {
    //   const response = await api.post(`auth/sign-up`, data);
    //   const resdata = response
    //   console.log(resdata);
    // } catch (e) {
    //   console.log(e);
    // }
  };

  return (
    <Container>
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
      <Button onPress={handleSubmit(onSubmit)} title="SIGN UP" />
    </Container>
  );
};

