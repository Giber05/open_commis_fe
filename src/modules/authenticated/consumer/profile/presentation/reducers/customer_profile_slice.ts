import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../core/utils/redux";
import ConsumerModel from "../../../../../common/authentication/data/model/consumer_model";

type ConsumerProfileState = {
  isProfileLoading:boolean;
  consumer:ConsumerModel|null;

}

const initialState :ConsumerProfileState = {
  isProfileLoading:false,
  consumer:null
}

export const consumerProfileSlice = createSlice({
  name: "consumer_profile",
  initialState,
  reducers: {
    setIsProfileLoading: (state, action: PayloadAction<boolean>) => {
      state.isProfileLoading = action.payload;
    },
    
    fetchConsumerProfile: (state, action: PayloadAction<ConsumerModel>) => {
      state.consumer = action.payload;
    },
   
  },
});

export const {
  setIsProfileLoading,
  fetchConsumerProfile,
 
} = consumerProfileSlice.actions;

export const selectConsumerProfile = (state: RootState): ConsumerProfileState => state.consumer_profile;

export default consumerProfileSlice.reducer;