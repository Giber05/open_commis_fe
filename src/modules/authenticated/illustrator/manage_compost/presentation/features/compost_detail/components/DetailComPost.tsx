import { Card, Col, Row, Tag, Typography } from "antd";
import React from "react";
import DangerButton from "../../../../../../../../core/common_components/buttons/DangerButton";

function DetailComPost() {
  return (
    <Card className="comic-shadow rounded-2xl">
      <Row>
        <Col xs={24} sm={24} lg={12} className="text-base leading-10">
          <Typography.Text className="">Pesanan: 10</Typography.Text>
          <br />
          <span>
            Status : <Typography.Text className=" text-green-500">Tersedia</Typography.Text>
          </span>
          <br />
          <span>
            Harga : <Typography.Text className="w- font-bold">1020000</Typography.Text>
          </span>
          <br />
          <div>
            <Tag color="magenta">magenta</Tag>
            <Tag color="red">red</Tag>
            <Tag color="volcano">volcano</Tag>
            <Tag color="orange">orange</Tag>
            <Tag color="gold">gold</Tag>
            <Tag color="lime">lime</Tag>
          </div>
        </Col>
        <Col xs={24} sm={24} lg={12}>
          <Col>
            <h3>Deskripsi</h3>
          </Col>
          <Col>
            <p>
              But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
              the master-builder of human happiness.
            </p>
          </Col>
        </Col>
      </Row>
      <Row justify="center" className="mt-3">
        <DangerButton title="TUTUP COMMISSION" rounded />
      </Row>
    </Card>
  );
}

export default DetailComPost;
