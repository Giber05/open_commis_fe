import { Card, Row, Col, Typography } from "antd";
import React from "react";
import ConsumerModel from "../../../../../../../../common/authentication/data/model/consumer_model";

type ConsumerProps = {
  consumer :ConsumerModel;
}
function ConsumerSection({consumer}:ConsumerProps) {
  return (
    <Card title="Konsumen" className="comic-shadow rounded-xl">
      <Row justify="space-between" className="">
        <Col span={8} className="leading-loose my-auto">
          <Typography.Text type="secondary" className="text-xs mb-1 sm:text-[10] md:text-xs lg:text-sm xl:text-base font-semibold">
            Nama:
          </Typography.Text>
        </Col>
        <Col span={16} className="leading-loose text-right my-auto">
          <Typography.Text className="text-xs mb-1 sm:text-md md:text-xs lg:text-sm xl:text-base  font-semibold">{consumer?.name}</Typography.Text>
        </Col>
      </Row>
      <Row justify="space-between" className="">
        <Col span={8} className="leading-loose my-auto">
          <Typography.Text type="secondary" className="text-xs mb-1 sm:text-base md:text-xs lg:text-sm xl:text-base font-semibold">
            Telepon:
          </Typography.Text>
        </Col>
        <Col span={16} className="leading-loose text-right my-auto">
          <Typography.Text className="text-xs mb-1 sm:text-base md:text-xs lg:text-sm xl:text-base  font-semibold">{consumer?.phone}</Typography.Text>
        </Col>
      </Row>
      <Row justify="space-between" className="">
        <Col span={8} className="leading-loose my-auto">
          <Typography.Text type="secondary" className="text-xs mb-1 sm:text-base md:text-xs lg:text-sm xl:text-base font-semibold">
            Email:
          </Typography.Text>
        </Col>
        <Col span={16} className="leading-loose text-right my-auto">
          <Typography.Text className="text-xs mb-1 sm:text-base md:text-xs lg:text-sm xl:text-base  font-semibold">{consumer?.email}</Typography.Text>
        </Col>
      </Row>
    </Card>
  );
}

export default ConsumerSection;
