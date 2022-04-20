import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../core/utils/redux";
import PaginationModel from "../../../../common/pagination/model/pagination_model";
import { CategoryModel } from "../../../../common/commission/data/models/category_model";
import { CommissionPostDetail } from "../../data/models/compost_detail/commission_post_detail";
import CommissionPost from "../../data/models/compost_list/commission_post";

type ComPostState = {
  isLoadingComPosts: boolean;
  commissionPosts: CommissionPost[];
  commissionPost: CommissionPostDetail | null;
  categories: CategoryModel[];
  selectedCategory: number | undefined;
  pagination: PaginationModel | null
  
};

const initialState: ComPostState = {
  isLoadingComPosts: false,
  commissionPosts: [],
  commissionPost: null,
  categories: [],
  selectedCategory: undefined,
  pagination:{
    currentPage:1,
    pageSize:1,
    totalData:10,
    totalPage:1,
  }
};

export const comPostSlice = createSlice({
  name: "compost",
  initialState,
  reducers: {
    isLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoadingComPosts = action.payload;
    },
    fetchCommissionPosts: (state, action: PayloadAction<CommissionPost[]>) => {
      state.commissionPosts = action.payload;
    },
    fetchCommissionDetail: (state, action: PayloadAction<CommissionPostDetail>) => {
      state.commissionPost = action.payload;
    },
    fetchCategories: (state, action: PayloadAction<CategoryModel[]>) => {
      state.categories = action.payload;
    },
    setSelectedCategory:(state, action:PayloadAction<number>)=>{
      state.selectedCategory = action.payload;
    },
    setPagination:(state, action:PayloadAction<PaginationModel>)=>{
      state.pagination = action.payload;
    },
  },
});

export const {
  isLoading,
  fetchCommissionPosts,
  fetchCategories,
  setSelectedCategory,
  fetchCommissionDetail,
  setPagination,
} = comPostSlice.actions;

export const selectComPost = (state: RootState): ComPostState => state.compost;

export default comPostSlice.reducer;
