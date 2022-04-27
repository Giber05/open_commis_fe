import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../core/utils/redux";

type AddReviewState = {
  isAddReviewLoading: boolean;
};

const initialState: AddReviewState = {
  isAddReviewLoading: false,
  
};

export const addReviewSlice = createSlice({
  name: "add_review",
  initialState,
  reducers: {
    setIsAddReviewLoading: (state, action: PayloadAction<boolean>) => {
      state.isAddReviewLoading = action.payload;
    },
    
  },
});
export const { setIsAddReviewLoading,  } = addReviewSlice.actions;
export const selectAddReview = (state: RootState): AddReviewState => state.add_review;

export default addReviewSlice.reducer;