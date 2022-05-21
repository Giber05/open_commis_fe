import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../core/utils/redux";
import PaginationModel from "../../../../../common/pagination/model/pagination_model";
import CommissionPosts from "../../../../../guest/commission_post/data/models/compost_list/commission_posts";


type AdminComPostListState = {
  initLoading: boolean,
  isLoadingComPosts: boolean;
  isSearchComPostLoading: boolean;
  commissionPosts: CommissionPosts[];
  searchedComPosts: CommissionPosts[];
  pagination: PaginationModel | null
  
};

const initialState: AdminComPostListState = {
  isLoadingComPosts: false,
  isSearchComPostLoading:false,
  initLoading:true,
  commissionPosts: [],
  searchedComPosts: [],
  pagination:{
    currentPage:1,
    pageSize:0,
    totalData:0,
    totalPage:0,
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
    setIsSearchComPostLoading: (state, action: PayloadAction<boolean>) => {
      state.isSearchComPostLoading = action.payload;
    },
    fetchCommissionPosts: (state, action: PayloadAction<CommissionPosts[]>) => {
      state.commissionPosts = action.payload;
    },
    fetchSearchedCommissionPosts: (state, action: PayloadAction<CommissionPosts[]>) => {
      state.searchedComPosts = action.payload;
    },
    setPagination:(state, action:PayloadAction<PaginationModel>)=>{
      state.pagination = action.payload;
    },
  },
});

export const {
  setIsLoadingComPosts,
  fetchCommissionPosts,
  setIsSearchComPostLoading,
  fetchSearchedCommissionPosts,
  setPagination,
  setInitLoading
} = adminComPostListSlice.actions;

export const selectAdminComPostList = (state: RootState): AdminComPostListState => state.admin_compost_list;

export default adminComPostListSlice.reducer;
