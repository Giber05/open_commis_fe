import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../core/utils/redux";
import { IllustratorsBalance } from "../../data/models/illustrators_balance";

type EarningState = {
  isLoadingBalance:boolean;
  illustratorsBalance:IllustratorsBalance|null;

}

const initialState :EarningState = {
  isLoadingBalance:false,
  illustratorsBalance:null
}

export const earningSlice = createSlice({
  name: "earning",
  initialState,
  reducers: {
    setIsLoadingBalance: (state, action: PayloadAction<boolean>) => {
      state.isLoadingBalance = action.payload;
    },
    
    fetchIllustratorsBalance: (state, action: PayloadAction<IllustratorsBalance>) => {
      state.illustratorsBalance = action.payload;
    },
   
  },
});

export const {
  setIsLoadingBalance,
  fetchIllustratorsBalance,
 
} = earningSlice.actions;

export const selectEarning = (state: RootState): EarningState => state.earning;

export default earningSlice.reducer;