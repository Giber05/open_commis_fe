import Icon, { CloseCircleOutlined, MenuOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Menu } from "antd";
import Search from "antd/lib/input/Search";
import { useLocation } from "react-router-dom";
import AssetConstants from "../../../../../constants/asset_constants";

export default function AdminNavbar({ showSidebar, setShowSidebar }: any) {
  const location = useLocation().pathname;
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );
  return (
    <nav className="bg-light-blue-500 md:ml-64 py-6 px-3">
      <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
        <div className="md:hidden">
          <Button color="transparent" type="link" size="large" icon={<MenuOutlined />} onClick={() => setShowSidebar("left-0")}></Button>
          <div className={`absolute top-2 md:hidden ${showSidebar === "left-0" ? "left-64" : "-left-64"} z-50 transition-all duration-300`}>
            <Button color="transparent" type="link" size="large" icon={<CloseCircleOutlined />} onClick={() => setShowSidebar("-left-64")}></Button>
          </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <h4 className="uppercase text-white text-sm tracking-wider mt-1">{location === "/" ? "DASHBOARD" : location.toUpperCase().replace("/", "")}</h4>

          <div className="flex">
            <Search placeholder="Search" />

            <div className="-mr-4 ml-6">
              <Dropdown overlay={menu} placement="bottomLeft">
                <div className="w-12">
                  <Avatar src={`${AssetConstants.imageURL}placeholder/profile_placeholder.png`} shape="circle" />
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
