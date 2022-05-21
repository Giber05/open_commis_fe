import { Layout, message, notification } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import { useEffect } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { VerifyCurrentToken } from "../../../../modules/guest/authentication/domain/usecases/verify_token";
import { selectAuth } from "../../../../modules/guest/authentication/presentation/reducers/auth_reducer";
import { selectCommon, updateWindowWidth } from "../../../AppRedux/reducers/common_reducer";
import { useAppDispatch, useAppSelector } from "../../../utils/redux";
import NavigationWithSider from "../navigation_menu/administrator/NavigationWithSider";

function OpenCommissAdministrator() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoadingUser, authUser } = useAppSelector(selectAuth);
  const verifyCurrentToken = new VerifyCurrentToken();

  useEffect(() => {
    window.addEventListener("resize", () => {
      dispatch(updateWindowWidth(window.innerWidth));
    });
  }, [dispatch]);

  async function verifyToken() {
    const resource = await verifyCurrentToken.execute(authUser?.data?.token!);
    resource.whenWithResult({
      success: async (value) => {},
      error: (error) => {
        notification.error({ message: error.exception.message+" Anda Akan Diarahkan Ke Halaman Login", placement: "topRight", duration: 5 });
        setTimeout(() => {
          return navigate(0);
        }, 3000);
      },
    });
  }

  useEffect(() => {
    let isAdministrator = authUser?.data.role === "administrator";
    if (!isLoadingUser) {
      if (authUser == null || !isAdministrator) {
        return navigate("/admin/auth/login");
      } else {
        verifyToken();
      }
    }
  }, [isLoadingUser]);

  return (
    <>
      <NavigationWithSider />
    </>
  );
}

export default OpenCommissAdministrator;
