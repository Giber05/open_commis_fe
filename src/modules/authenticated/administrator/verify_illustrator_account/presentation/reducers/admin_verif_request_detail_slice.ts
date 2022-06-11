import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../core/utils/redux";
import { VerificationSubmissionDetail } from "../../data/models/verification_submission_detail";

type AdminVerifRequestDetailState = {
  isActionLoading: boolean,
  isGetVerifRequestDetailLoading: boolean;
  verificationRequestDetail: VerificationSubmissionDetail | null;
  
};

const initialState: AdminVerifRequestDetailState = {
  isGetVerifRequestDetailLoading: false,
  isActionLoading:false,
  verificationRequestDetail: null,
 
};

export const adminVerificationRequestDetailSlice = createSlice({
  name: "admin_verif_request_detail",
  initialState,
  reducers: {
    setIsActionLoading: (state, action: PayloadAction<boolean>) => {
      state.isActionLoading = action.payload;
    },
    setIsGetVerifRequestDetailLoading: (state, action: PayloadAction<boolean>) => {
      state.isGetVerifRequestDetailLoading = action.payload;
    },
    fetchVerifRequestDetail: (state, action: PayloadAction<VerificationSubmissionDetail>) => {
      state.verificationRequestDetail = action.payload;
    },
  },
});

export const {
  setIsGetVerifRequestDetailLoading,
  fetchVerifRequestDetail,
  setIsActionLoading
} = adminVerificationRequestDetailSlice.actions;

export const selectAdminVerifRequestDetail = (state: RootState): AdminVerifRequestDetailState => state.admin_verif_request_detail;

export default adminVerificationRequestDetailSlice.reducer;