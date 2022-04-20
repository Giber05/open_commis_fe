import { Layout } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { VerifyCurrentToken } from "../../../../modules/guest/authentication/domain/usecases/verify_token";
import { selectAuth } from "../../../../modules/guest/authentication/presentation/reducers/auth_reducer";
import { selectCommon, updateWindowWidth } from "../../../AppRedux/reducers/common_reducer";
import { useAppDispatch, useAppSelector } from "../../../utils/redux";
import TopNavigation from "../navigation_menu/ilustrator/TopNavigation";

function OpenCommissIlustrator() {
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
  console.log("User Role =>");

  useEffect(() => {
    let isIllustrator = authUser?.data.role === "illustrator";
    if (!isLoadingUser && (authUser == null || !isIllustrator)) {
      navigate("/auth/login");
    }
  }, [isLoadingUser]);
  useEffect(() => {
    async function verifyToken() {
      const resource = await verifyCurrentToken.execute(authUser?.data?.token!);
      resource.whenWithResult({
        success: async (value) => {
          console.log("Token Valid => ", value.data.message);
          let tokenValid = value.data.data.tokenValid;
          if (!tokenValid) {
            navigate("/auth/login");
          }
        },
      });
    }
    verifyToken();
  }, [verifyCurrentToken, isLoadingUser]);

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
