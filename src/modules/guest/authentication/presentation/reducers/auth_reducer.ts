import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../core/utils/redux";
import UserModel, { UserData } from "../../data/models/user_model";
import { VerifyTokenModel } from "../../data/models/verify_token_model";

type AuthState = {
  isLoadingUser: boolean;
  authUser: UserModel | null;
  registeredUser: UserData | null;
  currentToken: VerifyTokenModel | null;
};

const initialState: AuthState = {
  isLoadingUser: true,
  authUser: null,
  currentToken: null,
  registeredUser:null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoadingUser = action.payload;
    },
    userLogin: (state, action: PayloadAction<UserModel>) => {
      state.authUser = action.payload;
    },
    userLogout: (state) => {
      state.authUser = null;
    },
    verifyCurrentToken: (state, action: PayloadAction<VerifyTokenModel>) => {
      state.currentToken = action.payload;
    },
    setRegisteredUser: (state, action: PayloadAction<UserData|null>) => {
      state.registeredUser = action.payload;
    },
  },
});

export const { setRegisteredUser,isAuthLoading, userLogin, userLogout, verifyCurrentToken } = authSlice.actions;

export const selectAuth = (state: RootState): AuthState => state.auth;

export default authSlice.reducer;
