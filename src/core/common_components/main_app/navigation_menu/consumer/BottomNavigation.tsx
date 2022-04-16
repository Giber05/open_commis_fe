import { Card, Layout, Menu, PageHeader, Image } from "antd";
import { BorderBottomOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../utils/redux";
import { selectAuth } from "../../../../../modules/guest/authentication/presentation/reducers/auth_reducer";
import AssetConstants from "../../../../constants/asset_constants";

const { Header, Content, Footer, Sider } = Layout;

function BottomNavigation() {
  const { authUser } = useAppSelector(selectAuth);

  return (
    <div className="w-full">
      <PageHeader 
        style={{
          padding:"none",
          borderBottom:" 1px groove",
          borderBottomColor:"blue"
        }} 
        className="site-page-header text-center shadow-sm bg-white">
        <Image 
          preview={false} 
          width={140} 
          src={`${AssetConstants.iconURL}logo/app_name.svg`}
          className="pb-3 align-middle"
           />
      </PageHeader>
      <section id="bottom-navigation" className="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow-black shadow-md">
        {/* <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> */}
        {authUser != null ? (
          <div id="tabs" className="flex justify-between">
            <Link to="/" className="w-full text-gray-500 focus:text-[#1890ff] hover:text-[#1890ff] justify-center inline-block text-center pt-2 pb-1">
              <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="tab tab-home block text-xs">Beranda</span>
            </Link>
            <Link to="/order" className="w-full text-gray-500 focus:text-[#1890ff] hover:text-[#1890ff] justify-center inline-block text-center pt-2 pb-1">
              <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="tab tab-kategori block text-xs">Pesanan</span>
            </Link>
            <Link to="#" className="w-full text-gray-500 focus:text-[#1890ff] hover:text-[#1890ff] justify-center inline-block text-center pt-2 pb-1">
              <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="tab tab-explore block text-xs">Profil</span>
            </Link>
          </div>
        ) : (
          <div id="tabs" className="flex justify-between">
            <Link to="/" className="w-full text-gray-500 focus:text-[#1890ff] hover:text-[#1890ff] justify-center inline-block text-center pt-2 pb-1">
              <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="tab tab-home block text-xs">Beranda</span>
            </Link>

            <Link to="/auth/login" className="w-full text-gray-500 focus:text-[#1890ff] hover:text-[#1890ff] justify-center inline-block text-center pt-2 pb-1">
              <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="tab tab-explore block text-xs">Login</span>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}

export default BottomNavigation;
