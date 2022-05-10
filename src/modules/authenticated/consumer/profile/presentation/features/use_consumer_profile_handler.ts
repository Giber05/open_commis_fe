import { message } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../../../core/utils/redux";
import ConsumerModel from "../../../../../common/authentication/data/model/consumer_model";
import Logout from "../../../../../guest/authentication/domain/usecases/logout";
import { isAuthLoading, selectAuth, userLogout } from "../../../../../guest/authentication/presentation/reducers/auth_reducer";
import { GetConsumerProfile } from "../../domain/usecases/get_consumer_profile";
import { fetchConsumerProfile, selectConsumerProfile, setIsProfileLoading } from "../reducers/customer_profile_slice";

type ProfileController = {
  isProfileLoading: boolean;
  consumer: ConsumerModel | null;
  getConsumerProfile: () => void;
  onLogoutClick: () => void;
};

function useConsumerProfileHandler(): ProfileController {
  const dispatch = useAppDispatch();
  const { consumer, isProfileLoading } = useSelector(selectConsumerProfile);
  const { authUser } = useSelector(selectAuth);
  const navigate = useNavigate();

  const getConsumerProfileUC = new GetConsumerProfile();

  const getConsumerProfile = () => {
    dispatch(setIsProfileLoading(true));
    setTimeout(async () => {
      const resource = await getConsumerProfileUC.execute(authUser?.data.token!);
      dispatch(setIsProfileLoading(false));
      resource.whenWithResult({
        success: async (value) => {
          dispatch(fetchConsumerProfile(value.data.data));
          console.log({ value });
        },
        error: async (error) => {
          message.error(error.exception.message);
        },
      });
    });
  };
  const onLogoutClick = () => {
    message.loading("Loading ...");
    const logout = new Logout();

    dispatch(isAuthLoading(true));
    setTimeout(async () => {
      const resource = await logout.execute(authUser?.data.token!);
      resource.whenWithResult({
        success: (_) => {
          message.success("Berhasil Logout");
          dispatch(userLogout());
          dispatch(isAuthLoading(false));
          navigate("/auth/login");
        },
        error: (error) => {
          message.error(error.exception.message);
        },
      });
    });
  };
  return {
    onLogoutClick,
    getConsumerProfile,
    isProfileLoading,
    consumer,
  };
}
export default useConsumerProfileHandler;
