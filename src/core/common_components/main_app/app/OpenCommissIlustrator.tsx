import { Layout } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { selectAuth } from "../../../../modules/guest/authentication/presentation/reducers/auth_reducer";
import { selectCommon, updateWindowWidth } from "../../../AppRedux/reducers/common_reducer";
import { useAppDispatch, useAppSelector } from "../../../utils/redux";
import TopNavigation from "../navigation_menu/ilustrator/TopNavigation";

function OpenCommissIlustrator() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoadingUser, authUser } = useAppSelector(selectAuth);
  const { width } = useAppSelector(selectCommon);

  useEffect(() => {
    window.addEventListener("resize", () => {
      dispatch(updateWindowWidth(window.innerWidth));
    });
  }, [dispatch]);

  useEffect(() => {
    if (!isLoadingUser && authUser == null) {
      navigate("/auth/login");
    }
  }, [isLoadingUser]);

  return (
    <Layout>
      <TopNavigation />
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
