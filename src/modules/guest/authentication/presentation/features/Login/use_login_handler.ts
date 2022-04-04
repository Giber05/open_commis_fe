import { useSelector } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../../../core/utils/redux";
import Login from "../../../domain/usecases/login";
import { isAuthLoading, selectAuth, userLogin } from "../../reducers/auth_reducer";

export type LoginController = {
  isLoadingUser: boolean;
  navigate: NavigateFunction;
  onFinish: (values: { email: string; password: string }) => void;
};

function useLoginHandler(): LoginController {
  const dispatch = useAppDispatch();
  const { isLoadingUser } = useSelector(selectAuth);
  const login = new Login();
  const navigate = useNavigate();

  const onFinish = (values: { email: string; password: string }) => {
    dispatch(isAuthLoading(true));
    setTimeout(async () => {
      const resource = await login.execute({ email: values.email, password: values.password });
      dispatch(isAuthLoading(false));
      resource.whenWithResult({
        success: async (values) => {
          dispatch(userLogin(values.data));
          navigate("/");
        },
      });
    }, 1000);
  };

  return {
    isLoadingUser,
    navigate,
    onFinish,
  };
}

export default useLoginHandler;
