import { CloseCircleOutlined, LogoutOutlined } from "@ant-design/icons";
import { Col, Drawer, Row, Image, Button, Divider, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logout from "../../../../../modules/guest/authentication/domain/usecases/logout";
import { isAuthLoading, selectAuth, userLogout } from "../../../../../modules/guest/authentication/presentation/reducers/auth_reducer";
import { selectCommon, setIllustratorCurrentMenu, toggleCollapsedSideNav } from "../../../../AppRedux/reducers/common_reducer";
import { useAppDispatch, useAppSelector } from "../../../../utils/redux";

function DrawerSection() {
  const dispatch = useAppDispatch();
  const { navCollapsed, illustratorCurrentMenu } = useAppSelector(selectCommon);
  const location = useLocation().pathname;
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
      } else {
        dispatch(setIllustratorCurrentMenu(""));
      }
    };
    selectedCurrentMenu(location);
  }, [location]);

  const onCloseDrawer = () => {
    dispatch(toggleCollapsedSideNav(false));
  };
  return (
    <Drawer
      title={
        <Row justify="space-between">
          <Col span={12}>
            <Image src={`/assets/icons/logo/app_name.svg`} preview={false} />
          </Col>
          <Col span={12} className="text-right">
            <Button type="text" onClick={onCloseDrawer} icon={<CloseCircleOutlined className="text-base" />} />
          </Col>
        </Row>
      }
      placement="left"
      closable={false}
      onClose={onCloseDrawer}
      visible={navCollapsed}
      key="left"
      width={250}
    >
     <Menu key="drawer" activeKey={illustratorCurrentMenu} onClick={onChangeMenu} theme="light" mode="vertical">
        <Menu.Item key="manage_compost">
          <Link to="/manage/manage-compost"> Beranda</Link>
        </Menu.Item>
        <Menu.Item key="manage_order">
          <Link to="/manage/order">Pesanan</Link>
        </Menu.Item>
        <Menu.Item key="manage_earning">
          <Link to="/manage/earning">Pendapatan</Link>
        </Menu.Item>
        
          <Menu.Item key="manage_profile">
            <Link to="/manage/manage-portofolio">Profile</Link>
          </Menu.Item>

          <Divider />
          <Menu.Item key="logout">
            <Button icon={<LogoutOutlined />} type="dashed" className="text-center" onClick={onLogoutClick}>
              Logout
            </Button>
          </Menu.Item>
      </Menu>
    </Drawer>
  );
}
export default DrawerSection;
