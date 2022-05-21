import { message } from "antd";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchError, selectCommon } from "../../../../../../../core/AppRedux/reducers/common_reducer";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { IllustratorOrderDetail } from "../../../data/models/illustrator_detail_order";
import { ConfirmOrder } from "../../../domain/usecases/confirm_order";
import { GetOrderDetail } from "../../../domain/usecases/get_order_detail";
import { fetchOrderDetail, selectIllustratorOrder, setIsConfirmOrderModalVisible, setIsLoading } from "../../reducers/illustrator_order_slice";

type DetailOrderController = {
  isLoading: boolean;
  isConfirmOrderModalVisible: boolean;
  isSendOrderModalVisible: boolean;
  isMobile: boolean;
  orderDetail: IllustratorOrderDetail | null;
  getOrderDetail(): void;
  confirmOrder(accept: boolean, rejectionReason?: string): void;
  changeOrderModalVisibility: (visible: boolean) => void;
};

function useIllustratorDetailOrderHandler(): DetailOrderController {
  const { orderId } = useParams();
  let id = parseInt(orderId!);

  const dispatch = useAppDispatch();
  const { isLoading, orderDetail, isConfirmOrderModalVisible, isSendOrderModalVisible } = useSelector(selectIllustratorOrder);
  const { isMobile } = useSelector(selectCommon);
  const { authUser } = useSelector(selectAuth);
  const getOrderDetailUC = new GetOrderDetail();
  const confirmOrderUC = new ConfirmOrder();

  const getOrderDetail = () => {
    dispatch(setIsLoading(true));
    setTimeout(async () => {
      const resource = await getOrderDetailUC.execute({ orderId: id, token: authUser?.data.token! });
      dispatch(setIsLoading(false));

      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchOrderDetail(value.data.data));
        },
        error: (error) => {
          message.error(error.exception.message)
        },
      });
    });
  };
  const confirmOrder = (accept: boolean, rejectionReason?: string) => {
    message.loading({ content: "Loading..." });

    dispatch(setIsLoading(true));
    setTimeout(async () => {
      const resource = await confirmOrderUC.execute({ orderId: id, token: authUser?.data.token!, accept: accept, rejectReason: rejectionReason });
      dispatch(setIsLoading(false));

      resource.whenWithResult({
        success: (value) => {
          dispatch(fetchOrderDetail(value.data.data));
          dispatch(setIsConfirmOrderModalVisible(false));

          message.success({ content: value.data.message, duration: 2 });
        },
        error: (error) => {
          message.error({ content: error.exception.message, duration: 2 });
        },
      });
    });
  };

  const changeOrderModalVisibility = (visible: boolean) => {
    dispatch(setIsConfirmOrderModalVisible(visible));
  };
  return {
    isLoading,
    isMobile,
    orderDetail,
    getOrderDetail,
    changeOrderModalVisibility,
    isConfirmOrderModalVisible,
    isSendOrderModalVisible,
    confirmOrder,
  };
}

export default useIllustratorDetailOrderHandler;
