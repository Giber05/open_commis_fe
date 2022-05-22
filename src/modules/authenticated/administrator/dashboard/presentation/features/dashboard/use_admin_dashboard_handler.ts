import { message } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import PaginationModel from "../../../../../../common/pagination/model/pagination_model";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { Transaction } from "../../../data/models/transaction/transaction";
import { TransactionSum } from "../../../data/models/transaction_sum/transaction_sum";
import { UserCount } from "../../../data/models/user_count/user_count";
import { GetTransactionList } from "../../../domain/usecases/get_transaction_list";
import { GetTransactionSummary } from "../../../domain/usecases/get_transaction_sum";
import { GetUserCount } from "../../../domain/usecases/get_user_count";
import { fetchTransactionList, fetchTransactionSum, fetchUserCount, selectAdminDashboard, setInitLoading, setIsGetTransactionsLoading, setIsGetTransactionSumLoading, setIsGetUserCountLoading, setPagination } from "../reducers/admin_dashboard_slice";

type AdminDashboardController = {
  initLoading: boolean;
  isGetTransactionsLoading: boolean;
  isGetUserCountLoading: boolean;
  transactionList: Transaction[];
  userCount:UserCount | null;
  isGetTransactionSumLoading: boolean;
  transactionSummary: TransactionSum[];
  getTransactionList: () => void;
  pagination: PaginationModel | null;
  onChangePage: ((page: number, pageSize: number) => void) | undefined;
  getTransactionSummary: () => void;
  getUserCount: () => void;
};
function useAdminDashboardHandler(): AdminDashboardController {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const getTransactionListUC = new GetTransactionList();
  const getTransactionSummaryUC = new GetTransactionSummary();
  const getUserCountUC = new GetUserCount();

  const { authUser } = useSelector(selectAuth);
  const { pagination, transactionList, initLoading, isGetTransactionsLoading, transactionSummary, isGetTransactionSumLoading,isGetUserCountLoading,userCount } = useSelector(selectAdminDashboard);

  const getTransactionList = () => {
    dispatch(setIsGetTransactionsLoading(true));
    setTimeout(async () => {
      const resource = await getTransactionListUC.execute({
        page: pagination?.currentPage == undefined ? 1 : pagination?.currentPage,
        limit: 5,
        token: authUser?.data.token!,
      });
      dispatch(setIsGetTransactionsLoading(false));
      dispatch(setInitLoading(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchTransactionList(value.data.data.transactions));
          dispatch(setPagination(value.data.data.pagination));
        },
        error: (error) => {
          message.error(error.exception.message);
        },
      });
    });
  };

  const onChangePage = (page: number, pageSize?: number) => {
    dispatch(setPagination({ currentPage: page, pageSize: pageSize }));
  };

  const getTransactionSummary = () => {
    dispatch(setIsGetTransactionSumLoading(true));
    setTimeout(async () => {
      const resource = await getTransactionSummaryUC.execute({
        year: 2022,
        token: authUser?.data.token!,
      });
      dispatch(setIsGetTransactionSumLoading(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchTransactionSum(value.data.data));
        },
        error: (error) => {
          message.error(error.exception.message);
        },
      });
    });
  };

  const getUserCount = () => {
    dispatch(setIsGetUserCountLoading(true));
    setTimeout(async () => {
      const resource = await getUserCountUC.execute(authUser?.data.token!);
      dispatch(setIsGetUserCountLoading(false));
      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchUserCount(value.data.data));
        },
        error: (error) => {
          message.error(error.exception.message);
        },
      });
    });
  };

  return {
    isGetTransactionsLoading,
    transactionList,
    getTransactionList,
    pagination,
    onChangePage,
    initLoading,
    getTransactionSummary,
    transactionSummary,
    isGetTransactionSumLoading,
    isGetUserCountLoading,
    userCount,
    getUserCount
  };
}
export default useAdminDashboardHandler;
