import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../core/utils/redux";

type ConsumerMakeOrderState = {
  isLoading: boolean;
};

const initialState: ConsumerMakeOrderState = {
  isLoading: false,
  
};

export const consumerMakeOrderSlice = createSlice({
  name: "consumer_make_order",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    
  },
});
export const { setIsLoading,  } = consumerMakeOrderSlice.actions;
export const selectConsumerMakeOrder = (state: RootState): ConsumerMakeOrderState => state.consumer_make_order;

export default consumerMakeOrderSlice.reducer;