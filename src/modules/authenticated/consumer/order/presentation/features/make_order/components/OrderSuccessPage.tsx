import { CheckCircleOutlined, OrderedListOutlined, ShoppingCartOutlined, ShoppingFilled } from "@ant-design/icons";
import { Button, Card, Col, Result, Row } from "antd";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import InfoButton from "../../../../../../../../core/common_components/buttons/InfoButton";
import ResultSuccess from "../../../../../../../../core/common_components/feedback/ResultSuccess";
import { runFireworks } from "../../../../../../../../core/utils/fireworks/fireworks";

function OrderSuccessPage() {
  const { orderId } = useParams();

  useEffect(() => {
    runFireworks();
  }, []);
  return (
    <div className="bg-white" style={{ minHeight: "60vh" }}>
      <div
        className="mt-10 shadow-xl"
        style={{
          width: "80%",
          margin: "auto",
          backgroundColor: "#dcdcdc",
          padding: "50px",
          borderRadius: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <div
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          style={{
            color: "green",
          }}
        >
          <ShoppingFilled />
        </div>
        <h2
          className="capitalize font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          style={{
            color: "#324d67",
          }}
        >
          Terimakasih atas pembelian Anda!
        </h2>
        <p className="text-sm sm:text-base font-semibold ">Cek kotak pesan email anda untuk melihat invoice.</p>
        <p className="text-sm sm:text-base font-semibold text-center m-2 mt-8">
          Jika Anda memiliki pertanyaan, silahkan email
          <a className="ml-1" style={{ color: "#f02d34" }} href="mailto:opencommiss@gmail.com">
            opencommiss@gmail.com
          </a>
        </p>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center" className="my-2 ">
          <Col xs={24} sm={24} md={12} lg={12}>
            <Link to="/">
              <Button className="comic-shadow-btn bg-gray-50 text-primary hover:bg-primary hover:text-white border-primary  rounded-full">Lanjutkan Belanja</Button>
            </Link>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Link to={`/consumer/order/${orderId}`}>
              <Button className="comic-shadow-btn bg-gray-50 text-submit hover:bg-submit hover:text-white border-submit rounded-full mt-5 md:mt-0">Lihat Pesanan</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default OrderSuccessPage;
