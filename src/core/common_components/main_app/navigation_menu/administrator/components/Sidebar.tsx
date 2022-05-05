import { AreaChartOutlined, BookOutlined, DashboardOutlined, LoginOutlined, ProfileOutlined, SettingOutlined, TableOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  return (
    <>
      <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}>
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <a href="https://material-tailwind.com?ref=mtd" target="_blank" rel="noreferrer" className="mt-2 text-center w-full inline-block">
            <h6 color="gray">Material Tailwind</h6>
          </a>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg mb-4">
                <Link to="/" className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg">
                  <DashboardOutlined />
                  Dashboard
                </Link>
              </li>
              <li className="rounded-lg mb-2">
                <NavLink to="/settings" className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg">
                  <SettingOutlined />
                  Settings
                </NavLink>
              </li>
              <li className="rounded-lg mb-2 ">
                <NavLink to="/tables" className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg">
                  <TableOutlined />
                  Tables
                </NavLink>
              </li>
              <li className="rounded-lg mb-2 text-gray-700">
                <NavLink to="/maps" className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg">
                  <AreaChartOutlined />
                  Maps
                </NavLink>
              </li>
              <li className="px-4 rounded-lg mb-2 text-gray-700">
                <a href="https://demos.creative-tim.com/material-tailwind-kit-react/#/login" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-sm font-light py-3">
                  <LoginOutlined />
                  Login
                </a>
              </li>
              <li className="px-4 rounded-lg mb-2 text-gray-700">
                <a href="https://demos.creative-tim.com/material-tailwind-kit-react/#/register" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-sm font-light py-3">
                  <ProfileOutlined />
                  Register
                </a>
              </li>
              <li className="px-4 rounded-lg mb-2 text-gray-700">
                <a href="https://demos.creative-tim.com/material-tailwind-kit-react/#/landing" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-sm font-light py-3">
                  <BookOutlined />
                  Landing Page
                </a>
              </li>
              <li className="px-4 rounded-lg mb-2 text-gray-700">
                <a href="https://demos.creative-tim.com/material-tailwind-kit-react/#/profile" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-sm font-light py-3">
                  <ProfileOutlined />
                  Profile Page
                </a>
              </li>
            </ul>

            <ul className="flex-col min-w-full flex list-none absolute bottom-0">
              <li className="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 px-4 rounded-lg text-white mb-2">
                <a href="https://material-tailwind.com/documentation/quick-start" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-sm font-light py-3">
                  <BookOutlined />
                  Documentation
                </a>
              </li>
              <li className="bg-gradient-to-tr from-purple-500 to-purple-700 px-4 rounded-lg text-white">
                <a href="https://www.creative-tim.com/product/material-tailwind-dashboard-react" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-4 text-sm font-light py-3">
                  Free Download
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
