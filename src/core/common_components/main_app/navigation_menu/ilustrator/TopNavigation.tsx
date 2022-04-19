import { LogoutOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, Typography, Image, Row, Col, Divider } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import Text from "antd/lib/typography/Text";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../../../../../modules/guest/authentication/domain/usecases/logout";
import { isAuthLoading, selectAuth, userLogout } from "../../../../../modules/guest/authentication/presentation/reducers/auth_reducer";
import { useAppDispatch, useAppSelector } from "../../../../utils/redux";

const { Header } = Layout;

type CurrentMenu = {
  current: string;
};

function TopNavigation() {
  const dispatch = useAppDispatch();
  const { authUser } = useAppSelector(selectAuth);
  const [currentMenu, setCurrentMenu] = useState<CurrentMenu>({ current: "manage_compost" });

  const onLogoutClick = () => {
    const logout = new Logout();
    dispatch(isAuthLoading(true));
    setTimeout(async () => {
      const resource = await logout.execute(authUser?.data.token!);
      resource.whenWithResult({
        success: (_) => {
          dispatch(userLogout());
          dispatch(isAuthLoading(false));
        },
      });
    }, );
  };

  const onChangeMenu = (e: any) => {

    setCurrentMenu({ current: e.key });
  };

  return (
    <Header className="bg-white ">
      <div
        style={{
          width: "120px",
          height: "31px",
          margin: "0 24px 16px 0",
          float: "left",
        }}
      >
        <Image src={`/assets/icons/logo/app_name.svg`} preview={false} />
      </div>
      <Menu activeKey={currentMenu.current} onClick={onChangeMenu} theme="light" mode="horizontal" className="border-solid">
        <Menu.Item key="manage_compost">
          <Link to="/manage/manage-compost"> Beranda</Link>
        </Menu.Item>
        <Menu.Item key="order">
          <Link to="">Pesananan</Link>
        </Menu.Item>
        <Menu.Item key="earning">
          <Link to="/manage/earning">Pendapatan</Link>
        </Menu.Item>
        <SubMenu  title="Profile">
          <Menu.Item>
            <Link to="/manage/manage-portofolio">
              Profile
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/manage/profile">
              Portofolio
            </Link>
          </Menu.Item>
          <Divider/>
          <Menu.Item>
            <Button icon={<LogoutOutlined/>} type="dashed" className="text-center" onClick={onLogoutClick}>
              Logout
            </Button >
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  );
}

export default TopNavigation;
