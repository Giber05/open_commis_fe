import { message } from "antd";
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
        success: async (value) => {
          console.log("Token Valid => ", value.data.message);
         
        },
        error: (error) => {
          message.error("Verify token error: " + error.exception.message);
          return navigate("/auth/login");
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
