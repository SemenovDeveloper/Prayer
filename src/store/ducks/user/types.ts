import {IUser} from 'src/types';

export interface IUserState {
  isLoading: boolean;
  error: string;
  user: IUser;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignUp {
  email: string;
  name: string;
  password: string;
}

export type AuthResponse = {
  data: IUser;
};
