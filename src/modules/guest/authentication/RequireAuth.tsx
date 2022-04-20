import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../core/utils/redux";
import { VerifyCurrentToken } from "./domain/usecases/verify_token";
import { selectAuth } from "./presentation/reducers/auth_reducer";


function RequireAuth() {
  const { isLoadingUser, authUser } = useAppSelector(selectAuth);
  const verifyCurrentToken = new VerifyCurrentToken();
  const navigate = useNavigate();
  useEffect(() => {
    let isIllustrator = authUser?.data.role === "consumer";
    if (!isLoadingUser && (authUser == null || !isIllustrator)) {
      navigate("/auth/login");
    }
  }, [isLoadingUser]);
  useEffect(() => {
    async function verifyToken() {
      const resource = await verifyCurrentToken.execute(authUser?.data?.token!);
      resource.whenWithResult({
        success: async (value) => {
          console.log("Token Valid => ", value.data.message);
          let tokenValid = value.data.data.tokenValid;
          if (!tokenValid) {
            navigate("/auth/login");
          }
        },
      });
    }
    verifyToken();
  }, [verifyCurrentToken, isLoadingUser]);

  return <Outlet />;
}

export default RequireAuth;
