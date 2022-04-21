import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchError, selectCommon } from "../../../../../../../core/AppRedux/reducers/common_reducer";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { IllustratorOrderDetail } from "../../../data/models/illustrator_detail_order";
import { GetOrderDetail } from "../../../domain/usecases/get_order_detail";
import { fetchOrderDetail, selectIllustratorOrder, setIsLoading } from "../../reducers/illustrator_order_slice";

type DetailOrderController = {
  isLoading: boolean;
  isMobile: boolean;
  orderDetail: IllustratorOrderDetail | null;
  getOrderDetail(): void;
};

function useIllustratorDetailOrderHandler(): DetailOrderController {
  const { orderId } = useParams();
  let id = parseInt(orderId!);

  const dispatch = useAppDispatch();
  const { isLoading, orderDetail } = useSelector(selectIllustratorOrder);
  const { isMobile } = useSelector(selectCommon);
  const { authUser } = useSelector(selectAuth);
  const getOrderDetailUC = new GetOrderDetail();

  const getOrderDetail = () => {
    dispatch(setIsLoading(true));
    setTimeout(async () => {
      const resource = await getOrderDetailUC.execute({ orderId:id, token: authUser?.data.token! });
      dispatch(setIsLoading(false));

      resource.whenWithResult({
        success: (value) => {
          console.log({ value });

          dispatch(fetchOrderDetail(value.data.data));
          dispatch(fetchError(""));
        },
        error: (error) => {
          dispatch(fetchError(error.exception.message));
          console.log({ error });
        },
      });
    });
  };
  return {
    isLoading,
    isMobile,
    orderDetail,
    getOrderDetail
  };
}

export default useIllustratorDetailOrderHandler;
