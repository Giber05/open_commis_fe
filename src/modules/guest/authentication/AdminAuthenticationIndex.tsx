import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../../core/utils/redux";
import AdminAuthenticationRoutes from "./AdminAuthenticationRoutes";
import { selectAuth } from "./presentation/reducers/auth_reducer";

function AdminAuthentication() {
  const { isLoadingUser, authUser } = useAppSelector(selectAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoadingUser && authUser != null) {
      let role = authUser.data.role;
      if (role === "consumer") navigate("/");
      else if (role === "illustrator") navigate("/manage/manage-compost");
      else if(role === "administrator")navigate("/admin");
    }
  }, [isLoadingUser]);
  return <AdminAuthenticationRoutes />;
}

export default AdminAuthentication;
