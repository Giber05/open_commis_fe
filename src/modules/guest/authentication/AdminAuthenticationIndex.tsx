import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../../core/utils/redux";
import AdminAuthenticationRoutes from "./AdminAuthenticationRoutes";
import { selectAuth } from "./presentation/reducers/auth_reducer";

function AdminAuthentication() {
  const { isLoadingUser, authUser } = useAppSelector(selectAuth);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isLoadingUser && authUser != null && authUser.data.role === "admin") {
  //      return navigate("/admin");
  //   }
  // }, [isLoadingUser]);
  return <AdminAuthenticationRoutes />;
}

export default AdminAuthentication;
