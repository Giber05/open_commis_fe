import { MailOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Avatar, Tooltip, Typography } from "antd";
import React from "react";
import AssetConstants from "../../../../../../../../core/constants/asset_constants";
import IlustratorModel from "../../../../../../../common/authentication/data/model/ilustrator_model";

type IllustratorTabProps = {
  illustrator: IlustratorModel;
};
function IllustratorTab({ illustrator }: IllustratorTabProps) {
  const waLink = "https://wa.me/" + "62" + illustrator.phone.substring(1, 13);

  return (
    <div className="">
      <div className="w-full bg-white rounded-xl  shadow-md p-4 undefined">
        <div className="flex flex-wrap justify-center">
          <div className="px-4 text-center">
            <Avatar size={{ xs: 60, sm: 72, md: 84, lg: 92, xl: 100, xxl: 120 }} src={illustrator.profilePicture == null ? AssetConstants.imageURL + "placeholder/profile_placeholder.png" : illustrator.profilePicture} />
          </div>
          <div className="w-full flex justify-center py-2 lg:pt-4 ">
            <a href={waLink} target="_blank" className="p-4 text-center hover-scale-up ">
              <Tooltip placement="top" title="Klik Untuk Menghubungi Ilustrator">
                <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
                  <WhatsAppOutlined className="text-green-500" />
                </span>
                <span className="text-sm text-gray-700 truncate">{illustrator.phone}</span>
              </Tooltip>
            </a>
            <a href={`mailto:${illustrator.email}`} target="_blank" className="p-4 text-center flex flex-col ml-2 hover-scale-up">
              <Tooltip placement="top" title="Klik Untuk Menghubungi Ilustrator">
                <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
                  <MailOutlined className="text-red-500" />
                </span>
                <span className="text-sm text-gray-700 truncate w-24 sm:w-36 md:w-20 lg:w-full">{illustrator.email}</span>
              </Tooltip>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-gray-900 text-2xl font-serif font-bold leading-normal mt-0 mb-2">{illustrator.name}</h1>
          <div className="mt-0 mb-2 text-gray-700 flex items-center justify-center gap-2">
            <Typography.Title
              level={5}
              style={{
                textAlign: "center",
                color: illustrator?.available ? "limegreen" : "red",
              }}
            >
              {illustrator?.available ? "TERSEDIA" : "TIDAK TERSEDIA"}
            </Typography.Title>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IllustratorTab;
