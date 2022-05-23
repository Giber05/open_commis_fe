import {  Tabs, Typography, } from "antd";

import TabFormUsingFile from "./components/TabFormUsingFile";
import TabFormUsingLink from "./components/TabFormUsingLink";


const { TabPane } = Tabs;

function SendOrder() {

  return (
    <div>
      <div
        style={{
          padding: "35px 35px 20px",
        }}
        className="max-w-full w-11/12 m-auto text-sm shadow-none"
      >
        <Typography className="text-center my-3 text-black text-2xl font-bold">Pengiriman</Typography>
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Kirim File" key="1">
            <TabFormUsingFile />
          </TabPane>
          <TabPane tab="Kirim Via Cloud Storage" key="2">
            <TabFormUsingLink />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default SendOrder;
