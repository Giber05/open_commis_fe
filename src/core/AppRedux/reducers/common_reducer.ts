import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../utils/redux";

type CommonState = {
  isMobile: boolean;
  width: number;
};

const initialState: CommonState = {
  isMobile: false,
  width:window.innerWidth,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    activeBotNav: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
    updateWindowWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload;
    },
  },
});

export const {
  activeBotNav,
  updateWindowWidth,
} = commonSlice.actions;

export const selectCommon = (state:RootState):CommonState=>state.common;

export default commonSlice.reducer;

