import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../core/utils/redux";
import ComPostModel from "../../data/models/ComPostModel";

type ManageComPostState = {
  isLoadingComPost: boolean;
  commissionPosts: ComPostModel[];
};

const initialState: ManageComPostState = {
  isLoadingComPost: false,
  commissionPosts: [],
};

export const manageComPostSlice = createSlice({
  name: "manage_compost",
  initialState,
  reducers: {
    isLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoadingComPost = action.payload;
    },
    fetchCommissionPosts:(state, action:PayloadAction<ComPostModel[]>) =>{
      state.commissionPosts = action.payload;
    }
  },
});

export const { isLoading, fetchCommissionPosts } = manageComPostSlice.actions;

export const selectManageComPosts = (state:RootState):ManageComPostState => state.manage_compost;

export default manageComPostSlice.reducer;

