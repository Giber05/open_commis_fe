import { Tabs } from "antd";
import React from "react";
import EditArtworks from "./components/EditArtworksTabs";
import EditProfileTabs from "./components/EditProfileTabs";

function EditPortofolio() {
  const { TabPane } = Tabs;
  const callback = (key: any) => {
    console.log(key);
  };
  return (
    <div className="max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Edit Profile" key="1">
          <EditProfileTabs />
        </TabPane>
        <TabPane tab="Edit Portofolio" key="2">
          <EditArtworks />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default EditPortofolio;
