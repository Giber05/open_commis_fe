import { useSelector } from "react-redux";
import { fetchError } from "../../../../../../../core/AppRedux/reducers/common_reducer";
import { OrderStatus } from "../../../../../../../core/utils/enums";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import PaginationModel from "../../../../../../common/pagination/model/pagination_model";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { OrderList } from "../../../../../../common/order/data/models/order_list";
import OrderListModel from "../../../../../../common/order/data/models/order_list_model";
import { GetOrders } from "../../../domain/usecases/get_orders";
import { fetchOrders, selectIllustratorOrder, setIsLoading, setPagination } from "../../reducers/illustrator_order_slice";

type OrdersController = {
  isLoading: boolean;
  orders: OrderList[];
  getOrders: () => void;
  pagination: PaginationModel | null;
  onChangePage: ((page: number, pageSize: number) => void) | undefined;
};

function useIllustratorOrderListHandler(): OrdersController {
  const dispatch = useAppDispatch();
  const getOrdersUC = new GetOrders();
  const { orders, isLoading, pagination } = useSelector(selectIllustratorOrder);
  const { authUser } = useSelector(selectAuth);

  const getOrders = () => {
    dispatch(setIsLoading(true));
    setTimeout(async () => {
      const resource = await getOrdersUC.execute({ page: pagination?.currentPage == undefined ? 1 : pagination?.currentPage, limit: 5, token: authUser?.data.token! });
      dispatch(setIsLoading(false));

      resource.whenWithResult({
        success: (value) => {
          console.log({ value });

          dispatch(fetchOrders(value.data.data.orders));
          dispatch(setPagination(value.data.data.pagination));
          dispatch(fetchError(""));
        },
        error: (error) => {
          dispatch(fetchError(error.exception.message));
          console.log({ error });
        },
      });
    });
  };
  const onChangePage = (page: number, pageSize?: number) => {
    dispatch(setPagination({ currentPage: page, pageSize: pageSize }));
  };
  
  return {
    isLoading,
    orders,
    getOrders,
    onChangePage,
    pagination,
  };
}

export default useIllustratorOrderListHandler;
