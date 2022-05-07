import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../core/utils/redux";
import { DestinationCode } from "../../data/models/destination_code";
import { IllustratorsBalance } from "../../data/models/illustrators_balance";
import { WithdrawalHistory } from "../../data/models/withdrawal_history";

type EarningState = {
  isLoadingBalance:boolean;
  isDestinationCodeLoading:boolean;
  isWithdrawalHistoryLoading:boolean;
  illustratorsBalance:IllustratorsBalance|null;
  destinationCode: DestinationCode[]
  withdrawalHistory: WithdrawalHistory[]
}

const initialState :EarningState = {
  isLoadingBalance:false,
  isDestinationCodeLoading:false,
  isWithdrawalHistoryLoading:false,
  illustratorsBalance:null,
  destinationCode:[],
  withdrawalHistory:[],
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
    setIsWithdrawalHistoryLoading: (state, action: PayloadAction<boolean>) => {
      state.isWithdrawalHistoryLoading = action.payload;
    },
    fetchIllustratorsBalance: (state, action: PayloadAction<IllustratorsBalance>) => {
      state.illustratorsBalance = action.payload;
    },
    fetchDestinationCode: (state, action: PayloadAction<DestinationCode[]>) => {
      state.destinationCode = action.payload;
    },
    fetchWithdrawalHistory: (state, action: PayloadAction<WithdrawalHistory[]>) => {
      state.withdrawalHistory = action.payload;
    },
  },
});

export const {
  setIsLoadingBalance,
  fetchIllustratorsBalance,
  setIsDestinationCodeLoading,
  fetchDestinationCode,
  fetchWithdrawalHistory,
  setIsWithdrawalHistoryLoading,
 
} = earningSlice.actions;

export const selectEarning = (state: RootState): EarningState => state.earning;

export default earningSlice.reducer;