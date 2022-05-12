import {  message, notification } from "antd";
import { useSelector } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { fetchError, selectCommon } from "../../../../../../core/AppRedux/reducers/common_reducer";
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
    message.loading("Loading ... ")
    dispatch(isAuthLoading(true));
    dispatch(fetchError(""));
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

export default useLoginHandler;
