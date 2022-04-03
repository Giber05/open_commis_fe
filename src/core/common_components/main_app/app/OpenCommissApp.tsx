import { Layout } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { selectCommon, updateWindowWidth } from "../../../AppRedux/reducers/common_reducer";
import { useAppDispatch, useAppSelector } from "../../../utils/redux";
import BottomNavigation from "../navigation_menu/BottomNavigation";
import TopNavigation from "../navigation_menu/TopNavigation";

function OpenCommissAPP() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener("resize", () => {
      dispatch(updateWindowWidth(window.innerWidth));
    });
  }, [dispatch]);

  const { width } = useAppSelector(selectCommon);

  return (
    <Layout style={{ background: "fff" }}>
      {width <= 768 ? <BottomNavigation /> : <TopNavigation />}
      <Content style={{ padding: "0 50px" }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default OpenCommissAPP;
