import { message } from "antd";
import { error } from "console";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../../../../core/utils/redux";
import { selectAuth } from "../../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { IllustratorsBalance } from "../../../data/models/illustrators_balance";
import { GetIllustratorsBalance } from "../../../domain/usecases/get_illustrators_balance";
import { fetchIllustratorsBalance, selectEarning, setIsLoadingBalance } from "../../reducers/earning_slice";

type EarningController = {
  isLoadingBalance: boolean;
  illustratorsBalance: IllustratorsBalance | null;
  getIllustratorsBalance: () => void;
};

function useEarningHandler(): EarningController {
  const dispatch = useAppDispatch();
  const { isLoadingBalance, illustratorsBalance } = useSelector(selectEarning);
  const { authUser } = useSelector(selectAuth);
  const getIllustratorsBalanceUC = new GetIllustratorsBalance();

  const getIllustratorsBalance = () => {
    dispatch(setIsLoadingBalance(true));
    setTimeout(async () => {
      const resource = await getIllustratorsBalanceUC.execute(authUser?.data.token!);
      dispatch(setIsLoadingBalance(false));
      resource.whenWithResult({
        success: async (value) => {
          dispatch(fetchIllustratorsBalance(value.data.data));
          console.log({ value });
        },
        error: async (error) => {
          message.error(error.exception.message);
        },
      });
    });
  };
  return{
    getIllustratorsBalance,
    isLoadingBalance,
    illustratorsBalance
  }
}
export default useEarningHandler
