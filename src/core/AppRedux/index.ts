import { configureStore } from "@reduxjs/toolkit";
import  authSlice  from "../../modules/guest/authentication/presentation/reducers/auth_reducer";
import middleware from "./middleware";
import  commonSlice  from "./reducers/common_reducer";

const store = configureStore({
    reducer: {
      common: commonSlice,
      auth: authSlice,
    },
    middleware,
  });
  
  export default store;
