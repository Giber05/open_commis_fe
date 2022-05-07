import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UploadFile } from "antd/lib/upload/interface";
import { RootState } from "../../../../../../core/utils/redux";
import { UploadedFileModel } from "../../../../../common/upload_file/data/models/uploaded_file_model";
import IllustratorComposts from "../../../manage_compost/data/models/illustrators_composts";
import { ManagePortofolio } from "../../data/models/manage_portfolio/portofolio";

type ManagePortofolioState = {
  isLoading: boolean;
  isLoadingUpdateProfile:boolean;
  illustratorProfile: ManagePortofolio | null;
  isUploadable:boolean;
  isUploadFileLoading: boolean;
  uploadedFilePath: UploadedFileModel | null;
  uploadProgress: number;
};

const initialState: ManagePortofolioState = {
  isLoading: false,
  isUploadable:true,
  isLoadingUpdateProfile:false,
  illustratorProfile: null,
  isUploadFileLoading:false,
  uploadedFilePath: null,
  uploadProgress: 0,
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
    
    setIsUploadable: (state, action: PayloadAction<boolean>) => {
      state.isUploadable = action.payload;
    },
    setIsUploadFileLoading: (state, action: PayloadAction<boolean>) => {
      state.isUploadFileLoading = action.payload;
    },
    fetchUploadedFilePath: (state, action: PayloadAction<UploadedFileModel | null>) => {
      state.uploadedFilePath = action.payload;
    },
    setUploadProgress: (state, action: PayloadAction<number>) => {
      state.uploadProgress = action.payload;
    },
  },

});
export const {fetchUploadedFilePath,setIsUploadFileLoading,setUploadProgress ,setIsUploadable, setIsLoading,setisLoadingUpdateProfile, fetchIllustratorProfile,  } = managePortofolioSlice.actions;
export const selectManagePortofolio = (state: RootState): ManagePortofolioState => state.manage_portofolio;
export default managePortofolioSlice.reducer;
