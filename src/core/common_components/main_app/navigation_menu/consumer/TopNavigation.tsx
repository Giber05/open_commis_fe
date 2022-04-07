import { Button, Layout, Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../../../../../modules/guest/authentication/domain/usecases/logout";
import { isAuthLoading, selectAuth, userLogout } from "../../../../../modules/guest/authentication/presentation/reducers/auth_reducer";
import { useAppDispatch, useAppSelector } from "../../../../utils/redux";

const { Header } = Layout;

function TopNavigation() {
  const dispatch = useAppDispatch();
  const { authUser } = useAppSelector(selectAuth);

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
    return keys;
  };
  return (
    <Header>
      <div
        style={{
          float: "left",
          width: "120px",
          height: "31px",
          margin: "16px 24px 16px 0",
          background: "rgba(255, 255, 255, 0.2)",
        }}
      />
      <Menu theme="dark" mode="horizontal" defaultOpenKeys={defaultOpenKeys(selectedKeys)} selectedKeys={defaultOpenKeys(selectedKeys)} className="text-blue-50">
        <Menu.Item>
          <Link to="/"> Commission Post</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/auth/login"> Login</Link>
        </Menu.Item>
        {authUser === null ? null : (
          <Menu.Item>
            <Button onClick={onLogoutClick}>Logout</Button>
          </Menu.Item>
        )}
      </Menu>
    </Header>
  );
}

export default TopNavigation;
