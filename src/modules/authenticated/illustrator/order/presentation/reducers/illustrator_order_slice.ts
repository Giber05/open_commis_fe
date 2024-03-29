import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../core/utils/redux";
import PaginationModel from "../../../../../common/pagination/model/pagination_model";
import { IllustratorOrderDetail } from "../../data/models/illustrator_detail_order";
import { OrderList } from "../../../../../common/order/data/models/order_list";

type IllustratorOrderState = {
  isLoading: boolean;
  isConfirmOrderModalVisible:boolean;
  isSendOrderModalVisible:boolean;
  orders: OrderList[];
  pagination: PaginationModel | null;
  orderDetail:IllustratorOrderDetail | null
};

const initialState: IllustratorOrderState = {
  isLoading: false,
  isConfirmOrderModalVisible:false,
  isSendOrderModalVisible:false,
  orders: [],
  pagination: {
    currentPage: 1,
    pageSize: 0,
    totalData: 0,
    totalPage: 1,
  },
  orderDetail:null
};

export const illustratorOrderSlice = createSlice({
  name: "illustrator_order",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsConfirmOrderModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isConfirmOrderModalVisible = action.payload;
    },
    setIsSendOrderModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isSendOrderModalVisible = action.payload;
    },
    fetchOrders: (state, action: PayloadAction<OrderList[]>) => {
      state.orders = action.payload;
    },
    setPagination: (state, action: PayloadAction<PaginationModel>) => {
      state.pagination = action.payload;
    },
    fetchOrderDetail: (state, action: PayloadAction<IllustratorOrderDetail>) => {
      state.orderDetail = action.payload;
    },
    
  },
});
export const {
  setIsLoading,
  fetchOrders,
  setPagination,
  fetchOrderDetail,
  setIsConfirmOrderModalVisible,
  setIsSendOrderModalVisible,
} = illustratorOrderSlice.actions;
export const selectIllustratorOrder = (state: RootState): IllustratorOrderState => state.illustrator_order

export default illustratorOrderSlice.reducer;


