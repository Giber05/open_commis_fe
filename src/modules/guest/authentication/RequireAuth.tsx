import { message, notification } from "antd";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../core/utils/redux";
import { VerifyCurrentToken } from "./domain/usecases/verify_token";
import { selectAuth } from "./presentation/reducers/auth_reducer";


function RequireAuth() {
  const { isLoadingUser, authUser } = useAppSelector(selectAuth);
  const verifyCurrentToken = new VerifyCurrentToken();
  const navigate = useNavigate();

    async function verifyToken() {
      const resource = await verifyCurrentToken.execute(authUser?.data?.token!);
      resource.whenWithResult({
        error: (error) => {
          notification.error({ message: error.exception.message+" Anda Akan Diarahkan Ke Halaman Login", placement: "topRight", duration: 5 });
          setTimeout(() => {
            return navigate(0);
          }, 3000);
        },
      });
    }

  useEffect(() => {
    let isConsumer = authUser?.data.role === "consumer";
    if (!isLoadingUser) {
      if(authUser == null || !isConsumer){

        return navigate("/auth/login");
      }
      else{
        verifyToken();
      }
    }
  }, [isLoadingUser]);
  
  // useEffect(() => {
  
  //   verifyToken();
  // }, [ isLoadingUser]);

  return <Outlet />;
}

export default RequireAuth;
