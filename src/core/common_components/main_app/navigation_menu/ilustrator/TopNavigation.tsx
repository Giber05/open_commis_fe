import { Button, Layout, Menu, Typography, Image } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../../../../../modules/guest/authentication/domain/usecases/logout";
import { isAuthLoading, selectAuth, userLogout } from "../../../../../modules/guest/authentication/presentation/reducers/auth_reducer";
import AssetConstants from "../../../../constants/asset_constants";
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
    console.log(e.key);

    setCurrentMenu({ current: e.key });
  };
  const selectedKeys = window.location.pathname.substr(1);
  const defaultOpenKeys = (params: string): string[] => {
    const keys: string[] = [];
    const splitLink: string[] = params.split("/");
    splitLink.forEach((element) => {
      const i = splitLink.indexOf(element);
      if (keys.length === 0) {
        keys.push(element);
      } else {
        keys.push(`${keys[i - 1]}/${element}`);
      }
    });
    console.log({ keys });

    return keys;
  };
  return (
    <Header
      className="bg-white drop-shadow-xl border-b-4 border-black"
      style={{
        height: "68px",
      }}
    >
      <div
        style={{
          width: "120px",
          height: "31px",
          margin: "16px 24px 16px 0",
          float: "left",
        }}
      >
        <Image src={`${AssetConstants.iconURL}logo/app_name.svg`} preview={false} />
      </div>
      <Menu onClick={onChangeMenu} theme="light" mode="horizontal">
        <Menu.Item key="manage_compost">
          <Link to="/manage/manage-compost"> Beranda</Link>
        </Menu.Item>
        <Menu.Item key="order">
          <Link to="#">Pesananan</Link>
        </Menu.Item>
        <Menu.Item key="earning">
          <Link to="#">Pendapatan</Link>
        </Menu.Item>
        <Menu.Item>
          <Button onClick={onLogoutClick}>Logout</Button>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default TopNavigation;
