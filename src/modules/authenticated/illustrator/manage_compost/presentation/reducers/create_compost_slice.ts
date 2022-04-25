import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../core/utils/redux";
import { CategoryModel } from "../../../../../common/commission/data/models/category_model";
import { TagModel } from "../../../../../common/commission/data/models/tag_model";

type CreateComPostState = {
  tags: TagModel[];
  isLoading: boolean;
  isLoadingTag:boolean;
  categories:CategoryModel[]
};

const initialState: CreateComPostState = {
  tags: [],
  isLoading: false,
  isLoadingTag:false,
  categories:[]
};

export const createComPostSlice = createSlice({
  name: "create_compost",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsLoadingTag: (state, action: PayloadAction<boolean>) => {
      state.isLoadingTag = action.payload;
    },
    fetchTags: (state, action: PayloadAction<TagModel[]>) => {
      state.tags = action.payload;
    },
    fetchCategories: (state, action: PayloadAction<CategoryModel[]>) => {
      state.categories = action.payload;
    },
    mergeTags: (state, action: PayloadAction<TagModel>) => {
      state.tags = [...state.tags, action.payload];
    },
  },
});

export const { setIsLoading, fetchTags, mergeTags, setIsLoadingTag , fetchCategories} = createComPostSlice.actions;

export const selectCreateComPost = (state: RootState): CreateComPostState => state.create_compost;

export default createComPostSlice.reducer;
