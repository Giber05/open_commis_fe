import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../core/utils/redux";
import PaginationModel from "../../../../../common/pagination/model/pagination_model";
import { OrderList } from "../../data/models/order_list";

type ComPostState = {
  isLoading: boolean;
  orders: OrderList[];
  pagination: PaginationModel | null;
};

const initialState: ComPostState = {
  isLoading: false,
  orders: [],
  pagination: {
    currentPage: 1,
    pageSize: 0,
    totalData: 0,
    totalPage: 1,
  },
};

export const illustratorOrderSlice = createSlice({
  name: "illustrator_order",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    fetchOrders: (state, action: PayloadAction<OrderList[]>) => {
      state.orders = action.payload;
    },
    setPagination: (state, action: PayloadAction<PaginationModel>) => {
      state.pagination = action.payload;
    },
  },
});
export const {
  setIsLoading,
  fetchOrders,
  setPagination,
} = illustratorOrderSlice.actions;
export const selectIllustratorOrder = (state: RootState): ComPostState => state.illustrator_order

export default illustratorOrderSlice.reducer;


