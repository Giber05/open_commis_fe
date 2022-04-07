import { Layout } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { selectAuth } from "../../../../modules/guest/authentication/presentation/reducers/auth_reducer";
import { selectCommon, updateWindowWidth } from "../../../AppRedux/reducers/common_reducer";
import { useAppDispatch, useAppSelector } from "../../../utils/redux";
import BottomNavigation from "../navigation_menu/consumer/BottomNavigation";
import TopNavigation from "../navigation_menu/consumer/TopNavigation";

function OpenCommissApp() {
  const dispatch = useAppDispatch();

  const { width } = useAppSelector(selectCommon);

  useEffect(() => {
    window.addEventListener("resize", () => {
      dispatch(updateWindowWidth(window.innerWidth));
    });
  }, [dispatch]);

  
  return (
    <Layout style={{ background: "fff" }}>
      {width <= 768 ? <BottomNavigation /> : <TopNavigation />}
      <Content className="px-12 py-0">
        <div className="min-h-screen p-6 bg-white">
          <Outlet />
        </div>
      </Content>
      <Footer className="text-center">Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default OpenCommissApp;
