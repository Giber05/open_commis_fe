import { Row, Col, Avatar, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import InfoButton from "../../../../../../../core/common_components/buttons/InfoButton";
import AssetConstants from "../../../../../../../core/constants/asset_constants";
import { UserTypeModel } from "../../../../../../common/authentication/data/model/user_type_model";
import UserModel from "../../../../../authentication/data/models/user_model";

type IllustratorProps = {
  illustrator: UserTypeModel;
};
function IllustratorSection({ illustrator }: IllustratorProps) {
  return (
    <div className="text-left mx-4">
      <h3>Diilustrasikan oleh </h3>
      <Row justify="space-between">
        <Col span={16} className="align-middle">
          <Row wrap gutter={8}>
            <Col>
              <Avatar size={{ xs: 60, sm: 72, md: 84, lg: 92, xl: 100, xxl: 120 }} src={illustrator.profilePicture == null ? AssetConstants.imageURL + "placeholder/profile_placeholder.png" : illustrator.profilePicture} />
            </Col>
            <Col span={16} className="my-auto">
              <Col>
                <Typography.Text className="font-bold">{illustrator.name}</Typography.Text>
              </Col>
              <Col>
                <Typography.Text className="font-semibold text-gray-400">Availlable</Typography.Text>
              </Col>
            </Col>
          </Row>
        </Col>
        <Col span={8} className="m-auto">
          <Link to={`/illustrator/${illustrator.id}`}>
            <InfoButton title="Lihat Profil" rounded />
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default IllustratorSection;
