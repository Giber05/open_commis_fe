import { LogoutOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, Image, Divider, message, Typography } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logout from "../../../../../modules/guest/authentication/domain/usecases/logout";
import { isAuthLoading, selectAuth, userLogout } from "../../../../../modules/guest/authentication/presentation/reducers/auth_reducer";
import { selectCommon, setConsumerCurrentMenu } from "../../../../AppRedux/reducers/common_reducer";
import { useAppDispatch, useAppSelector } from "../../../../utils/redux";

const { Header } = Layout;

function TopNavigation() {
  const location = useLocation().pathname;
  const dispatch = useAppDispatch();
  const { consumerCurrentMenu } = useAppSelector(selectCommon);
  const { authUser } = useAppSelector(selectAuth);
  const isUserLoggedIn = authUser && authUser?.data.role === "consumer";
  const navigate = useNavigate();

  const onLogoutClick = () => {
    const logout = new Logout();

    dispatch(isAuthLoading(true));
    setTimeout(async () => {
      const resource = await logout.execute(authUser?.data.token!);
      resource.whenWithResult({
        success: (_) => {
          dispatch(setConsumerCurrentMenu("compost"));

          dispatch(userLogout());
          dispatch(isAuthLoading(false));
          navigate("/");
        },
        error: (error) => {
          message.error(error.exception.message);
        },
      });
    });
  };
  const onChangeMenu = (e: any) => {
    dispatch(setConsumerCurrentMenu(e.key));
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
    selectedCurrentMenu(location);
  }, [location]);

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
        <Image src={`/assets/icons/logo/open_commiss.png`} preview={false} />
      </div>
      {!isUserLoggedIn ? (
        <Menu activeKey={consumerCurrentMenu} onClick={onChangeMenu} theme="light" mode="horizontal" className="border-solid">
          <Menu.Item key="compost">
            <Link to="/"> Beranda</Link>
          </Menu.Item>
          {authUser == null ? (
            <Menu.Item key="login">
              <Link to="/auth/login">Login</Link>
            </Menu.Item>
          ) : (
            <Menu.Item key="logout">
              <Typography.Link onClick={onLogoutClick}>Menjadi Konsumen</Typography.Link>
            </Menu.Item>
          )}
        </Menu>
      ) : (
        <Menu activeKey={consumerCurrentMenu} onClick={onChangeMenu} theme="light" mode="horizontal" className="border-solid">
          <Menu.Item key="compost">
            <Link to="/"> Beranda</Link>
          </Menu.Item>
          <Menu.Item key="order">
            <Link to="/consumer/order">Pesanan</Link>
          </Menu.Item>
          <Menu.Item key="profile">
            <Link to="/consumer/profile">Profil</Link>
          </Menu.Item>
        </Menu>
      )}
    </Header>
  );
}

export default TopNavigation;
