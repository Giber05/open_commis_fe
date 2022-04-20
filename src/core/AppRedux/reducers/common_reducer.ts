import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../utils/redux";

type CommonState = {
  isMobile: boolean;
  width: number;
  error: string;
};

const initialState: CommonState = {
  isMobile: false,
  width:window.innerWidth,
  error:"",
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
    updateWindowWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload;
    },
    fetchError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setIsMobile,
  updateWindowWidth,
  fetchError
} = commonSlice.actions;

export const selectCommon = (state:RootState):CommonState=>state.common;

export default commonSlice.reducer;

