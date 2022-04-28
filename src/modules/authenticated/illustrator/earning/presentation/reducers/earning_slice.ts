import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../core/utils/redux";
import { DestinationCode } from "../../data/models/destination_code";
import { IllustratorsBalance } from "../../data/models/illustrators_balance";

type EarningState = {
  isLoadingBalance:boolean;
  isDestinationCodeLoading:boolean;
  illustratorsBalance:IllustratorsBalance|null;
  destinationCode: DestinationCode[]
}

const initialState :EarningState = {
  isLoadingBalance:false,
  isDestinationCodeLoading:false,
  illustratorsBalance:null,
  destinationCode:[]
}

export const earningSlice = createSlice({
  name: "earning",
  initialState,
  reducers: {
    setIsLoadingBalance: (state, action: PayloadAction<boolean>) => {
      state.isLoadingBalance = action.payload;
    },
    setIsDestinationCodeLoading: (state, action: PayloadAction<boolean>) => {
      state.isDestinationCodeLoading = action.payload;
    },
    
    fetchIllustratorsBalance: (state, action: PayloadAction<IllustratorsBalance>) => {
      state.illustratorsBalance = action.payload;
    },
    fetchDestinationCode: (state, action: PayloadAction<DestinationCode[]>) => {
      state.destinationCode = action.payload;
    },
   
  },
});

export const {
  setIsLoadingBalance,
  fetchIllustratorsBalance,
  setIsDestinationCodeLoading,fetchDestinationCode
 
} = earningSlice.actions;

export const selectEarning = (state: RootState): EarningState => state.earning;

export default earningSlice.reducer;