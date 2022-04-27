import { Layout } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { selectAuth } from "../../../../modules/guest/authentication/presentation/reducers/auth_reducer";
import { selectCommon, setIsMobile, updateWindowWidth } from "../../../AppRedux/reducers/common_reducer";
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
      window.scrollTo(0, 0);
  }, [dispatch]);
  useEffect(() => {
    if (width < 768) {
      dispatch(setIsMobile(true));
    } else {
      dispatch(setIsMobile(false));
    }
  }, [width]);


  return (
    <Layout style={{ background: "fff" }}>
      {width < 768 ? <BottomNavigation /> : <TopNavigation />}
      <Content className="">
        <div className="min-h-screen p-6 sm:p-8 md:p-12 bg-white">
          <Outlet />
        </div>
      </Content>
      <Footer className="text-center bg-[#3BAFDA] text-white font-semibold">OpenCommiss ©2022 Created by KoTA 101</Footer>
    </Layout>
  );
}

export default OpenCommissApp;
