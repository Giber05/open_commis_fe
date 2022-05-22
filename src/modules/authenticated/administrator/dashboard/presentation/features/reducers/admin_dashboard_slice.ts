import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../../core/utils/redux";
import PaginationModel from "../../../../../../common/pagination/model/pagination_model";
import { Transaction } from "../../../data/models/transaction/transaction";
import { TransactionSum } from "../../../data/models/transaction_sum/transaction_sum";
import { UserCount } from "../../../data/models/user_count/user_count";


type AdminDashboardState   = {
  initLoading: boolean;
  isGetTransactionsLoading: boolean;
  isGetUserCountLoading: boolean;
  isGetTransactionSumLoading: boolean;
  transactionList: Transaction[];
  transactionSummary:TransactionSum[];
  userCount:UserCount | null;
  pagination: PaginationModel | null;
};

const initialState: AdminDashboardState  = {
  isGetTransactionsLoading: false,
  isGetTransactionSumLoading: false,
  isGetUserCountLoading: false,
  initLoading: true,
  transactionList: [],
  transactionSummary: [],
  userCount:null,
  pagination: {
    currentPage: 1,
    pageSize: 0,
    totalData: 0,
    totalPage: 0,
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
    setIsGetTransactionSumLoading: (state, action: PayloadAction<boolean>) => {
      state.isGetTransactionSumLoading = action.payload;
    },
    setIsGetUserCountLoading: (state, action: PayloadAction<boolean>) => {
      state.isGetUserCountLoading = action.payload;
    },
    
    fetchTransactionSum: (state, action: PayloadAction<TransactionSum[]>) => {
      state.transactionSummary = action.payload;
    },
    fetchTransactionList: (state, action: PayloadAction<Transaction[]>) => {
      state.transactionList = action.payload;
    },
    fetchUserCount: (state, action: PayloadAction<UserCount>) => {
      state.userCount = action.payload;
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
  fetchTransactionSum,
  setIsGetTransactionSumLoading,
  setIsGetUserCountLoading,
  fetchUserCount,
} = adminDashboardSlice.actions;

export const selectAdminDashboard = (state: RootState): AdminDashboardState   => state.admin_dashboard;

export default adminDashboardSlice.reducer;
