import { useSelector } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { fetchError, selectCommon } from "../../../../../../core/AppRedux/reducers/common_reducer";
import { useAppDispatch } from "../../../../../../core/utils/redux";
import Login from "../../../domain/usecases/login";
import { isAuthLoading, selectAuth, userLogin } from "../../reducers/auth_reducer";

export type LoginController = {
  isLoadingUser: boolean;
  navigate: NavigateFunction;
  error:string;
  onFinish: (values: { email: string; password: string; role: string }) => void;
  clearError: ()=>void
};

function useLoginHandler(): LoginController {
  const dispatch = useAppDispatch();
  const { isLoadingUser } = useSelector(selectAuth);
  const { error } = useSelector(selectCommon);
  const login = new Login();
  const navigate = useNavigate();

  const onFinish = (values: { email: string; password: string; role: string }) => {
    dispatch(isAuthLoading(true));
    dispatch(fetchError(""))
    setTimeout(async () => {
      const resource = await login.execute({ email: values.email, password: values.password, role: values.role });
      dispatch(isAuthLoading(false));

      resource.whenWithResult({
        success: async (value) => {
          dispatch(userLogin(value.data));
          if (values.role === "illustrator") {
            navigate("/manage/manage-compost/");
          } else {
            navigate("/");
          }
        },
        error: async (error) => {
          dispatch(fetchError(error.exception.message))
        },
      });
    }, 1000);
  };

  const clearError= ()=>{
    dispatch(fetchError(""))
  }

  return {
    isLoadingUser,
    navigate,
    onFinish,
    error,
    clearError,
  };
}

export default useLoginHandler;
