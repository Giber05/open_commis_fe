import { message } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import PaginationModel from "../../../../../../common/pagination/model/pagination_model";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { Transaction } from "../../../data/models/transaction/transaction";
import { GetTransactionList } from "../../../domain/usecases/get_transaction_list";
import { fetchTransactionList, selectAdminDashboard, setInitLoading, setIsGetTransactionsLoading, setPagination } from "../reducers/admin_dashboard_slice";

type AdminDashboardController = {
  initLoading: boolean;
  isGetTransactionsLoading: boolean;
  transactionList: Transaction[];
  getTransactionList: () => void;
  pagination: PaginationModel | null;
  onChangePage: ((page: number, pageSize: number) => void) | undefined;
};
function useAdminDashboardHandler(): AdminDashboardController {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const getTransactionListUC = new GetTransactionList();
  const { authUser } = useSelector(selectAuth);
  const { pagination, transactionList, initLoading, isGetTransactionsLoading, } = useSelector(selectAdminDashboard);

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

 

  return {
    isGetTransactionsLoading,
    transactionList,
    getTransactionList,
    pagination,
    onChangePage,
    initLoading,
  };
}
export default useAdminDashboardHandler;
