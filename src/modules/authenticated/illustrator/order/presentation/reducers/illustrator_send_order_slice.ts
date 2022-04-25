import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../core/utils/redux";
import { UploadedFileModel } from "../../../../../common/upload_file/data/models/uploaded_file_model";

type IllustratorSendOrderState = {
  isSendOrderLoading: boolean;
  isUploadFileLoading: boolean;
  uploadedFilePath: UploadedFileModel | null;
  uploadProgress: number;
};

const initialState: IllustratorSendOrderState = {
  isSendOrderLoading: false,
  isUploadFileLoading:false,
  uploadedFilePath: null,
  uploadProgress: 0,
};

export const illustratorSendOrderSlice = createSlice({
  name: "illustrator_send_order",
  initialState,
  reducers: {
    setIsSendOrderLoading: (state, action: PayloadAction<boolean>) => {
      state.isSendOrderLoading = action.payload;
    },
    setIsUploadFileLoading: (state, action: PayloadAction<boolean>) => {
      state.isUploadFileLoading = action.payload;
    },
    fetchUploadedFilePath: (state, action: PayloadAction<UploadedFileModel>) => {
      state.uploadedFilePath = action.payload;
    },
    setUploadProgress: (state, action: PayloadAction<number>) => {
      state.uploadProgress = action.payload;
    },
  },
});
export const { setIsUploadFileLoading,fetchUploadedFilePath, setUploadProgress, setIsSendOrderLoading } = illustratorSendOrderSlice.actions;
export const selectSendOrder = (state: RootState): IllustratorSendOrderState => state.illustrator_send_order;

export default illustratorSendOrderSlice.reducer;
