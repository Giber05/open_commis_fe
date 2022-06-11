import { ArrowDownOutlined, UserSwitchOutlined } from "@ant-design/icons";
import { Avatar, Col, Image, Row } from "antd";
import React from "react";
import AssetConstants from "../../../../../../../../core/constants/asset_constants";
import IlustratorModel from "../../../../../../../common/authentication/data/model/ilustrator_model";
type IllustratorProps = {
  illustrator: IlustratorModel;
};
function RequestItem({ illustrator }: IllustratorProps) {
  return (
    <div className="w-3/4 md:w-3/4 lg:w-full xl:w-full bg-white rounded-xl  shadow-md p-4 mx-auto h-48 ">
      <div>
        <div className="flex flex-wrap border-b border-gray-200 ">
          <div className="bg-gradient-to-tr from-green-300 to-submit -mt-10 mb-4 rounded-full text-white grid items-center w-24 h-24  justify-center shadow-lg-orange">
            <Avatar size={{ xs: 84, sm: 84, md: 84, lg: 84, xl: 100, xxl: 100 }} shape="circle" className="" src={illustrator.profilePicture ?? AssetConstants.imageURL + "placeholder/profile_placeholder.png"} />
          </div>
          <div className="w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right ">
            <h5 className="text-gray-700 font-light tracking-wide text-base mb-1">Illustrator #{illustrator.id}</h5>
            <span className="text-xl text-gray-900 ">{illustrator.name.length >= 18 ? illustrator.name.substring(0, 18) + "..." : illustrator.name}</span>
          </div>
        </div>
        <div className="text-sm text-gray-700 pt-4 flex-1 items-center ">
          <Row justify="space-between" gutter={16}>
            <Col>{illustrator.verified ? <span className="text-green-500 font-bold">Terverifikasi</span> : <span className="text-red-500 font-bold">Belum Terverifikasi</span>}</Col>
            <Col>
              <span className="font-light  whitespace-nowrap">{illustrator.email}</span>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default RequestItem;
