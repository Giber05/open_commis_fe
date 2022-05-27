import { Button, Card, Col, Form, Modal, Radio, Row, Space, Tabs, Typography } from "antd";
import { Link, Navigate, useNavigate } from "react-router-dom";
import SuccessButton from "../../../../../../../core/common_components/buttons/SuccessButton";
import OrderDetail from "./component/OrderDetail";
import ComPostDetailTab from "./component/ComPostDetailTab";
import PaymentDetail from "./component/PaymentDetail";
import useConsumerOrderDetailHandler from "./use_consumer_order_detail_handler";
import CircularLoadingIndicator from "../../../../../../../core/common_components/CircularLoadingIndicator";
import React, { useState, useEffect } from "react";
import { OrderStatus } from "../../../../../../../core/utils/enums";
import InfoButton from "../../../../../../../core/common_components/buttons/InfoButton";
import DisabledButton from "../../../../../../../core/common_components/buttons/DisabledButton";
import Icon, { BankOutlined, BankTwoTone, CreditCardOutlined, CreditCardTwoTone, HomeOutlined, ProfileTwoTone, ShopTwoTone, WalletTwoTone } from "@ant-design/icons";
import PaymentMethodModal from "./component/PaymentMethodModal";
import FinishOrderModal from "./component/FinishOrderModal";
import NotFound from "../../../../../../../core/common_components/NotFound";
import { UtilMethods } from "../../../../../../../core/utils/util_methods";
import IllustratorTab from "./component/IllustratorTab";
import TrackOrder from "./component/TrackOrder";

const { TabPane } = Tabs;

function DetailOrderCustomer() {
  const { getOrderDetail, isLoading, orderDetail, changePaymentModalVisibility, changeFinishOrderModalVisibility } = useConsumerOrderDetailHandler();

  useEffect(() => {
    getOrderDetail();
    window.scroll(0, 0);
  }, []);

  const showPaymentModal = () => {
    changePaymentModalVisibility(true);
  };
  const showFinishModal = () => {
    changeFinishOrderModalVisibility(true);
  };

  const handleMakePayment = (url: string) => {
    const win = window.open(url, "_blank");
    win?.focus();
  };

  const orderButtons = (status: string) => {
    switch (status) {
      case OrderStatus.Created:
        return <DisabledButton title="Lakukan Pembayaran" rounded />;
      case OrderStatus.Accepted:
        if (orderDetail?.payment == null) {
          // if (paymentExpDate.isStillValid) {
          return <InfoButton size="large" title="Lakukan Pembayaran" rounded onClick={showPaymentModal} />;
          // } else {
          //   return <DisabledButton title="Pesanan Kadaluarsa" rounded />;
          // }
        }
        return <InfoButton onClick={() => handleMakePayment(orderDetail?.payment?.paymentLink!)} title="Selesaikan Pembayaran" rounded />;

      case OrderStatus.NotPaid:
        return <InfoButton onClick={() => handleMakePayment(orderDetail?.payment?.paymentLink!)} title="Selesaikan Pembayaran" rounded />;
      case OrderStatus.OnWork:
        return <DisabledButton title="Selesaikan Pesanan" rounded />;
      case OrderStatus.Sent:
        return <SuccessButton block title="Selesaikan Pesanan" rounded onClick={showFinishModal} />;
      case OrderStatus.Finished:
        return (
          <Link to={`/consumer/${orderDetail?.id}/add-review`}>
            <InfoButton title="Beri Ulasan" rounded />
          </Link>
        );
      default:
        return null;
    }
  };

  if (isLoading) return <CircularLoadingIndicator />;
  else if (orderDetail == null) {
    return <NotFound />;
  }
  const paymentExpDate = UtilMethods.getExpPaymentDate(orderDetail?.orderDate);

  return (
    <div className="max-w-3xl mx-auto py-3  sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Card className="comic-shadow">
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab="Pesanan" key="1">
                <OrderDetail order={orderDetail!} />
              </TabPane>
              <TabPane tab="Lacak Pesanan" key="2">
                <TrackOrder />
              </TabPane>
            </Tabs>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          {orderDetail?.commission == null ? null : (
            <Card className="comic-shadow">
              <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Illustrator" key="1">
                  <IllustratorTab illustrator={orderDetail?.illustrator} />
                </TabPane>
                <TabPane tab="Commission Post" key="2">
                  <ComPostDetailTab compost={orderDetail?.commission} />
                </TabPane>
              </Tabs>
            </Card>
          )}
          <PaymentDetail payment={orderDetail?.payment ?? null} grandTotal={orderDetail?.grandTotal!} />
        </Col>
        <div className="mx-auto mt-9 ">{orderDetail?.reviewed == false ? orderButtons(orderDetail?.status!) : <DisabledButton title="Telah diberi ulasan" rounded />}</div>
      </Row>
      {orderDetail?.status == OrderStatus.Accepted ? <PaymentMethodModal /> : orderDetail?.status == OrderStatus.Sent ? <FinishOrderModal /> : null}
    </div>
  );
}

export default DetailOrderCustomer;
