import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../core/utils/redux";
import GetCurrentUser from "../domain/usecases/get_current_user";
import { VerifyCurrentToken } from "../domain/usecases/verify_token";
import { isAuthLoading, selectAuth, userLogin } from "./reducers/auth_reducer";

type Props = {
  children: JSX.Element;
};
function AuthProvider(props: Props): JSX.Element {
  const getCurrentUser = new GetCurrentUser();
  const verifyCurrentToken = new VerifyCurrentToken();
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getAuthUser() {
      dispatch(isAuthLoading(true));
      const resource = await getCurrentUser.execute();

      resource.whenWithResult({
        success: async (value) => {
          dispatch(userLogin(value.data));
          dispatch(isAuthLoading(false));
        },
        error: () => {
          dispatch(isAuthLoading(false));
        },
      });
    }
    getAuthUser();
    
  }, [getCurrentUser, dispatch]);

  return props.children;
}

export default AuthProvider;
