import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../core/utils/redux";
import PaginationModel from "../../../../../common/pagination/model/pagination_model";
import CommissionPosts from "../../../../../guest/commission_post/data/models/compost_list/commission_posts";


type AdminComPostListState = {
  initLoading: boolean,
  isLoadingComPosts: boolean;
  commissionPosts: CommissionPosts[];
  pagination: PaginationModel | null
  
};

const initialState: AdminComPostListState = {
  isLoadingComPosts: false,
  initLoading:true,
  commissionPosts: [],
  pagination:{
    currentPage:1,
    pageSize:1,
    totalData:10,
    totalPage:1,
  }
};

export const adminComPostListSlice = createSlice({
  name: "admin_compost_list",
  initialState,
  reducers: {
    setInitLoading: (state, action: PayloadAction<boolean>) => {
      state.initLoading = action.payload;
    },
    setIsLoadingComPosts: (state, action: PayloadAction<boolean>) => {
      state.isLoadingComPosts = action.payload;
    },
    fetchCommissionPosts: (state, action: PayloadAction<CommissionPosts[]>) => {
      state.commissionPosts = action.payload;
    },
    setPagination:(state, action:PayloadAction<PaginationModel>)=>{
      state.pagination = action.payload;
    },
  },
});

export const {
  setIsLoadingComPosts,
  fetchCommissionPosts,
  
  setPagination,
  setInitLoading
} = adminComPostListSlice.actions;

export const selectAdminComPostList = (state: RootState): AdminComPostListState => state.admin_compost_list;

export default adminComPostListSlice.reducer;
