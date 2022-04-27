import { message } from "antd";
import { useSelector } from "react-redux";
import {  NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { CreateOrder } from "../../../domain/usecases/create_order";
import { selectConsumerMakeOrder, setIsLoading } from "../../reducers/consumer_make_order_slice";

type MakeOrderController = {
  isLoading: boolean;
  navigate:NavigateFunction,
  createOrder: (event: any) => void;
};

function useMakeOrderHandler(): MakeOrderController {
  const { compostId } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading } = useSelector(selectConsumerMakeOrder);
  const { authUser } = useSelector(selectAuth);
  const navigate = useNavigate();
  const createOrderUC = new CreateOrder();

  const createOrder = (event: any) => {
    message.loading("Loading...");
    const orderForm = new FormData();
    if (event.file != undefined) {
      let referenceFile = event.file.map((file: any) => file.originFileObj);
      orderForm.append("reference", referenceFile[0]);
    }
    orderForm.append("requestDetail", event.req_description);
    orderForm.append("commissionId", compostId!);

    dispatch(setIsLoading(true));
    setTimeout(async () => {
      const resource = await createOrderUC.execute({
        token: authUser?.data.token!,
        orderForm: orderForm,
      });

      dispatch(setIsLoading(false));
      resource.whenWithResult({
        success: (value) => {
          message.success(value.data.message, 2);


          navigate(`/consumer/order/${value.data.data.id}`);
        },
        error: (error) => {
          message.error(error.exception.message, 2);
        },
      });
    });
  };

  return {
    isLoading,
    navigate,
    createOrder,
  };
}

export default useMakeOrderHandler;
