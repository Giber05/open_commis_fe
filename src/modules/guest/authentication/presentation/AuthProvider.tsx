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
      console.log("Current User in Local :", resource);

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

  // const { isLoadingUser, authUser } = useAppSelector(selectAuth);

  // useEffect(() => {
  //   async function verifyToken() {
  //     const resource = await verifyCurrentToken.execute(authUser?.data?.token!);
  //     resource.whenWithResult({
  //       success: async (value) => {
  //         console.log("Token Valid => ", value.data.message);
  //         let tokenValid = value.data.data.tokenValid;
  //         if (!tokenValid) {
  //           navigate("/auth/login");
  //         }
  //       },
  //     });
  //   }
  //   verifyToken();
  // }, [verifyCurrentToken, isLoadingUser]);

  return props.children;
}

export default AuthProvider;
