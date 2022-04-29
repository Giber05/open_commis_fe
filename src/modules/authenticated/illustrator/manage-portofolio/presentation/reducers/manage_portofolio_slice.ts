import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UploadFile } from "antd/lib/upload/interface";
import { RootState } from "../../../../../../core/utils/redux";
import IllustratorComposts from "../../../manage_compost/data/models/illustrators_composts";
import { ManagePortofolio } from "../../data/models/manage_portfolio/portofolio";

type ManagePortofolioState = {
  isLoading: boolean;
  isLoadingUpdateProfile:boolean;
  illustratorProfile: ManagePortofolio | null;
  illustratorComPosts: IllustratorComposts[];
  isUploadable:boolean
};

const initialState: ManagePortofolioState = {
  isLoading: false,
  isUploadable:true,
  isLoadingUpdateProfile:false,
  illustratorProfile: null,
  illustratorComPosts: [],
};

export const managePortofolioSlice = createSlice({
  name: "manage_portofolio",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setisLoadingUpdateProfile: (state, action: PayloadAction<boolean>) => {
      state.isLoadingUpdateProfile = action.payload;
    },
    fetchIllustratorProfile: (state, action: PayloadAction<ManagePortofolio>) => {
      state.illustratorProfile = action.payload;
    },
    fetchIllustratorComPost: (state, action: PayloadAction<IllustratorComposts[]>) => {
      state.illustratorComPosts = action.payload;
    },
    setIsUploadable: (state, action: PayloadAction<boolean>) => {
      state.isUploadable = action.payload;
    },
  },

});
export const { setIsUploadable, setIsLoading,setisLoadingUpdateProfile, fetchIllustratorProfile, fetchIllustratorComPost } = managePortofolioSlice.actions;
export const selectManagePortofolio = (state: RootState): ManagePortofolioState => state.manage_portofolio;
export default managePortofolioSlice.reducer;
