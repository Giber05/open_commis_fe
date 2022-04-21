import { Card, Col, Row, Tag, Typography, Image, Button } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SuccessButton from "../../../../../../../core/common_components/buttons/SuccessButton";
import AssetConstants from "../../../../../../../core/constants/asset_constants";
import { UtilMethods } from "../../../../../../../core/utils/util_methods";
import useIllustratorDetailOrderHandler from "./use_illustrator_detail_order_handler";

function DetailOrder() {
  const { isLoading, getOrderDetail, orderDetail } = useIllustratorDetailOrderHandler();
  useEffect(() => {
    getOrderDetail();
  }, []);
  let orderDeadline = UtilMethods.getDeadlineDate(orderDetail?.orderDate!, orderDetail?.commission.durationTime!);
  let orderStatus = UtilMethods.translateOrderStatus(orderDetail?.status!)
  let statusColor = UtilMethods.matchStatusColor(orderDetail?.status!)
  return (
    <div className="mb-5">
      <h2 className="text-2xl font-extrabold tracking-tight pt-2 text-gray-900 text-center">Pesanan</h2>
      <Card loading={isLoading} className="comic-shadow max-w-2xl mx-auto my-4 py-1 px-4 sm:py-2 sm:px-2 lg:max-w-7xl lg:px-8 rounded">
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
            <Tag color={statusColor} className={`text-xl  p-2`}> {orderStatus}</Tag>
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
          {orderDetail?.detail.referenceImage !== null? (
            <Image
              src={orderDetail?.detail?.referenceImage!}
              className="max-h-40 object-contain"
              fallback={AssetConstants.imageURL+'placeholder/compost_placeholder.png'}
              style={{
                minHeight: "160px",
                maxWidth: "250px",
              }}
            />
          ):null}
        </div>
        <h3 className="text-2xl mt-5 text-center">Deskripsi permintaan</h3>
        <p className="text-xl text-justify">
          {orderDetail?.detail.requestDetail}</p>
      </Card>
      <div className="mx-auto mt-5 flex justify-center">
        <Link to={{ pathname: `/manage/order/1001/sendOrder` }}>
          <SuccessButton block title="Kirim Pekerjaan" rounded />
        </Link>
      </div>
    </div>
  );
}

export default DetailOrder;
