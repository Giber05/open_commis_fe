import { LogoutOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, Image, Divider } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
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
  const isUserLoggedIn = authUser && authUser?.data.role ==="consumer"
  console.log({isUserLoggedIn});
  
  const [currentMenu, setCurrentMenu] = useState<CurrentMenu>({ current: "compost" });

  const onLogoutClick = () => {
    const logout = new Logout();
    dispatch(isAuthLoading(true));
    setTimeout(async () => {
      const resource = await logout.execute();
      resource.whenWithResult({
        success: (_) => {
          dispatch(userLogout());
          dispatch(isAuthLoading(false));
        },
      });
    }, 1000);
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
      {!isUserLoggedIn ? (
        <Menu activeKey={currentMenu.current} onClick={onChangeMenu} theme="light" mode="horizontal" className="border-solid">
          <Menu.Item key="compost">
            <Link to="/"> Beranda</Link>
          </Menu.Item>
          <Menu.Item key="login">
            <Link to="/auth/login">Login</Link>
          </Menu.Item>
        </Menu>
      ) : (
        <Menu activeKey={currentMenu.current} onClick={onChangeMenu} theme="light" mode="horizontal" className="border-solid">
          <Menu.Item key="compost">
            <Link to="/"> Beranda</Link>
          </Menu.Item>
          <Menu.Item key="order">
            <Link to="/consumer/order">Pesananan</Link>
          </Menu.Item>
          <SubMenu title="Profil">
            <Menu.Item>
              <Link to="/consumer/profile">Profil</Link>
            </Menu.Item>

            <Divider />
            <Menu.Item>
              <Button icon={<LogoutOutlined />} type="dashed" className="text-center" onClick={onLogoutClick}>
                Logout
              </Button>
            </Menu.Item>
          </SubMenu>
        </Menu>
      )}
    </Header>
  );
}

export default TopNavigation;
