import { Typography, Row, Col, Rate, Image } from "antd";
import React from "react";
import IllustratorComposts from "../../../../../manage_compost/data/models/illustrators_composts";

type CommissionProps = {
  commission: IllustratorComposts;
};
function CommissionItem({ commission }: CommissionProps) {
  return (
    <div className="inline-block p-3 content-center ">
      <div className="comic-shadow-btn w-56 p-3 flex items-center  justify-center max-w-xs overflow-hidden rounded-lg hover:comic-shadow transition-shadow duration-300 ease-in-out">
        <div className="block">
          <div className=" flex items-center text-center justify-center">
            <Image
              src={commission.image_1}
              className="max-h-40 w-56 object-contain "
              style={{
                minHeight: "160px",
                maxWidth: "300px",
              }}
            />
          </div>
          <div className="p-3">
            <Typography.Title level={5}>{commission.title}</Typography.Title>
            <Row justify="space-between">
              <Col>
                <Typography.Text className="font-bold">Rp. {commission.price}</Typography.Text>
              </Col>
              <Col>
                <Rate disabled defaultValue={3} className="text-xs" />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommissionItem;
