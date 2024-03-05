/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, UserSlice } from "../../types/user";

const initialState: UserSlice = {
  user: null,
  isLoading: false,
  isError: null,
  token: null,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (newUser: User) => {
    try {
      await fetch("http://localhost:5000/register", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      newUser.onSuccess && newUser.onSuccess();
    } catch (error) {
      console.log(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (newUser: User, thunkApi) => {
    const { email, password } = newUser;
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const { token, userEmail } = await response.json();
      localStorage.setItem("accessToken", token);
      thunkApi.dispatch(setToken(token));
      thunkApi.dispatch(setUser(userEmail));
      newUser.onSuccess && newUser.onSuccess();
    } catch (error) {
      console.log(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setUser, setToken } = userSlice.actions;

export default userSlice.reducer;
