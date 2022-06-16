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
      <Footer className=" bg-[#3BAFDA] text-white font-semibold p-4   shadow  md:p-6 ">
        <div className=" md:flex md:items-center md:justify-between mx-20">
          <span className="text-sm text-white sm:text-center ">
            © 2022{" "}
            <a href="#" className="hover:underline text-white hover:text-green-300">
              OpenCommiss KoTA 101
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-4 text-sm  sm:mt-0 list-none">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 text-white hover:text-green-300 ">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 text-white hover:text-green-300">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 text-white hover:text-green-300">
                Term & Condition
              </a>
            </li>
            <li>
              <a href="/info/privacy-policy" target="_blank" className="hover:underline text-white hover:text-green-300">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </Footer>
    </Layout>
  );
}

export default OpenCommissApp;
