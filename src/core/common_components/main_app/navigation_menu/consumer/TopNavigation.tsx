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
  const isUserLoggedIn = authUser && authUser?.data.role === "consumer";
  const navigate = useNavigate();
  const [currentMenu, setCurrentMenu] = useState<CurrentMenu>({ current: "compost" });

  const onLogoutClick = () => {
    const logout = new Logout();

    dispatch(isAuthLoading(true));
    setTimeout(async () => {
      const resource = await logout.execute(authUser?.data.token!);
      resource.whenWithResult({
        success: (_) => {
          setCurrentMenu({ current: "compost" });

          navigate("/");
          dispatch(userLogout());
          dispatch(isAuthLoading(false));
        },
      });
    });
  };
  const onChangeMenu = (e: any) => {
    setCurrentMenu({ current: e.key });
  };
  return (
    <Header className="bg-white ">
      <div
        onClick={() => navigate("/")}
        style={{
          width: "120px",
          height: "31px",
          margin: "0 24px 16px 0",
          float: "left",
          
        }}
        className="cursor-pointer"
      >
        <Image src={`/assets/icons/logo/app_name.svg`} preview={false} />
      </div>
      {!isUserLoggedIn ? (
        <Menu activeKey={currentMenu.current} onClick={onChangeMenu} theme="light" mode="horizontal" className="border-solid">
          <Menu.Item key="compost">
            <Link to="/"> Beranda</Link>
          </Menu.Item>
          {authUser == null ? (
            <Menu.Item key="login">
              <Link to="/auth/login">Login</Link>
            </Menu.Item>
          ) : (
            <Menu.Item key="logout">
              <Link onClick={onLogoutClick} to="/auth/login">
                Ganti Akun
              </Link>
            </Menu.Item>
          )}
        </Menu>
      ) : (
        <Menu activeKey={currentMenu.current} onClick={onChangeMenu} theme="light" mode="horizontal" className="border-solid">
          <Menu.Item key="compost">
            <Link to="/"> Beranda</Link>
          </Menu.Item>
          <Menu.Item key="order">
            <Link to="/consumer/order">Pesanan</Link>
          </Menu.Item>
          <SubMenu key="account" title="Profil">
            <Menu.Item key="profile">
              <Link to="/consumer/profile">Profil</Link>
            </Menu.Item>

            <Divider />
            <Menu.Item key="logout">
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
