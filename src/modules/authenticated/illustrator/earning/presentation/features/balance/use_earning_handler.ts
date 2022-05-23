import { message } from "antd";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { IllustratorsBalance } from "../../../data/models/illustrators_balance";
import { WithdrawalHistory } from "../../../data/models/withdrawal_history";
import { GetIllustratorsBalance } from "../../../domain/usecases/get_illustrators_balance";
import { GetWithdrawalHistory } from "../../../domain/usecases/get_withdrawal_history";
import { fetchIllustratorsBalance, fetchWithdrawalHistory, selectEarning, setIsLoadingBalance, setIsWithdrawalHistoryLoading } from "../../reducers/earning_slice";

type EarningController = {
  isLoadingBalance: boolean;
  illustratorsBalance: IllustratorsBalance | null;
  getIllustratorsBalance: () => void;
  isWithdrawalHistoryLoading: boolean;
  withdrawalHistory: WithdrawalHistory[];
  getWithdrawalHistory: () => void;
};

function useEarningHandler(): EarningController {
  const dispatch = useAppDispatch();
  const { isLoadingBalance, illustratorsBalance, isWithdrawalHistoryLoading, withdrawalHistory } = useSelector(selectEarning);
  const { authUser } = useSelector(selectAuth);
  const getIllustratorsBalanceUC = new GetIllustratorsBalance();
  const getWithdrawalHistoryUC = new GetWithdrawalHistory();

  const getIllustratorsBalance = () => {
    dispatch(setIsLoadingBalance(true));
    setTimeout(async () => {
      const resource = await getIllustratorsBalanceUC.execute(authUser?.data.token!);
      dispatch(setIsLoadingBalance(false));
      resource.whenWithResult({
        success: async (value) => {
          dispatch(fetchIllustratorsBalance(value.data.data));
        },
        error: async (error) => {
          message.error(error.exception.message);
        },
      });
    });
  };

  const getWithdrawalHistory = () => {
    dispatch(setIsWithdrawalHistoryLoading(true));
    setTimeout(async () => {
      const resource = await getWithdrawalHistoryUC.execute(authUser?.data.token!);
      dispatch(setIsWithdrawalHistoryLoading(false));
      resource.whenWithResult({
        success: async (value) => {
          dispatch(fetchWithdrawalHistory(value.data.data));
        },
        error: async (error) => {
          message.error(error.exception.message);
        },
      });
    });
  };
  return {
    getIllustratorsBalance,
    isLoadingBalance,
    illustratorsBalance,
    getWithdrawalHistory,
    isWithdrawalHistoryLoading,
    withdrawalHistory,
  };
}
export default useEarningHandler;
