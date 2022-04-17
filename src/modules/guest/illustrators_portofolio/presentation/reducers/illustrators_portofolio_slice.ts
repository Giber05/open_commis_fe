import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../core/utils/redux";
import { IllustratorsPortofolio } from "../../data/models/illustrators_portofolio";

type IllustratorsPortofolioState = {
  isLoadingPortofolio: boolean;
  illustratorsPortofolio: IllustratorsPortofolio | null;
};

const initialState: IllustratorsPortofolioState = {
  isLoadingPortofolio: false,
  illustratorsPortofolio: null,
};

export const illustratorsPortofolioSlice = createSlice({
  name: "illustrators_portofolio",
  initialState,
  reducers: {
    setIsLoadingPortofolio: (state, action: PayloadAction<boolean>) => {
      state.isLoadingPortofolio = action.payload;
    },
    fetchIllustratorsPortofolio: (state, action: PayloadAction<IllustratorsPortofolio>) => {
      state.illustratorsPortofolio = action.payload;
    },
  },
});

export const { setIsLoadingPortofolio, fetchIllustratorsPortofolio } = illustratorsPortofolioSlice.actions;

export const selectIllustratorsPortofolio = (state: RootState): IllustratorsPortofolioState => state.illustrators_portofolio;

export default illustratorsPortofolioSlice.reducer;
