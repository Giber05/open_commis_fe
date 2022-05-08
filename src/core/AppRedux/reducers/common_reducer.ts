import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NAV_STYLE_FIXED } from "../../constants/theme_constants";
import { RootState } from "../../utils/redux";

type CommonState = {
  isMobile: boolean;
  width: number;
  error: string;
  navStyle: string;
  navCollapsed: boolean;
  consumerCurrentMenu:string;
};

const initialState: CommonState = {
  navStyle: NAV_STYLE_FIXED,
  isMobile: false,
  navCollapsed: false,
  width:window.innerWidth,
  error:"",
  consumerCurrentMenu:"compost"
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
    onNavStyleChange: (state, action: PayloadAction<string>) => {
      state.navStyle = action.payload;
    },
    toggleCollapsedSideNav: (state, action: PayloadAction<boolean>) => {
      state.navCollapsed = action.payload;
    },
    setConsumerCurrentMenu: (state, action: PayloadAction<string>) => {
      state.consumerCurrentMenu = action.payload;
    },
  },
});

export const {
  setIsMobile,
  updateWindowWidth,
  fetchError,
  onNavStyleChange,
  toggleCollapsedSideNav,
  setConsumerCurrentMenu
} = commonSlice.actions;

export const selectCommon = (state:RootState):CommonState=>state.common;

export default commonSlice.reducer;

