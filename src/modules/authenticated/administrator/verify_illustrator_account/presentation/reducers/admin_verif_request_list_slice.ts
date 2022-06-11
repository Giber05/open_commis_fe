import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../core/utils/redux";
import IlustratorModel from "../../../../../common/authentication/data/model/ilustrator_model";


type AdminVerifRequestListState = {
  initLoading: boolean,
  isLoadingVerifRequests: boolean;
  submittedIllustrators: IlustratorModel[];
};

const initialState: AdminVerifRequestListState = {
  isLoadingVerifRequests: false,
  initLoading:true,
  submittedIllustrators: [],
};

export const adminVerifRequestListSlice = createSlice({
  name: "admin_verif_request_list",
  initialState,
  reducers: {
    setInitLoading: (state, action: PayloadAction<boolean>) => {
      state.initLoading = action.payload;
    },
    setIsLoadingVerifRequests: (state, action: PayloadAction<boolean>) => {
      state.isLoadingVerifRequests = action.payload;
    },
    fetchsSubmittedIllustrators: (state, action: PayloadAction<IlustratorModel[]>) => {
      state.submittedIllustrators = action.payload;
    },
  },
});

export const {
  setIsLoadingVerifRequests,
  fetchsSubmittedIllustrators,
  setInitLoading
} = adminVerifRequestListSlice.actions;

export const selectAdminVerifRequestList = (state: RootState): AdminVerifRequestListState => state.admin_verif_request_list;

export default adminVerifRequestListSlice.reducer;
