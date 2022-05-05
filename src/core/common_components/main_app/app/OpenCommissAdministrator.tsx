import { Layout } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import { useEffect } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { VerifyCurrentToken } from "../../../../modules/guest/authentication/domain/usecases/verify_token";
import { selectAuth } from "../../../../modules/guest/authentication/presentation/reducers/auth_reducer";
import { selectCommon, updateWindowWidth } from "../../../AppRedux/reducers/common_reducer";
import { useAppDispatch, useAppSelector } from "../../../utils/redux";
import Sidebar from "../navigation_menu/administrator/components/Sidebar";
import NavigationWithSider from "../navigation_menu/administrator/NavigationWithSider";
import TopNavigation from "../navigation_menu/ilustrator/TopNavigation";

function OpenCommissAdministrator() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoadingUser, authUser } = useAppSelector(selectAuth);
  const { width } = useAppSelector(selectCommon);
  const verifyCurrentToken = new VerifyCurrentToken();

  useEffect(() => {
    window.addEventListener("resize", () => {
      dispatch(updateWindowWidth(window.innerWidth));
    });
  }, [dispatch]);

  // useEffect(() => {
  //   if (!isLoadingUser && authUser == null) {
  //     navigate("/auth/signin");
  //   }
  // }, [isLoadingUser]);

  return (
    <>
      <NavigationWithSider />
    </>
  );
}

export default OpenCommissAdministrator;
