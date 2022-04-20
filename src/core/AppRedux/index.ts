import { configureStore } from "@reduxjs/toolkit";
import  managePortofolioSlice  from "../../modules/authenticated/illustrator/manage-portofolio/presentation/reducers/manage_portofolio_slice";
import manageComPostSlice from "../../modules/authenticated/illustrator/manage_compost/presentation/reducers/manage_compost_slice";
import authSlice from "../../modules/guest/authentication/presentation/reducers/auth_reducer";
import comPostSlice from "../../modules/guest/commission_post/presentation/reducers/compost_slice";
import illustratorsPortofolioSlice from "../../modules/guest/illustrators_portofolio/presentation/reducers/illustrators_portofolio_slice";
import middleware from "./middleware";
import commonSlice from "./reducers/common_reducer";

const store = configureStore({
  reducer: {
    common: commonSlice,
    auth: authSlice,
    manage_compost: manageComPostSlice,
    compost: comPostSlice,
    illustrators_portofolio: illustratorsPortofolioSlice,
    manage_portofolio:managePortofolioSlice
  },
  middleware,
});

export default store;
