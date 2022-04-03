import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

function TopNavigation() {
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
      <Menu theme="dark" mode="horizontal" defaultOpenKeys={defaultOpenKeys(selectedKeys)} selectedKeys={defaultOpenKeys(selectedKeys)}>
        <Menu.Item>
          <Link to="/"> Commission Post</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/login"> Commission Post</Link>
        </Menu.Item>
        <Menu.Item>
          <div>nav 2</div>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default TopNavigation;
