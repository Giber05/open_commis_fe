import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../core/utils/redux";
import { ReviewList } from "../../../../../common/reviews/data/models/review_list";



type AdminManageReviewState = {
  isReviewLoading: boolean;
  isDeleteReviewLoading: boolean;
  reviews: ReviewList[];
  
};

const initialState: AdminManageReviewState = {
  isReviewLoading: false,
  isDeleteReviewLoading:false,
  reviews: [],
 
};

export const adminManageReviewSlice = createSlice({
  name: "admin_manage_review",
  initialState,
  reducers: {
  
    setIsReviewLoading: (state, action: PayloadAction<boolean>) => {
      state.isReviewLoading = action.payload;
    },
    setIsDeleteReviewLoading: (state, action: PayloadAction<boolean>) => {
      state.isDeleteReviewLoading = action.payload;
    },
  
    fetchReviews: (state, action: PayloadAction<ReviewList[]>) => {
      state.reviews = action.payload;
    },

  },
});

export const {
  setIsReviewLoading,
  setIsDeleteReviewLoading,
  fetchReviews,
} = adminManageReviewSlice.actions;

export const selectAdminManageReview = (state: RootState): AdminManageReviewState => state.admin_manage_review;

export default adminManageReviewSlice.reducer;
