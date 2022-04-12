import { configureStore } from "@reduxjs/toolkit";
import  manageComPostSlice  from "../../modules/authenticated/illustrator/manage_compost/presentation/reducers/manage_compost_slice";
import  authSlice  from "../../modules/guest/authentication/presentation/reducers/auth_reducer";
import comPostSlice  from "../../modules/guest/commission_post/presentation/reducers/compost_slice";
import middleware from "./middleware";
import  commonSlice  from "./reducers/common_reducer";

const store = configureStore({
    reducer: {
      common: commonSlice,
      auth: authSlice,
      manage_compost:manageComPostSlice,
      compost:comPostSlice,
    },
    middleware,
  });
  
  export default store;
