import { message } from "antd";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchError, selectCommon } from "../../../../../../../core/AppRedux/reducers/common_reducer";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { ConsumerOrderDetail } from "../../../data/models/order/order_detail/consumer_detail_order";
import { FinishOrder } from "../../../domain/usecases/finish_order";
import { GetOrderDetail } from "../../../domain/usecases/get_order_detail";
import { MakePayment } from "../../../domain/usecases/make_payment";
import { fetchOrderDetail, selectConsumerOrder, setIsFinishOrderModalVisible, setIsLoading, setIsLoadingChangeOrderStatus, setIsPaymentModalVisible } from "../../reducers/consumer_order_slice";

type DetailOrderController = {
  isLoading: boolean;
  orderDetail: ConsumerOrderDetail | null;
  getOrderDetail: () => void;
  isPaymentModalVisible: boolean;
  isFinishOrderModalVisible: boolean;
  changeFinishOrderModalVisibility: (visible: boolean) => void;
  changePaymentModalVisibility: (visible: boolean) => void;
  isMobile: boolean;
  isLoadingChangeOrderStatus: boolean;
  makePayment: (event: any) => void;
  finishOrder: () => void;
};

function useConsumerOrderDetailHandler(): DetailOrderController {
  const { orderId } = useParams();
  let id = parseInt(orderId!);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error, isMobile } = useSelector(selectCommon);

  const { isLoading, orderDetail, isPaymentModalVisible, isFinishOrderModalVisible, isLoadingChangeOrderStatus } = useSelector(selectConsumerOrder);
  const { authUser } = useSelector(selectAuth);
  const getOrderDetailUC = new GetOrderDetail();
  const makePaymentUC = new MakePayment();
  const finishOrderUC = new FinishOrder();

  const getOrderDetail = () => {
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

  const changeFinishOrderModalVisibility = (visible: boolean) => {
    dispatch(setIsFinishOrderModalVisible(visible));
  };
  const changePaymentModalVisibility = (visible: boolean) => {
    dispatch(setIsPaymentModalVisible(visible));
  };

  const makePayment = (event: any) => {
    message.loading("Loading...");
    dispatch(setIsLoadingChangeOrderStatus(true));
    setTimeout(async () => {
      const resource = await makePaymentUC.execute({ token: authUser?.data.token!, method: event.payment_method, orderId: id });
      dispatch(setIsLoadingChangeOrderStatus(false));
      resource.whenWithResult({
        success: (value) => {
          console.log({ value });
          const win = window.open(value.data.data.paymentLink, "_blank");
          win?.focus();
        },
        error: (error) => {
          message.error(error.exception.message);
        },
      });
    });
  };

  const finishOrder = () => {
    message.loading("Loading...");
    dispatch(setIsLoadingChangeOrderStatus(true));
    setTimeout(async () => {
      const resource = await finishOrderUC.execute({ token: authUser?.data.token!, orderId: id });
      dispatch(setIsLoadingChangeOrderStatus(false));
      resource.whenWithResult({
        success: (value) => {
          message.success(value.data.message);
          navigate("/consumer/" + value.data.data.commission.id + "/add-review");
        },
        error: (error) => {
          message.error(error.exception.message);
        },
      });
    });
  };
  return {
    isLoading,
    orderDetail,
    getOrderDetail,
    changeFinishOrderModalVisibility,
    isMobile,
    isPaymentModalVisible,
    changePaymentModalVisibility,
    isFinishOrderModalVisible,
    isLoadingChangeOrderStatus,
    makePayment,
    finishOrder,
  };
}

export default useConsumerOrderDetailHandler;
