import { Card, Col, Row, Tag, Typography, Image, Button } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DisabledButton from "../../../../../../../core/common_components/buttons/DisabledButton";
import SuccessButton from "../../../../../../../core/common_components/buttons/SuccessButton";
import CircularLoadingIndicator from "../../../../../../../core/common_components/CircularLoadingIndicator";
import NotFound from "../../../../../../../core/common_components/NotFound";
import AssetConstants from "../../../../../../../core/constants/asset_constants";
import { OrderStatus } from "../../../../../../../core/utils/enums";
import { UtilMethods } from "../../../../../../../core/utils/util_methods";
import ConfirmIncomingOrderSection from "./components/ConfirmIncomingOrderSection";
import ConsumerSection from "./components/consumer_sec/ConsumerSection";
import OrderDetailSection from "./components/order_detail_sec/OrderDetailSection";
import RequestDetailSection from "./components/request_detail_sec/RequestDetailSection";
import RequestDetailSec from "./components/request_detail_sec/RequestDetailSection";
import useIllustratorDetailOrderHandler from "./use_illustrator_detail_order_handler";

function OrderDetailPage() {
  const { isLoading, getOrderDetail, orderDetail } = useIllustratorDetailOrderHandler();
  useEffect(() => {
    getOrderDetail();
  }, []);

  if (isLoading) return <CircularLoadingIndicator />;
  else if (orderDetail == null) {
    return <NotFound />;
  }
  const paymentExpDate = UtilMethods.getExpPaymentDate(orderDetail?.orderDate, 3);

  return (
    <div className="max-w-3xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-base sm:text-lg md:text:xl lg:text-2xl font-extrabold tracking-tight pt-2 text-gray-900 text-center">Detail Pesanan #{orderDetail?.id}</h2>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={16} lg={16} xl={16} xxl={16}>
          <OrderDetailSection />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <ConsumerSection consumer={orderDetail?.consumer!} />
        </Col>
      </Row>
      <div className="mt-8 lg:w-10/12 mx-auto ">
        <RequestDetailSection detail={orderDetail?.detail!} />
      </div>

      <div className="mx-auto mt-5 flex justify-center">
        {orderDetail?.status === OrderStatus.Created ? (
          paymentExpDate.isStillValid ? (
            <ConfirmIncomingOrderSection />
          ) : (
            <DisabledButton rounded title="Pesanan Kadaluarsa" />
          )
        ) : orderDetail?.status === OrderStatus.OnWork ? (
          <Link to={{ pathname: `/manage/order/${orderDetail?.id}/sendOrder` }}>
            <SuccessButton block title="Kirim Pekerjaan" rounded />
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default OrderDetailPage;
