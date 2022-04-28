import { message } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { DestinationCode } from "../../../data/models/destination_code";
import { GetDestinationCode } from "../../../domain/usecases/get_destination_code";
import { WithdrawBalance } from "../../../domain/usecases/withdraw_balance";
import { fetchDestinationCode, fetchIllustratorsBalance, selectEarning, setIsDestinationCodeLoading, setIsLoadingBalance } from "../../reducers/earning_slice";

type WithdrawalController = {
  isLoadingBalance: boolean;
  isDestinationCodeLoading: boolean;
  destinationCode: DestinationCode[];
  withdrawBalance: (event: any) => void;
  getDestinationCode: () => void;
};

function useWithdrawalHandler(): WithdrawalController {
  const dispatch = useAppDispatch();
  const { isLoadingBalance, destinationCode, isDestinationCodeLoading } = useSelector(selectEarning);
  const { authUser } = useSelector(selectAuth);
  const withdrawBalanceUC = new WithdrawBalance();
  const getDestinationCodeUC = new GetDestinationCode();
  const navigate = useNavigate();

  const withdrawBalance = (event: any) => {
    dispatch(setIsLoadingBalance(true));
    setTimeout(async () => {
      const resource = await withdrawBalanceUC.execute({ token: authUser?.data.token!, destination: event.destination, amount: event.amount, accountNumber: event.account_number });
      dispatch(setIsLoadingBalance(false));
      resource.whenWithResult({
        success: async (value) => {
          message.success(value.data.message, 2);
          navigate(-1);
        },
        error: async (error) => {
          message.error(error.exception.message, 2);
        },
      });
    });
  };
  const getDestinationCode = () => {
    dispatch(setIsDestinationCodeLoading(true));
    setTimeout(async () => {
      const resource = await getDestinationCodeUC.execute(authUser?.data.token!);
      dispatch(setIsDestinationCodeLoading(false));
      resource.whenWithResult({
        success: async (value) => {
          dispatch(fetchDestinationCode(value.data.data));
        },
        error: async (error) => {
          message.error(error.exception.message, 2);
        },
      });
    });
  };

  return {
    withdrawBalance,
    isLoadingBalance,
    isDestinationCodeLoading,
    destinationCode,
    getDestinationCode,
  };
}
export default useWithdrawalHandler;
