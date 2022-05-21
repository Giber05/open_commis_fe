import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../core/utils/redux";
import AuthenticationRoutes from "./AuthenticationRoutes";
import { selectAuth } from "./presentation/reducers/auth_reducer";

function AuthenticationModule() {
  const { isLoadingUser, authUser } = useAppSelector(selectAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoadingUser && authUser != null) {
      let role = authUser.data.role;
      if (role === "consumer") navigate("/");
      else if (role === "illustrator") navigate("/manage/manage-compost");
      else if (role === "administrator") navigate("/admin");
    }
  }, [isLoadingUser]);

  return <AuthenticationRoutes />;
}

export default AuthenticationModule;
