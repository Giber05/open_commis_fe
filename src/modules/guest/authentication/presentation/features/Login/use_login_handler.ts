import { useSelector } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../../../core/utils/redux";
import Login from "../../../domain/usecases/login";
import { isAuthLoading, selectAuth, userLogin } from "../../reducers/auth_reducer";

export type LoginController = {
  isLoadingUser: boolean;
  navigate: NavigateFunction;
  onFinish: (values: { email: string; password: string; role: string }) => void;
};

function useLoginHandler(): LoginController {
  const dispatch = useAppDispatch();
  const { isLoadingUser } = useSelector(selectAuth);
  const login = new Login();
  const navigate = useNavigate();

  const onFinish = (values: { email: string; password: string; role: string }) => {
    
    dispatch(isAuthLoading(true));
    setTimeout(async () => {
      const resource = await login.execute({ email: values.email, password: values.password });
      dispatch(isAuthLoading(false));
      
      resource.whenWithResult({
        success: async (values) => {
          dispatch(userLogin(values.data));
        },
      });
      console.log(`${values.email}`);
      if (values.role === "ILUSTRATOR") {
        navigate("/manage/manage-compost");
      } else {
        navigate("/");
      }
    }, 1000);
  };

  return {
    isLoadingUser,
    navigate,
    onFinish,
  };
}

export default useLoginHandler;
