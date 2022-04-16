import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../core/utils/redux";
import { CategoryModel } from "../../data/models/category/category_model";
import { CommissionPost } from "../../data/models/compost_list/commission_post";

type ComPostState = {
  isLoadingComPosts: boolean;
  commissionPosts: CommissionPost[];
  categories: CategoryModel[];
  selectedCategory: number | undefined;
};

const initialState: ComPostState = {
  isLoadingComPosts: false,
  commissionPosts: [],
  categories: [],
  selectedCategory: undefined,
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
    fetchCategories: (state, action: PayloadAction<CategoryModel[]>) => {
      state.categories = action.payload;
    },
    setSelectedCategory:(state, action:PayloadAction<number>)=>{
      state.selectedCategory = action.payload;
    }
  },
});

export const { isLoading, fetchCommissionPosts, fetchCategories, setSelectedCategory } = comPostSlice.actions;

export const selectComPost = (state: RootState): ComPostState => state.compost;

export default comPostSlice.reducer;
