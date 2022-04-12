import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../core/utils/redux";
import ComPostModel from "../../data/models/compost_model";

type ComPostState = {
  isLoadingComPosts: boolean;
  commissionPosts: ComPostModel | null;
};

const initialState: ComPostState = {
  isLoadingComPosts: false,
  commissionPosts: null,
};

export const comPostSlice = createSlice({
  name: "compost",
  initialState,
  reducers: {
    isLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoadingComPosts = action.payload;
    },
    fetchCommissionPosts: (state, action: PayloadAction<ComPostModel>) => {
      state.commissionPosts = action.payload;
    },
  },
});

export const { isLoading, fetchCommissionPosts } = comPostSlice.actions;

export const selectComPost = (state:RootState):ComPostState => state.compost

export default comPostSlice.reducer;
