import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../../core/utils/redux";
import PaginationModel from "../../../../../../common/pagination/model/pagination_model";
import { Transaction } from "../../../data/models/transaction/transaction";


type AdminDashboardState   = {
  initLoading: boolean;
  isGetTransactionsLoading: boolean;
  transactionList: Transaction[];
  pagination: PaginationModel | null;
};

const initialState: AdminDashboardState  = {
  isGetTransactionsLoading: false,
  initLoading: true,
  transactionList: [],
  pagination: {
    currentPage: 1,
    pageSize: 1,
    totalData: 10,
    totalPage: 1,
  },
};

export const adminDashboardSlice = createSlice({
  name: "admin_dashboard",
  initialState,
  reducers: {
    setInitLoading: (state, action: PayloadAction<boolean>) => {
      state.initLoading = action.payload;
    },
    setIsGetTransactionsLoading: (state, action: PayloadAction<boolean>) => {
      state.isGetTransactionsLoading = action.payload;
    },
    
    fetchTransactionList: (state, action: PayloadAction<Transaction[]>) => {
      state.transactionList = action.payload;
    },
    setPagination: (state, action: PayloadAction<PaginationModel>) => {
      state.pagination = action.payload;
    },
  
  },
});

export const {
  setIsGetTransactionsLoading,
  fetchTransactionList,
  setPagination,
  setInitLoading,
} = adminDashboardSlice.actions;

export const selectAdminDashboard = (state: RootState): AdminDashboardState   => state.admin_dashboard;

export default adminDashboardSlice.reducer;
