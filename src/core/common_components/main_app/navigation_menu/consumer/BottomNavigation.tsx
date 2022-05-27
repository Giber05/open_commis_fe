import { Card, Layout, Menu, PageHeader, Image, Button, Dropdown, Row, Col } from "antd";
import { BackwardOutlined, BorderBottomOutlined, DropboxOutlined, LeftOutlined, UploadOutlined, UpOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../utils/redux";
import { isAuthLoading, selectAuth, userLogout } from "../../../../../modules/guest/authentication/presentation/reducers/auth_reducer";
import AssetConstants from "../../../../constants/asset_constants";
import Logout from "../../../../../modules/guest/authentication/domain/usecases/logout";
import { BaseSyntheticEvent, useMemo, useState } from "react";
import { selectCommon, setConsumerCurrentMenu } from "../../../../AppRedux/reducers/common_reducer";

const { Header, Content, Footer, Sider } = Layout;

function BottomNavigation() {
  const location = useLocation().pathname;
  const dispatch = useAppDispatch();
  const [showBackButton, setShowBackButton] = useState(false);

  const { consumerCurrentMenu } = useAppSelector(selectCommon);
  const { authUser } = useAppSelector(selectAuth);
  const navigate = useNavigate();
  const onLogoutClick = () => {
    const logout = new Logout();
    dispatch(isAuthLoading(true));
    setTimeout(async () => {
      const resource = await logout.execute(authUser?.data.token!);
      resource.whenWithResult({
        success: (_) => {
          navigate("/");
          dispatch(userLogout());
          dispatch(isAuthLoading(false));
        },
      });
    });
  };

  useMemo(() => {
    const selectedCurrentMenu = (menu: string) => {
      if (menu === "/") {
        dispatch(setConsumerCurrentMenu("compost"));
      } else if (menu.includes("/detail") || menu.includes("/make-order") || menu.includes("/illustrator")) {
        dispatch(setConsumerCurrentMenu("compost"));
      } else if (menu.includes("/auth/")) {
        dispatch(setConsumerCurrentMenu("login"));
      } else if (menu.includes("/consumer/order") || menu.includes("/add-review")) {
        dispatch(setConsumerCurrentMenu("order"));
      } else if (menu.includes("/consumer/profile")) {
        dispatch(setConsumerCurrentMenu("profile"));
      } else {
        dispatch(setConsumerCurrentMenu(""));
      }
    };
    const showBackButtonHandle = () => {
      switch (location) {
        case "/":
          setShowBackButton(false);
          break;
        case "/consumer/order":
          setShowBackButton(false);
          break;
        case "/consumer/profile":
          setShowBackButton(false);
          break;
        default:
          setShowBackButton(true);
          break;
      }
    };
    showBackButtonHandle();
    selectedCurrentMenu(location);
  }, [location]);

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/consumer/profile">Profil</Link>
      </Menu.Item>

      <Menu.Item>
        <a onClick={onLogoutClick}>Logout</a>
      </Menu.Item>
    </Menu>
  );

  const isUserLoggedIn = authUser && authUser?.data.role === "consumer";

  return (
    <div className="w-full">
      <PageHeader
        style={{
          padding: "none",
          borderBottom: " 1px groove",
          borderBottomColor: "blue",
        }}
        className="site-page-header text-center shadow-sm bg-white"
      >
        <Row>
          <Col span={8} className=" m-auto ">
            {showBackButton ? (
              <Button className="my-auto text-center items-center flex hover:text-[#1890ff] hover:bg-inherit" onClick={() => navigate(-1)} type="text" icon={<LeftOutlined className="text-2xl " />}>
                Kembali
              </Button>
            ) : null}
          </Col>
          <Col span={8} className="text-center">
            <Image preview={false} width={120} src={`${AssetConstants.iconURL}logo/oc.png`} className="pb-2 align-middle" />
          </Col>
          <Col span={8}></Col>
        </Row>
      </PageHeader>
      <section id="bottom-navigation" className="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow-black shadow-md">
        {/* <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> */}
        {isUserLoggedIn ? (
          <div id="tabs" className="flex justify-between">
            <Link to="/" className={`w-full text-gray-500 ${consumerCurrentMenu === "compost" ? "text-[#1890ff]" : ""} focus:text-[#1890ff] hover:text-[#1890ff] justify-center inline-block text-center pt-2 pb-1`}>
              <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="tab tab-home block text-xs">Beranda</span>
            </Link>
            <Link to="/consumer/order" className={`w-full text-gray-500 ${consumerCurrentMenu === "order" ? "text-[#1890ff]" : ""} focus:text-[#1890ff] hover:text-[#1890ff] justify-center inline-block text-center pt-2 pb-1`}>
              <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="tab tab-kategori block text-xs">Pesanan</span>
            </Link>
            <Link to="/consumer/profile" className={`w-full text-gray-500 ${consumerCurrentMenu === "profile" ? "text-[#1890ff]" : ""}  hover:text-[#1890ff] justify-center inline-block text-center pt-2 pb-1`}>
              <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="tab tab-explore block text-xs">Profil</span>
            </Link>
          </div>
        ) : (
          <div id="tabs" className="flex justify-between">
            <Link to="/" className={`w-full text-gray-500 ${consumerCurrentMenu === "compost" ? "text-[#1890ff]" : ""} focus:text-[#1890ff] hover:text-[#1890ff] justify-center inline-block text-center pt-2 pb-1`}>
              <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="tab tab-home block text-xs">Beranda</span>
            </Link>
            {authUser === null ? (
              <Link to="/auth/login" className="w-full text-gray-500 focus:text-[#1890ff] hover:text-[#1890ff] justify-center inline-block text-center pt-2 pb-1">
                <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="tab tab-explore block text-xs">Login</span>
              </Link>
            ) : (
              <Link onClick={onLogoutClick} to="/auth/login" className="w-full text-gray-500 focus:text-[#1890ff] hover:text-[#1890ff] justify-center inline-block text-center pt-2 pb-1">
                <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="tab tab-explore block text-xs">Ganti Akun</span>
              </Link>
            )}
          </div>
        )}
      </section>
    </div>
  );
}

export default BottomNavigation;
