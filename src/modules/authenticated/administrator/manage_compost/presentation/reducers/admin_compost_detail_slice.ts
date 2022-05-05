import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../core/utils/redux";
import { CommissionPostDetail } from "../../../../../guest/commission_post/data/models/compost_detail/commission_post_detail";


type AdminComPostDetailState = {
  initLoading: boolean,
  isLoadingComPost: boolean;
  commissionPost: CommissionPostDetail | null;
  
};

const initialState: AdminComPostDetailState = {
  isLoadingComPost: false,
  initLoading:true,
  commissionPost: null,
 
};

export const adminComPostDetailSlice = createSlice({
  name: "admin_compost_detail",
  initialState,
  reducers: {
    setInitLoading: (state, action: PayloadAction<boolean>) => {
      state.initLoading = action.payload;
    },
    setIsLoadingComPost: (state, action: PayloadAction<boolean>) => {
      state.isLoadingComPost = action.payload;
    },
    
    fetchCommissionDetail: (state, action: PayloadAction<CommissionPostDetail>) => {
      state.commissionPost = action.payload;
    },
  },
});

export const {
  setIsLoadingComPost,
  fetchCommissionDetail,
  setInitLoading
} = adminComPostDetailSlice.actions;

export const selectAdminComPostDetail = (state: RootState): AdminComPostDetailState => state.admin_compost_detail;

export default adminComPostDetailSlice.reducer;
