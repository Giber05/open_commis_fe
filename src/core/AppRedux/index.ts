import { configureStore } from "@reduxjs/toolkit";
import middleware from "./middleware";
import  commonSlice  from "./reducers/common_reducer";

const store = configureStore({
    reducer:{
        common:commonSlice,

    },
    middleware
});
export default store;
