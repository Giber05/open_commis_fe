import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../core/utils/redux";
import { CommissionPostDetail } from "../../../../../guest/commission_post/data/models/compost_detail/commission_post_detail";
import IllustratorComposts from "../../data/models/illustrators_composts";

type ManageComPostState = {
  isLoadingComPost: boolean;
  commissionPosts: IllustratorComposts[];
  commissionPostDetail: CommissionPostDetail | null
};

const initialState: ManageComPostState = {
  isLoadingComPost: false,
  commissionPosts: [],
  commissionPostDetail: null,

};

export const manageComPostSlice = createSlice({
  name: "manage_compost",
  initialState,
  reducers: {
    isLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoadingComPost = action.payload;
    },
    fetchCommissionPosts:(state, action:PayloadAction<IllustratorComposts[]>) =>{
      state.commissionPosts = action.payload;
    },
    fetchCommissionPostDetail: (state, action:PayloadAction<CommissionPostDetail>) =>{
      state.commissionPostDetail = action.payload;
    }
  },
});

export const { isLoading, fetchCommissionPosts, fetchCommissionPostDetail } = manageComPostSlice.actions;

export const selectManageComPosts = (state:RootState):ManageComPostState => state.manage_compost;

export default manageComPostSlice.reducer;

