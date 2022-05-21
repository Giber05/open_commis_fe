import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Descriptions, Result, Avatar, Space, Statistic, Image, Menu, Dropdown, message } from "antd";
import { CloseCircleOutlined, LikeOutlined, LogoutOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";

import { Outlet, useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import AssetConstants from "../../../../constants/asset_constants";
import { useSelector } from "react-redux";
import { selectCommon } from "../../../../AppRedux/reducers/common_reducer";
import { useAppDispatch, useAppSelector } from "../../../../utils/redux";
import Logout from "../../../../../modules/guest/authentication/domain/usecases/logout";
import { selectAuth, isAuthLoading, userLogout } from "../../../../../modules/guest/authentication/presentation/reducers/auth_reducer";

export default () => {
  const dispatch = useAppDispatch();
  const { authUser } = useAppSelector(selectAuth);
  const { width } = useSelector(selectCommon);
  const navigate = useNavigate();

  const [showSidebar, setShowSidebar] = useState(true);
  const [currentMenu, setCurrentMenu] = useState("");
  const location = useLocation().pathname;

  const onLogoutClick = () => {
    message.loading("Loading ...");
    const logout = new Logout();

    dispatch(isAuthLoading(true));
    setTimeout(async () => {
      const resource = await logout.execute(authUser?.data.token!);
      resource.whenWithResult({
        success: (_) => {
          message.success("Berhasil Logout");
          dispatch(userLogout());
          dispatch(isAuthLoading(false));
          navigate("/admin/auth/login");
        },
        error: (error) => {
          message.error(error.exception.message);
        },
      });
    });
  };

  useMemo(() => {
    const selectedCurrentMenu = (menu: string) => {
      if (menu === "/admin") {
        setCurrentMenu("DASHBOARD");
      } else if (menu.includes("/admin/manage-user")) {
        setCurrentMenu("KELOLA USER");
      } else if (menu.includes("/admin/manage-compost")) {
        setCurrentMenu("KELOLA COMMISSION POST");
      } else if (menu.includes("/admin/manage-review")) {
        setCurrentMenu("KELOLA ULASAN");
      } else {
        setCurrentMenu("");
      }
    };
    selectedCurrentMenu(location);
  }, [location]);

  const menu = (
    <Menu className="rounded-lg px-2">
      <Menu.Item key="0">
        <Button icon={<LogoutOutlined />} type="text" className="text-center" onClick={onLogoutClick}>
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="flex flex-row min-h-screen bg-[#f1f1f1] text-gray-800">
      <aside className={`sidebar fixed w-64 h-full  transform ${showSidebar ? "-translate-x-full" : ""}  z-10 md:translate-x-0 transition-transform duration-150 ease-in bg-white shadow-lg`}>
        <div className="flex justify-end text-right">{width < 768 ? <Button onClick={() => setShowSidebar(true)} type="text" icon={<CloseCircleOutlined />} /> : null}</div>
        <div className="sidebar-header flex items-center justify-center py-4">
          <div className="inline-flex">
            <a href="#" className="inline-flex flex-row items-center ">
              <Image width={150} preview={false} className="text-xs" src={`${AssetConstants.iconURL}logo/open_commiss.png`} />
            </a>
          </div>
        </div>
        <div className="sidebar-content px-4 py-6">
          <ul className="flex flex-col w-full list-none">
            <li className="my-px">
              <Link
                to="/admin"
                className={`flex flex-row items-center h-10 px-3 rounded-lg  hover:bg-gray-100 hover:bg-gradient-to-tr hover:from-sky-400 hover:to-primary hover:text-white  ${
                  currentMenu === "DASHBOARD" ? "bg-gradient-to-tr from-sky-400 to-primary text-white shadow-md" : "text-gray-500"
                }`}
              >
                <span className="flex items-center justify-center text-lg ">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`h-6 w-6 hover:text-white  ${currentMenu === "DASHBOARD" ? "text-white" : "text-gray-400"}`}
                  >
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </span>
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li className="my-px">
              <span className="flex font-medium text-sm text-gray-600 px-4 my-4 uppercase ">kelola</span>
            </li>
            <li className="my-px">
              <Link
                to="/admin/manage-user"
                className={`flex flex-row items-center h-10 px-3 rounded-lg  hover:bg-gray-100 hover:bg-gradient-to-tr hover:from-sky-400 hover:to-primary hover:text-white  ${
                  currentMenu === "KELOLA USER" ? "bg-gradient-to-tr from-sky-400 to-primary text-white shadow-md" : "text-gray-500"
                }`}
              >
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`h-6 w-6 hover:text-white  ${currentMenu === "KELOLA USER" ? "text-white" : "text-gray-400"}`}
                  >
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
                <span className="ml-3">Pengguna</span>
              </Link>
            </li>
            <li className="my-px">
              <Link
                to="/admin/manage-compost"
                className={`flex flex-row items-center h-10 px-3 rounded-lg  hover:bg-gray-100 hover:bg-gradient-to-tr hover:from-sky-400 hover:to-primary hover:text-white  ${
                  currentMenu === "KELOLA COMMISSION POST" ? "bg-gradient-to-tr from-sky-400 to-primary text-white shadow-md" : "text-gray-500"
                }`}
              >
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`h-6 w-6 hover:text-white  ${currentMenu === "KELOLA COMMISSION POST" ? "text-white" : "text-gray-400"}`}
                  >
                    <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </span>
                <span className="ml-3">Commission Post</span>
              </Link>
            </li>
            <li className="my-px">
              <Link
                to="/admin/manage-review"
                className={`flex flex-row items-center h-10 px-3 rounded-lg  hover:bg-gray-100 hover:bg-gradient-to-tr hover:from-sky-400 hover:to-primary hover:text-white  ${
                  currentMenu === "KELOLA ULASAN" ? "bg-gradient-to-tr from-sky-400 to-primary text-white shadow-md" : "text-gray-500"
                }`}
              >
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`h-6 w-6 hover:text-white  ${currentMenu === "KELOLA ULASAN" ? "text-white" : "text-gray-400"}`}
                  >
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </span>
                <span className="ml-3">Ulasan</span>
                {/* <span className="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto">1k</span> */}
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
        <header className="header bg-primary shadow py-4 px-4">
          <div className="header-content flex items-center flex-row">
            <div className="flex ml-64 md:hidden">{width < 768 ? <Button className="rounded-lg" onClick={() => setShowSidebar(false)} icon={<MenuOutlined />}></Button> : null}</div>
            <h1 className="font-bold text-base ml-3 md:text-2xl md:ml-64 text-white">{currentMenu}</h1>
            <div className="flex ml-auto">
              <Dropdown overlay={menu}>
                <div className="flex flex-row items-center text-primary">
                  <img src="https://pbs.twimg.com/profile_images/378800000298815220/b567757616f720812125bfbac395ff54_normal.png" alt="img" className="h-10 w-10 bg-gray-200 border rounded-full" />
                  <span className="flex flex-col ml-2">
                    <span className="truncate w-20 text-white font-semibold tracking-wide leading-none">{authUser?.data.user.name}</span>
                    <span className="truncate w-20 text-gray-200 text-xs leading-none mt-1">Administrator</span>
                  </span>
                </div>
              </Dropdown>
            </div>
          </div>
        </header>
        <div className="main-content flex flex-col flex-grow ml-64 ">
          <div className="flex flex-col flex-grow bg-[#f1f1f1] rounded ">
            <Outlet />
          </div>
        </div>
        <footer className="footer px-4 py-6  bg-primary">
          <div className="footer-content mx-auto">
            <p className={`text-sm text-white text-center ml-64 `}>© OpenCommiss 2022. All rights reserved. by KoTA 101</p>
          </div>
        </footer>
      </main>
    </div>
  );
};
