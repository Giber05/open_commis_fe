import { FacebookFilled, TwitterOutlined, InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Row, Col, Space, Typography } from "antd";
import React from "react";
import { PortofolioModel } from "../../../../../../../guest/illustrators_portofolio/data/models/portofolio_model";

type PortfolioProps = {
  portofolio?: PortofolioModel | null;
  phone: string;
};
function PortfolioSection({ portofolio, phone }: PortfolioProps) {
  return (
    <div>
      <div className="my-5">
        <Row justify="space-between" className="text-center">
          <Col xs={24} sm={12} lg={12}>
            <Space>
              <FacebookFilled style={{ color: "#2b3990" }} className="text-2xl" />
              <Typography.Title level={4}>{portofolio?.facebookAcc ?? "-"}</Typography.Title>
            </Space>
          </Col>
          <Col xs={24} sm={12} lg={12}>
            <Space>
              <WhatsAppOutlined style={{ color: "#3ab926" }} className="text-2xl  " />
              <Typography.Title level={4}>{phone}</Typography.Title>
            </Space>
          </Col>
          <Col xs={24} sm={12} lg={12}>
            <Space>
              <InstagramOutlined className="text-2xl text-[#ea4f52]" />
              <Typography.Title level={4}>{portofolio?.instagramAcc ?? "-"}</Typography.Title>
            </Space>
          </Col>
          <Col xs={24} sm={12} lg={12}>
            <Space>
              <TwitterOutlined style={{ color: "#00a2f3" }} className="text-2xl" />
              <Typography.Title level={4}>{portofolio?.twitterAcc ?? "-"}</Typography.Title>
            </Space>
          </Col>
        </Row>
      </div>
      <div className="mx-auto sm:w-4/5 md:w-2/3 lg:1/2 my-5">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 text-center">Tentang</h2>
        <Typography.Title level={5} className="text-center">
          {portofolio?.bio}{" "}
        </Typography.Title>
      </div>
    </div>
  );
}

export default PortfolioSection;
