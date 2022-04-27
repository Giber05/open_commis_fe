import { configureStore } from "@reduxjs/toolkit";
import  consumerMakeOrderSlice  from "../../modules/authenticated/consumer/order/presentation/reducers/consumer_make_order_slice";
import  consumerOrderSlice  from "../../modules/authenticated/consumer/order/presentation/reducers/consumer_order_slice";
import  addReviewSlice  from "../../modules/authenticated/consumer/review/presentation/reducers/add_review_slice";
import  earningSlice  from "../../modules/authenticated/illustrator/earning/presentation/reducers/earning_slice";
import  managePortofolioSlice  from "../../modules/authenticated/illustrator/manage-portofolio/presentation/reducers/manage_portofolio_slice";
import  createComPostSlice  from "../../modules/authenticated/illustrator/manage_compost/presentation/reducers/create_compost_slice";
import  editComPostSlice  from "../../modules/authenticated/illustrator/manage_compost/presentation/reducers/edit_compost_slice";
import illustratorsComPostSlice  from "../../modules/authenticated/illustrator/manage_compost/presentation/reducers/illustrators_compost_slice";
import  illustratorOrderSlice  from "../../modules/authenticated/illustrator/order/presentation/reducers/illustrator_order_slice";
import  illustratorSendOrderSlice  from "../../modules/authenticated/illustrator/order/presentation/reducers/illustrator_send_order_slice";
import authSlice from "../../modules/guest/authentication/presentation/reducers/auth_reducer";
import comPostSlice from "../../modules/guest/commission_post/presentation/reducers/compost_slice";
import illustratorsPortofolioSlice from "../../modules/guest/illustrators_portofolio/presentation/reducers/illustrators_portofolio_slice";
import middleware from "./middleware";
import commonSlice from "./reducers/common_reducer";

const store = configureStore({
  reducer: {
    common: commonSlice,
    auth: authSlice,
    illustrators_compost: illustratorsComPostSlice,
    create_compost: createComPostSlice,
    edit_compost: editComPostSlice,
    compost: comPostSlice,
    illustrators_portofolio: illustratorsPortofolioSlice,
    manage_portofolio:managePortofolioSlice,
    illustrator_order:illustratorOrderSlice,
    illustrator_send_order:illustratorSendOrderSlice,
    earning: earningSlice,
    consumer_order:consumerOrderSlice,
    consumer_make_order:consumerMakeOrderSlice,
    add_review:addReviewSlice,
  },
  middleware,
});

export default store;
