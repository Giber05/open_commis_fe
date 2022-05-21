import { message, notification } from "antd";
import { useSelector } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { fetchError, selectCommon } from "../../../../../../core/AppRedux/reducers/common_reducer";
import { useAppDispatch } from "../../../../../../core/utils/redux";
import Login from "../../../domain/usecases/login";
import LoginAdmin from "../../../domain/usecases/login_admin";
import { isAuthLoading, selectAuth, userLogin } from "../../reducers/auth_reducer";

export type LoginAdminController = {
  isLoadingUser: boolean;
  navigate: NavigateFunction;
  onFinish: (values: { username: string; password: string }) => void;
};

function useLoginAdminHandler(): LoginAdminController {
  const dispatch = useAppDispatch();
  const { isLoadingUser } = useSelector(selectAuth);
  const loginAdminUC = new LoginAdmin();
  const navigate = useNavigate();

  const onFinish = (values: { username: string; password: string }) => {
    message.loading("Loading ... ");
    dispatch(isAuthLoading(true));
    dispatch(fetchError(""));
    setTimeout(async () => {
      const resource = await loginAdminUC.execute({ username: values.username, password: values.password, role: "administrator" });
      dispatch(isAuthLoading(false));

      resource.whenWithResult({
        success: async (value) => {
          dispatch(userLogin(value.data));

          navigate("/admin");
        },
        error: (error) => {
          notification.error({ message: error.exception.message, placement: "topRight", duration: 5 });
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

export default useLoginAdminHandler;
