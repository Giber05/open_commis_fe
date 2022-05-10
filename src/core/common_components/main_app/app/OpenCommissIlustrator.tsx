import { Drawer, Layout, Menu, message } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Logout from "../../../../modules/guest/authentication/domain/usecases/logout";
import { VerifyCurrentToken } from "../../../../modules/guest/authentication/domain/usecases/verify_token";
import { selectAuth } from "../../../../modules/guest/authentication/presentation/reducers/auth_reducer";
import { selectCommon, toggleCollapsedSideNav, updateWindowWidth } from "../../../AppRedux/reducers/common_reducer";
import { useAppDispatch, useAppSelector } from "../../../utils/redux";
import TopNavigation from "../navigation_menu/ilustrator/TopNavigation";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import React from "react";
import OnCollapsedNav from "../navigation_menu/ilustrator/OnCollapsedNav";
import DrawerSection from "../navigation_menu/ilustrator/DrawerSection";

function OpenCommissIlustrator() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoadingUser, authUser } = useAppSelector(selectAuth);
  const { navCollapsed, width } = useAppSelector(selectCommon);
  const verifyCurrentToken = new VerifyCurrentToken();

  useEffect(() => {
    window.addEventListener("resize", () => {
      dispatch(updateWindowWidth(window.innerWidth));
    });
  }, [dispatch]);
  console.log("User Role =>");

  async function verifyToken() {
    const resource = await verifyCurrentToken.execute(authUser?.data?.token!);
    resource.whenWithResult({
      success: async (value) => {
        console.log("Token Valid => ", value.data.data.tokenValid);
      },
      error: (error) => {
        message.error("Verify token error: " + error.exception.message);
        return navigate("/auth/login");
      },
    });
  }

  useEffect(() => {
    let isIllustrator = authUser?.data.role === "illustrator";
    if (!isLoadingUser) {
      if (authUser == null || !isIllustrator) {
        return navigate("/auth/login");
      } else {
        verifyToken();
      }
    }
  }, [isLoadingUser]);

  return (
    <Layout>
      {width < 768 ? <OnCollapsedNav /> : <TopNavigation />}

      <DrawerSection />
      <Content className="">
        <div className="min-h-screen bg-white">
          <Outlet />
        </div>
      </Content>
      <Footer className="text-center bg-[#3BAFDA] text-white font-semibold">OpenCommiss ©2022 Created by KoTA101</Footer>
    </Layout>
  );
}

export default OpenCommissIlustrator;
