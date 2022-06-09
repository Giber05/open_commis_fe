import { City } from "../../data/models/manage_account/city";
import { Province } from "../../data/models/manage_account/province";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../core/utils/redux";
import { UploadedFileModel } from "../../../../../common/upload_file/data/models/uploaded_file_model";

type ManageAccountSlice = {
  isGetCitiesLoading: boolean;
  isGetProvincesLoading: boolean;
  cities: City[];
  provinces: Province[];
  selectedProvince: number | null;
  // isUploadable:boolean;
  isUploadFileLoading: boolean;
  uploadedIdCardFilePath: UploadedFileModel | null;
  uploadedSelfieCardFilePath: UploadedFileModel | null;
  uploadProgress: number;
};

const initialState: ManageAccountSlice = {
  isGetCitiesLoading: false,
  // isUploadable:true,
  isGetProvincesLoading: false,
  cities: [],
  provinces: [],
  selectedProvince: null,
  isUploadFileLoading: false,
  uploadedIdCardFilePath: null,
  uploadedSelfieCardFilePath: null,
  uploadProgress: 0,
};

export const manageAccountSlice = createSlice({
  name: "manage_account",
  initialState,
  reducers: {
    setIsGetCitiesLoading: (state, action: PayloadAction<boolean>) => {
      state.isGetCitiesLoading = action.payload;
    },
    setIsGetProvincesLoading: (state, action: PayloadAction<boolean>) => {
      state.isGetProvincesLoading = action.payload;
    },
    fetchCities: (state, action: PayloadAction<City[]>) => {
      state.cities = action.payload;
    },
    fetchProvinces: (state, action: PayloadAction<Province[]>) => {
      state.provinces = action.payload;
    },
    setSelectedProvince: (state, action: PayloadAction<number>) => {
      state.selectedProvince = action.payload;
    },

    // setIsUploadable: (state, action: PayloadAction<boolean>) => {
    //   state.isUploadable = action.payload;
    // },
    setIsUploadFileLoading: (state, action: PayloadAction<boolean>) => {
      state.isUploadFileLoading = action.payload;
    },
    fetchUploadedIdCardFilePath: (state, action: PayloadAction<UploadedFileModel | null>) => {
      state.uploadedIdCardFilePath = action.payload;
    },
    fetchUploadedSelfieCardFilePath: (state, action: PayloadAction<UploadedFileModel | null>) => {
      state.uploadedSelfieCardFilePath = action.payload;
    },
    setUploadProgress: (state, action: PayloadAction<number>) => {
      state.uploadProgress = action.payload;
    },
  },
});
export const { setIsGetCitiesLoading, setIsGetProvincesLoading, fetchCities, fetchProvinces, setSelectedProvince, fetchUploadedIdCardFilePath, fetchUploadedSelfieCardFilePath, setIsUploadFileLoading ,setUploadProgress} = manageAccountSlice.actions;
export const selectManageAccount = (state: RootState): ManageAccountSlice => state.manage_account;
export default manageAccountSlice.reducer;
