import { LogoutOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, Typography, Image, Row, Col, Divider } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import Text from "antd/lib/typography/Text";
import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logout from "../../../../../modules/guest/authentication/domain/usecases/logout";
import { isAuthLoading, selectAuth, userLogout } from "../../../../../modules/guest/authentication/presentation/reducers/auth_reducer";
import { selectCommon, setIllustratorCurrentMenu } from "../../../../AppRedux/reducers/common_reducer";
import { useAppDispatch, useAppSelector } from "../../../../utils/redux";

const { Header } = Layout;

function TopNavigation() {
  const dispatch = useAppDispatch();
  const location = useLocation().pathname;
  const { illustratorCurrentMenu } = useAppSelector(selectCommon);
  const { authUser } = useAppSelector(selectAuth);

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
    });
  };

  const onChangeMenu = (e: any) => {
    dispatch(setIllustratorCurrentMenu(e.key));
  };
  useMemo(() => {
    const selectedCurrentMenu = (menu: string) => {
      if (menu.includes("/manage-compost")) {
        dispatch(setIllustratorCurrentMenu("manage_compost"));
      } else if (menu.includes("/order")) {
        dispatch(setIllustratorCurrentMenu("manage_order"));
      } else if (menu.includes("/earning")) {
        dispatch(setIllustratorCurrentMenu("manage_earning"));
      } else if (menu.includes("/manage-portofolio")) {
        dispatch(setIllustratorCurrentMenu("manage_profile"));
      } 
      else {
        dispatch(setIllustratorCurrentMenu(""));

      }
    };
    selectedCurrentMenu(location);
  }, [location]);

  return (
    <Header className="bg-white ">
      <Link
        to="/"
        style={{
          width: "120px",
          height: "31px",
          margin: "0 24px 16px 0",
          float: "left",
        }}
      >
        <Image src={`/assets/icons/logo/open_commiss.png`} preview={false} />
      </Link>
      <Menu activeKey={illustratorCurrentMenu} onClick={onChangeMenu} theme="light" mode="horizontal" className="border-solid">
        <Menu.Item key="manage_compost">
          <Link to="/manage/manage-compost"> Beranda</Link>
        </Menu.Item>
        <Menu.Item key="manage_order">
          <Link to="/manage/order">Pesanan</Link>
        </Menu.Item>
        <Menu.Item key="manage_earning">
          <Link to="/manage/earning">Pendapatan</Link>
        </Menu.Item>
        <SubMenu key="account" title="Profile">
          <Menu.Item key="manage_profile">
            <Link to="/manage/manage-portofolio">Profile</Link>
          </Menu.Item>

          <Divider />
          <Menu.Item key="logout">
            <Button icon={<LogoutOutlined />} type="dashed" className="text-center" onClick={onLogoutClick}>
              Logout
            </Button>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  );
}

export default TopNavigation;
