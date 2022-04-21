import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../core/utils/redux";
import PaginationModel from "../../../../../common/pagination/model/pagination_model";
import { CommissionPostDetail } from "../../../../../guest/commission_post/data/models/compost_detail/commission_post_detail";
import { OrderList } from "../../../order/data/models/order_list";
import IllustratorComposts from "../../data/models/illustrators_composts";

type ManageComPostState = {
  isLoadingComPost: boolean;
  isLoadingOrders: boolean;
  commissionPosts: IllustratorComposts[];
  commissionPostDetail: CommissionPostDetail | null
  orders: OrderList[];
  orderPagination: PaginationModel | null;

};

const initialState: ManageComPostState = {
  isLoadingComPost: false,
  isLoadingOrders:false,
  commissionPosts: [],
  commissionPostDetail: null,
  orders: [],
  orderPagination: {
    currentPage: 1,
    pageSize: 0,
    totalData: 0,
    totalPage: 1,
  },

};

export const manageComPostSlice = createSlice({
  name: "manage_compost",
  initialState,
  reducers: {
    isLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoadingComPost = action.payload;
    },
    setIsLoadingOrders: (state, action: PayloadAction<boolean>) => {
      state.isLoadingOrders = action.payload;
    },
    fetchCommissionPosts:(state, action:PayloadAction<IllustratorComposts[]>) =>{
      state.commissionPosts = action.payload;
    },
    fetchCommissionPostDetail: (state, action:PayloadAction<CommissionPostDetail>) =>{
      state.commissionPostDetail = action.payload;
    },
    fetchOrders: (state, action: PayloadAction<OrderList[]>) => {
      state.orders = action.payload;
    },
    setOrderPagination: (state, action: PayloadAction<PaginationModel>) => {
      state.orderPagination = action.payload;
    },
  },
});

export const { setIsLoadingOrders,isLoading, fetchCommissionPosts, fetchCommissionPostDetail,fetchOrders,setOrderPagination } = manageComPostSlice.actions;

export const selectManageComPosts = (state:RootState):ManageComPostState => state.manage_compost;

export default manageComPostSlice.reducer;

