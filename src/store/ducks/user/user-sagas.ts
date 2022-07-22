import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "src/api";

interface IUser {
  id: number;
  email: string;
  username: string;
}

interface IUserState {
  token: string;
  user: IUser;
  loginIsLoading: boolean;
  updateInfoLoading: boolean;
  updatePasswordLoading: boolean;
  registerIsLoading: boolean;
  error?: string;
}

const initialState: IUserState = {
  token: "",
  user: {
    id: 0,
    email: "",
    username: "",
  },
  updateInfoLoading: false,
  updatePasswordLoading: false,
  loginIsLoading: false,
  registerIsLoading: false
};

type UserProps = {
  username: string;
  email: string;
  password: string;
};

 export const registerUser = createAsyncThunk(
  "user/registerUser",
  async function (userData: UserProps, { rejectWithValue }) {
    const { email, password, username } = userData;
    try {
      const response = await api.post(`users/sign-up`, {
        email,
        password,
        username
      });
      return response.data;
    } catch (error: any) {
      if (!error.message) throw error;
      return rejectWithValue(error.response.data.message);
    }
  }
);


export const userReducer = createReducer<IUserState>(initialState, {
  [registerUser.pending.type]: (state) => {
    state.loginIsLoading = true;
  },
  [registerUser.fulfilled.type]: (state) => {
    state.loginIsLoading = false;
    state.error = "";
  },
  [registerUser.rejected.type]: (state, action: PayloadAction<string>) => {
    state.loginIsLoading = false;
    state.error = action.payload;
  },
});

export default userReducer;