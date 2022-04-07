import { Button, Layout, Menu, Typography, Image } from "antd";
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
      <Menu onClick={onChangeMenu} theme="light" mode="horizontal" className="border-solid">
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
