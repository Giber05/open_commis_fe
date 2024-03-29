import { message } from "antd";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchError, selectCommon } from "../../../../../../../core/AppRedux/reducers/common_reducer";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import PaginationModel from "../../../../../../common/pagination/model/pagination_model";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { CommissionPostDetail } from "../../../../../../guest/commission_post/data/models/compost_detail/commission_post_detail";
import { OrderList } from "../../../../../../common/order/data/models/order_list";
import { GetOrders } from "../../../../order/domain/usecases/get_orders";
import { ChangeComPostStatus } from "../../../domain/usecases/change_compost_status";
import { DeleteComPost } from "../../../domain/usecases/delete_compost";
import GetIllustratorComPostDetail from "../../../domain/usecases/get_illustrator_compost_detail";
import { fetchCommissionPostDetail, fetchOrders, isLoading, selectIllustratorsComPosts, setIsLoadingChangeStatus, setIsLoadingOrders, setOrderPagination } from "../../reducers/illustrators_compost_slice";

type IllustratorComPostDetailController = {
  isLoadingChangeStatus: boolean;
  isLoadingComPost: boolean;
  isLoadingOrders: boolean;
  commissionPostDetail?: CommissionPostDetail | null;
  getComPostDetail: () => void;
  isMobile: boolean;
  orderPagination: PaginationModel | null;
  getOrdersByCommission: () => void;
  orders: OrderList[];
  onChangePage: ((page: number, pageSize: number) => void) | undefined;
  onChangeComPostStatus: () => void;
  onDeleteComPost:()=>void
};

function useIllustratorComPostDetailHandler(): IllustratorComPostDetailController {
  const { compostId } = useParams();
  let id = parseInt(compostId!);
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const getIllustratorComPostDetailUC = new GetIllustratorComPostDetail();
  const getOrdersUC = new GetOrders();
  const changeCompostStatusUC = new ChangeComPostStatus();
  const deleteComPostUC = new DeleteComPost();

  const { commissionPostDetail, isLoadingChangeStatus, isLoadingComPost, orderPagination, orders, isLoadingOrders } = useSelector(selectIllustratorsComPosts);
  const { error, isMobile } = useSelector(selectCommon);
  const { authUser } = useSelector(selectAuth);

  const getComPostDetail = () => {
    dispatch(isLoading(true));
    setTimeout(async () => {
      const resource = await getIllustratorComPostDetailUC.execute(id);

      dispatch(isLoading(false));
      resource.whenWithResult({
        success: (value) => {

          dispatch(fetchCommissionPostDetail(value.data.data));
          dispatch(fetchError(""));
        },
        error: (error) => {
          dispatch(fetchError(error.exception.message));
          message.error(error.exception.message)
        },
      });
    });
  };
  const getOrdersByCommission = () => {
    dispatch(setIsLoadingOrders(true));
    setTimeout(async () => {
      const resource = await getOrdersUC.execute({ page: orderPagination?.currentPage == undefined ? 1 : orderPagination?.currentPage, limit: 5, token: authUser?.data.token!, compostId: id });
      dispatch(setIsLoadingOrders(false));

      resource.whenWithResult({
        success: (value) => {

          dispatch(fetchOrders(value.data.data.orders));
          dispatch(setOrderPagination(value.data.data.pagination));
          dispatch(fetchError(""));
        },
        error: (error) => {
          message.error(error.exception.message)
          dispatch(fetchError(error.exception.message));
        },
      });
    });
  };

  const onDeleteComPost = ()=>{
    message.loading("Loading")
    setTimeout(async () => {
      const resource = await deleteComPostUC.execute({token:authUser?.data.token!, compostId:id});

      resource.whenWithResult({
        success: (value) => {
          message.success(value.data.message,2)
          navigate(-1)

        },
        error: (error) => {
          message.error(error.exception.message,2)
        },
      });
    });
  }

  const onChangeComPostStatus = () => {
    message.loading("Loading...")
    let compostStatus = commissionPostDetail?.status === "OPEN" ? "CLOSED" : "OPEN";
    dispatch(setIsLoadingChangeStatus(true));
    setTimeout(async () => {
      const resource = await changeCompostStatusUC.execute({ token: authUser?.data.token!, status: compostStatus, compostId: id });

      dispatch(setIsLoadingChangeStatus(false));
      resource.whenWithResult({
        success: (value) => {

          dispatch(fetchCommissionPostDetail(value.data.data));
          message.success(value.data.message, 2)
        },
        error: (error) => {
          message.error(error.exception.message, 2)
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
    isLoadingOrders,
    onChangeComPostStatus,
    isLoadingChangeStatus,
    onDeleteComPost
  };
}
export default useIllustratorComPostDetailHandler;
