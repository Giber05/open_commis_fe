import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../core/utils/redux";
import { UploadedFileModel } from "../../../../../common/upload_file/data/models/uploaded_file_model";

type ConsumerMakeOrderState = {
  isLoading: boolean;
  isUploadFileLoading: boolean;
  uploadProgress: number;
  uploadedFilePath: UploadedFileModel | null;
};

const initialState: ConsumerMakeOrderState = {
  isLoading: false,
  uploadProgress: 0,
  isUploadFileLoading:false,
  uploadedFilePath: null,

};

export const consumerMakeOrderSlice = createSlice({
  name: "consumer_make_order",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsUploadFileLoading: (state, action: PayloadAction<boolean>) => {
      state.isUploadFileLoading = action.payload;
    },
    setUploadProgress: (state, action: PayloadAction<number>) => {
      state.uploadProgress = action.payload;
    },
    fetchUploadedFilePath: (state, action: PayloadAction<UploadedFileModel|null>) => {
      state.uploadedFilePath = action.payload;
    },
  },
});
export const { setIsLoading,setIsUploadFileLoading,setUploadProgress,fetchUploadedFilePath  } = consumerMakeOrderSlice.actions;
export const selectConsumerMakeOrder = (state: RootState): ConsumerMakeOrderState => state.consumer_make_order;

export default consumerMakeOrderSlice.reducer;