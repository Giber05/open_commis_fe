import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchError, selectCommon } from "../../../../../../../core/AppRedux/reducers/common_reducer";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { ConsumerOrderDetail } from "../../../data/models/order/order_detail/consumer_detail_order";
import { GetOrderDetail } from "../../../domain/usecases/get_order_detail";
import { fetchOrderDetail, selectConsumerOrder, setIsFinishOrderModalVisible, setIsLoading } from "../../reducers/consumer_order_slice";

type DetailOrderController = {
  isLoading: boolean;
  orderDetail: ConsumerOrderDetail | null;
  getOrderDetail:()=> void;
  changeOrderModalVisibility: (visible: boolean) => void;
  isMobile: boolean;
};

function useConsumerOrderDetailHandler(): DetailOrderController {
  const { orderId } = useParams();
  let id = parseInt(orderId!);

  const dispatch = useAppDispatch();
  const { error, isMobile } = useSelector(selectCommon);

  const { isLoading, orderDetail } = useSelector(selectConsumerOrder);
  const { authUser } = useSelector(selectAuth);
  const getOrderDetailUC = new GetOrderDetail();
  // const confirmOrderUC = new ConfirmOrder();

  const getOrderDetail = () => {
    console.log("GETORDERDETAIL");
    
    dispatch(setIsLoading(true));
    setTimeout(async () => {
      const resource = await getOrderDetailUC.execute({ orderId: id, token: authUser?.data.token! });
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

  const changeOrderModalVisibility = (visible: boolean) => {
    dispatch(setIsFinishOrderModalVisible(visible));
  };
  return {
    isLoading,
    orderDetail,
    getOrderDetail,
    changeOrderModalVisibility,
    isMobile
  };
}

export default useConsumerOrderDetailHandler;
