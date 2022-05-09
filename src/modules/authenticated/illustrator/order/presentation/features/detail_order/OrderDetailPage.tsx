import { Card, Col, Row, Tag, Typography, Image, Button } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SuccessButton from "../../../../../../../core/common_components/buttons/SuccessButton";
import CircularLoadingIndicator from "../../../../../../../core/common_components/CircularLoadingIndicator";
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
  let orderDeadline = UtilMethods.getDeadlineDate(orderDetail?.orderDate!, orderDetail?.commission.durationTime!);
  let orderStatus = UtilMethods.translateOrderStatus(orderDetail?.status!);
  let statusColor = UtilMethods.matchStatusColor(orderDetail?.status!);

  if (isLoading) return <CircularLoadingIndicator />;
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
          <ConfirmIncomingOrderSection />
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
{
  /* <Card title="Overview" loading={isLoading} className="comic-shadow mx-auto my-4 py-1 px-4 sm:py-2 sm:px-2 lg:px-8 rounded">
            <h3 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center">Pesanan {orderDetail?.consumer.name}</h3>
            <Row>
              <Col xs={24} sm={24} lg={12} className="text-base leading-10">
                <Typography.Text className="text-xl">Commission Post: {orderDetail?.commission.title}</Typography.Text>
                <br />
                <span>
                  <Typography.Text className="text-xl "> Order ID : {orderDetail?.id}</Typography.Text>
                </span>
                <br />
                <span>
                  <Typography.Text className="text-xl ">Tenggat Waktu : </Typography.Text> <Typography.Text className="w- font-bold text-xl">{orderDeadline}</Typography.Text>
                </span>
                <br />
              </Col>
              <Col xs={24} sm={24} lg={12} className="text-base leading-10">
                <Typography.Text className="text-xl">STATUS : </Typography.Text>
                <Tag color={statusColor} className={`text-xl  p-2`}>
                  {" "}
                  {orderStatus}
                </Tag>
                <br />
                <span>
                  <Typography.Text className="text-xl">Tanggal Pemesanan: </Typography.Text>
                  <Typography.Text className="font-bold text-xl">{UtilMethods.getIndonesianFormatDate(orderDetail?.orderDate!)}</Typography.Text>
                </span>
                <br />
                <span>
                  <Typography.Text className="text-xl"> Total Pembayaran: </Typography.Text>
                  <Typography.Text className="w- font-bold text-xl">Rp.{orderDetail?.commission.price} </Typography.Text>
                </span>
                <br />
              </Col>
            </Row>
            <div className="text-2xl pt-5 text-center">
              {" "}
              REFERENSI GAMBAR
              <br />
              {orderDetail?.detail.referenceImage !== null ? (
                <Image
                  src={orderDetail?.detail?.referenceImage!}
                  className="max-h-40 object-contain"
                  fallback={AssetConstants.imageURL + "placeholder/compost_placeholder.png"}
                  style={{
                    minHeight: "160px",
                    maxWidth: "250px",
                  }}
                />
              ) : null}
            </div>
            <h3 className="text-2xl mt-5 text-center">Deskripsi permintaan</h3>
            <p className="text-xl text-justify">{orderDetail?.detail.requestDetail}</p>
          </Card> */
}
