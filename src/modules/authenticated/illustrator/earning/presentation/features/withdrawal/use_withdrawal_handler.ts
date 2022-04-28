import { message } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { WithdrawBalance } from "../../../domain/usecases/withdraw_balance";
import { fetchIllustratorsBalance, selectEarning, setIsLoadingBalance } from "../../reducers/earning_slice";


type WithdrawalController = {
  isLoadingBalance: boolean;
  withdrawBalance: (event:any) => void;
};

function useWithdrawalHandler(): WithdrawalController {
  const dispatch = useAppDispatch();
  const { isLoadingBalance, illustratorsBalance } = useSelector(selectEarning);
  const { authUser } = useSelector(selectAuth);
  const withdrawBalanceUC = new WithdrawBalance();
  const navigate = useNavigate()
  const withdrawBalance = (event:any) => {
    dispatch(setIsLoadingBalance(true));
    setTimeout(async () => {
      const resource = await withdrawBalanceUC.execute({token:authUser?.data.token!, destination:event.destination, amount:event.amount, accountNumber:event.account_number});
      dispatch(setIsLoadingBalance(false));
      resource.whenWithResult({
        success: async (value) => {
          message.success(value.data.message,2);
          navigate(-1)
        },
        error: async (error) => {
          message.error(error.exception.message,2);
        },
      });
    });
  };
  return{
    withdrawBalance,
    isLoadingBalance,
  }
}
export default useWithdrawalHandler
