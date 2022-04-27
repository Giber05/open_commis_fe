import { Col, Modal, Row, Typography } from "antd";
import modal from "antd/lib/modal";
import { Link, Navigate, useNavigate } from "react-router-dom";
import SuccessButton from "../../../../../../../core/common_components/buttons/SuccessButton";
import OrderDetail from "./component/OrderDetail";
import ComPostDetail from "./component/ComPostDetail";
import PaymentDetail from "./component/PaymentDetail";
import useConsumerOrderDetailHandler from "./use_consumer_order_detail_handler";
import CircularLoadingIndicator from "../../../../../../../core/common_components/CircularLoadingIndicator";
import React, { useState, useEffect } from "react";

function DetailOrderCustomer() {
  const { getOrderDetail, isLoading, orderDetail } = useConsumerOrderDetailHandler();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getOrderDetail();
    console.log("Called get order detail");
  }, []);
  console.log("sakjfhajsfhljafhlajslasd");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setIsModalVisible(false);
      setConfirmLoading(false);
    }, 2000);
    navigate("/consumer/order/1001/reviewForm");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (isLoading) return <CircularLoadingIndicator />;
  return (
    <div className="max-w-3xl mx-auto py-3  sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <OrderDetail order={orderDetail!} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          {orderDetail?.commission == null ? null : <ComPostDetail compost={orderDetail?.commission!} />}
          <PaymentDetail payment={orderDetail?.payment ?? null} grandTotal={orderDetail?.grandTotal!} />
        </Col>
        <div className="mx-auto flex justify-center">
          <SuccessButton block title="Selesai" rounded onClick={showModal} />
        </div>
      </Row>
      <Modal title="Selesai" visible={isModalVisible} confirmLoading={confirmLoading} onOk={handleOk} onCancel={handleCancel}>
        <Typography.Text className="justify-center">Apakah anda yakin untuk menyelesaikan orderan ini ? </Typography.Text>
      </Modal>
    </div>
  );
}

export default DetailOrderCustomer;
