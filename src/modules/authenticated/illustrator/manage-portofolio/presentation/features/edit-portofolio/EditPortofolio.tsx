import { Tabs } from "antd";
import React, { useEffect } from "react";
import CircularLoadingIndicator from "../../../../../../../core/common_components/CircularLoadingIndicator";
import usePortofolioHandler from "../portofolio/use_portofolio_handler";
import EditArtworks from "./components/EditArtworksTabs";
import EditProfileTabs from "./components/EditProfileTabs";

function EditPortofolio() {
  const { illustratorProfile, getIllustratorProfile, isLoading } = usePortofolioHandler();
  useEffect(() => {
    getIllustratorProfile();
  }, []);
  console.log({ illustratorProfile });

  const { TabPane } = Tabs;
  const callback = (key: any) => {
  };
  if (isLoading) return <CircularLoadingIndicator />;
  return (
    <div className="max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Edit Profile" key="1">
          {illustratorProfile != null ? <EditProfileTabs illustratorProfile={illustratorProfile} /> : null}
        </TabPane>
        <TabPane tab="Edit Portofolio" key="2">
          <EditArtworks />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default EditPortofolio;
