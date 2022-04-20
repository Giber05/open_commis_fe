import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../core/utils/redux";
import IllustratorComposts from "../../../manage_compost/data/models/illustrators_composts";
import { ManagePortofolio } from "../../data/models/portofolio";

type ManagePortofolioState = {
  isLoading:boolean;
  illustratorProfile:ManagePortofolio | null;
  illustratorComPosts:IllustratorComposts[] ;
}

const initialState:ManagePortofolioState = {
  isLoading :false,
  illustratorProfile:null,
  illustratorComPosts:[],
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
    fetchIllustratorComPost: (state, action: PayloadAction<IllustratorComposts[]>) => {
      state.illustratorComPosts = action.payload;
    },
  }
});
export const { setIsLoading, fetchIllustratorProfile, fetchIllustratorComPost } = managePortofolioSlice.actions;
export const selectManagePortofolio = (state: RootState): ManagePortofolioState => state.manage_portofolio;
export default managePortofolioSlice.reducer;