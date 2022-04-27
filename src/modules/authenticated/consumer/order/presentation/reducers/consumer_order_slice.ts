import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../core/utils/redux";
import PaginationModel from "../../../../../common/pagination/model/pagination_model";
import { OrderList } from "../../../../../common/order/data/models/order_list";
import { ConsumerOrderDetail } from "../../data/models/order/order_detail/consumer_detail_order";

type ConsumerOrderState = {
  initLoading: boolean,
  isLoading: boolean;
  isLoadingChangeOrderStatus:boolean;
  isFinishOrderModalVisible: boolean;
  isPaymentModalVisible: boolean;
  orders: OrderList[];
  pagination: PaginationModel | null;
  orderDetail: ConsumerOrderDetail | null;
};

const initialState: ConsumerOrderState = {
  initLoading:true,
  isLoadingChangeOrderStatus:false,
  isLoading: false,
  isFinishOrderModalVisible: false,
  isPaymentModalVisible: false,
  orders: [],
  pagination: {
    currentPage: 1,
    pageSize: 0,
    totalData: 0,
    totalPage: 1,
  },
  orderDetail: null,
};

export const consumerOrderSlice = createSlice({
  name: "consumer_order",
  initialState,
  reducers: {
    setInitLoading: (state, action: PayloadAction<boolean>) => {
      state.initLoading = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsLoadingChangeOrderStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoadingChangeOrderStatus = action.payload;
    },
    setIsFinishOrderModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isFinishOrderModalVisible = action.payload;
    },
    setIsPaymentModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isPaymentModalVisible = action.payload;
    },
    fetchOrders: (state, action: PayloadAction<OrderList[]>) => {
      state.orders = action.payload;
    },
    setPagination: (state, action: PayloadAction<PaginationModel>) => {
      state.pagination = action.payload;
    },
    fetchOrderDetail: (state, action: PayloadAction<ConsumerOrderDetail>) => {
      state.orderDetail = action.payload;
    },
  },
});
export const { setIsLoadingChangeOrderStatus,setInitLoading,setIsLoading, fetchOrders, setPagination, fetchOrderDetail, setIsFinishOrderModalVisible, setIsPaymentModalVisible } = consumerOrderSlice.actions;
export const selectConsumerOrder = (state: RootState): ConsumerOrderState => state.consumer_order;

export default consumerOrderSlice.reducer;
