import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchError, selectCommon } from "../../../../../../../core/AppRedux/reducers/common_reducer";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import PaginationModel from "../../../../../../common/pagination/model/pagination_model";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { CommissionPostDetail } from "../../../../../../guest/commission_post/data/models/compost_detail/commission_post_detail";
import { OrderList } from "../../../../order/data/models/order_list";
import { GetOrders } from "../../../../order/domain/usecases/get_orders";
import GetIllustratorComPostDetail from "../../../domain/usecases/get_illustrator_compost_detail";
import { fetchCommissionPostDetail, fetchOrders, isLoading, selectIllustratorsComPosts, setIsLoadingOrders, setOrderPagination } from "../../reducers/illustrators_compost_slice";

type IllustratorComPostDetailController = {
  isLoadingComPost: boolean;
  isLoadingOrders: boolean;
  commissionPostDetail?: CommissionPostDetail | null;
  getComPostDetail: () => void;
  isMobile: boolean;
  orderPagination: PaginationModel | null;
  getOrdersByCommission: () => void;
  orders: OrderList[];
  onChangePage: ((page: number, pageSize: number) => void) | undefined;
};

function useIllustratorComPostDetailHandler(): IllustratorComPostDetailController {
  const { compostId } = useParams();
  let id = parseInt(compostId!);

  const dispatch = useAppDispatch();
  const getIllustratorComPostDetailUC = new GetIllustratorComPostDetail();
  const getOrdersUC = new GetOrders();

  const { commissionPostDetail, isLoadingComPost, orderPagination, orders, isLoadingOrders } = useSelector(selectIllustratorsComPosts);
  const { error, isMobile } = useSelector(selectCommon);
  const { authUser } = useSelector(selectAuth);

  const getComPostDetail = () => {
    dispatch(isLoading(true));
    setTimeout(async () => {
      const resource = await getIllustratorComPostDetailUC.execute(id);

      dispatch(isLoading(false));
      resource.whenWithResult({
        success: (value) => {
          console.log(value.data.data);

          dispatch(fetchCommissionPostDetail(value.data.data));
          dispatch(fetchError(""));
        },
        error: (error) => {
          dispatch(fetchError(error.exception.message));
        },
      });
    });
  };
  const getOrdersByCommission = () => {
    dispatch(setIsLoadingOrders(true));
    setTimeout(async () => {
      const resource = await getOrdersUC.execute({ page: orderPagination?.currentPage == undefined ? 1 : orderPagination?.currentPage, limit: 5, token: authUser?.data.token!, compostId:id });
      dispatch(setIsLoadingOrders(false));

      resource.whenWithResult({
        success: (value) => {
          console.log({ value });

          dispatch(fetchOrders(value.data.data.orders));
          dispatch(setOrderPagination(value.data.data.pagination));
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
    dispatch(setOrderPagination({ currentPage: page, pageSize: pageSize }));
  };
  return {
    isLoadingComPost,
    commissionPostDetail,
    getComPostDetail,
    isMobile,
    getOrdersByCommission,
    orderPagination,
    onChangePage,
    orders,
    isLoadingOrders
  };
}
export default useIllustratorComPostDetailHandler;
