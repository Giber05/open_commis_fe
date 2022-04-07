import { configureStore } from "@reduxjs/toolkit";
import  manageComPostSlice  from "../../modules/authenticated/illustrator/manage_compost/presentation/reducers/manage_compost_slice";
import  authSlice  from "../../modules/guest/authentication/presentation/reducers/auth_reducer";
import middleware from "./middleware";
import  commonSlice  from "./reducers/common_reducer";

const store = configureStore({
    reducer: {
      common: commonSlice,
      auth: authSlice,
      manage_compost:manageComPostSlice,
    },
    middleware,
  });
  
  export default store;
