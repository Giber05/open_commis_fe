import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../core/utils/redux";
import { ManagePortofolio } from "../../data/models/portofolio";

type ManagePortofolioState = {
  isLoading:boolean;
  illustratorProfile:ManagePortofolio | null
}

const initialState:ManagePortofolioState = {
  isLoading :false,
  illustratorProfile:null,
}

export const managePortofolioSlice = createSlice({
  name:"manage_portofolio",
  initialState,
  reducers:{
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    fetchIllustratorProfile: (state, action: PayloadAction<ManagePortofolio>) => {
      state.illustratorProfile = action.payload;
    },
  }
});
export const { setIsLoading, fetchIllustratorProfile } = managePortofolioSlice.actions;
export const selectManagePortofolio = (state: RootState): ManagePortofolioState => state.manage_portofolio;
export default managePortofolioSlice.reducer;
