import { Typography, Row, Col, Rate, Image } from "antd";
import React from "react";
import { ArtworkModel } from "../../../../data/models/artwork_model";

type CommissionProps = {
  commission: ArtworkModel;
};
function IllustratorsCommissionSection({ commission }: CommissionProps) {
  return (
    <div className="inline-block p-3 content-center">
      <div className="comic-shadow-btn w-56 p-3 flex items-center justify-center max-w-xs overflow-hidden rounded-lg hover:comic-shadow transition-shadow duration-300 ease-in-out">
        <div className="block">
          <div className=" flex items-center text-center justify-center">
            <Image
              src={commission?.image == undefined ? "https://thumb.zigi.id/frontend/thumbnail/2021/06/04/zigi-60b9e121dab72-go-yoon-jung_910_512.jpeg" : commission.image}
              className="max-h-40 w-56 object-contain "
              style={{
                minHeight: "160px",
                maxWidth: "300px",
              }}
            />
          </div>
          <div className="p-3">
            <Typography.Title level={5}>Commission Title</Typography.Title>
            <Row justify="space-between">
              <Col>
                <Typography.Text className="font-bold">Commission Price</Typography.Text>
              </Col>
              <Col>
                <Rate disabled defaultValue={5} className="text-xs" />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IllustratorsCommissionSection;
