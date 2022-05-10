import { BackwardOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Col, PageHeader, Row, Image } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCommon, toggleCollapsedSideNav } from "../../../../AppRedux/reducers/common_reducer";
import AssetConstants from "../../../../constants/asset_constants";
import { useAppDispatch } from "../../../../utils/redux";

function OnCollapsedNav() {
  const { navCollapsed } = useSelector(selectCommon);
  const dispatch = useAppDispatch();
  const [showDrawerVisibility, setShowDrawerVisibility] = useState(false);
  const showDrawerVisibilityHandler = () => {
    dispatch(toggleCollapsedSideNav(true));
  };


  return (
    <PageHeader
      style={{
        padding: "none",
        borderBottom: " 1px groove",
        borderBottomColor: "blue",
      }}
      className="site-page-header text-center shadow-sm bg-white"
    >
      <Row>
        <Col span={8} className=" my-auto text-left ">
          <Button onClick={showDrawerVisibilityHandler} type="text" icon={<MenuOutlined className="text-3xl" />}></Button>
        </Col>
        <Col span={8} className="text-center">
          <Image preview={false} width={120} src={`${AssetConstants.iconURL}logo/oc.png`} className="pb-2 align-middle" />
        </Col>
        <Col span={8}></Col>
      </Row>
    </PageHeader>
  );
}

export default OnCollapsedNav;
