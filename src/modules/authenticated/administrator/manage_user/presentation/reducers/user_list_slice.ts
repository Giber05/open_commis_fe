import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../../core/utils/redux";
import PaginationModel from "../../../../../common/pagination/model/pagination_model";
import { UserList } from "../../data/models/user_list/user_list";


type AdminUserListState = {
  initLoading: boolean;
  isGetUsersLoading: boolean;
  userList: UserList[];
  pagination: PaginationModel | null;
};

const initialState: AdminUserListState = {
  isGetUsersLoading: false,
  initLoading: true,
  userList: [],
  pagination: {
    currentPage: 1,
    pageSize: 1,
    totalData: 10,
    totalPage: 1,
  },
};

export const adminUserListSlice = createSlice({
  name: "admin_user_list",
  initialState,
  reducers: {
    setInitLoading: (state, action: PayloadAction<boolean>) => {
      state.initLoading = action.payload;
    },
    setIsGetUsersLoading: (state, action: PayloadAction<boolean>) => {
      state.isGetUsersLoading = action.payload;
    },
    fetchUserList: (state, action: PayloadAction<UserList[]>) => {
      state.userList = action.payload;
    },

    setPagination: (state, action: PayloadAction<PaginationModel>) => {
      state.pagination = action.payload;
    },
  },
});

export const {
  setIsGetUsersLoading,
  fetchUserList,
  setPagination,
  setInitLoading,
} = adminUserListSlice.actions;

export const selectAdminUserList = (state: RootState): AdminUserListState => state.admin_user_list;

export default adminUserListSlice.reducer;
