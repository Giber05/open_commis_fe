import { Row, Col, Card, Typography, Tag, Divider } from "antd";
import React from "react";
import { UtilMethods } from "../../../../../../../../../../core/utils/util_methods";
import { IllustratorOrderDetail } from "../../../../../../data/models/illustrator_detail_order";
import useIllustratorDetailOrderHandler from "../../../use_illustrator_detail_order_handler";

type OrderDetaiProps = {
  orderDetail: IllustratorOrderDetail;
};
const { Text } = Typography;

function OrderDetailTab({ orderDetail }: OrderDetaiProps) {
  const orderStatus = UtilMethods.translateOrderStatus(orderDetail?.status!);
  const paymentStatus = orderDetail?.payment != null ? "Sudah Dibayar" : "Belum Dibayar";
  const statusColor = UtilMethods.matchStatusColor(orderDetail?.status!);
  const orderDeadline = orderDetail?.payment != null ? UtilMethods.getDeadlineDate(orderDetail?.payment.paymentDate!, orderDetail?.commission.durationTime!):"-";
  const orderCreated = UtilMethods.getIndonesianFormatDate(orderDetail?.orderDate!);
  const paymentDate = orderDetail?.payment != null ? UtilMethods.getIndonesianFormatDate(orderDetail?.payment.paymentDate) : "-";
  const totalPayment = UtilMethods.getIndonesianCurrencyFormat(orderDetail?.grandTotal)

  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <Card
            bordered={true}
            className="md:border-r-2 border-0"
            title={
              <Text className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg  font-extrabold" strong>
                Overview
              </Text>
            }
          >
            <div className=" text-center">
              <Tag color={statusColor} className="text-[9px] mb-1  sm:text-[12px] md:text-xs lg:text-sm xl:text-base  font-semibold">
                {orderStatus}
              </Tag>
            </div>
            <Row justify="space-between" className="">
              <Col span={12} className="leading-none my-auto">
                <Typography.Text type="secondary" className="text-[9px] mb-1 sm:text-[12px] md:text-xs lg:text-sm xl:text-base font-semibold">
                  Tanggal Pemesanan
                </Typography.Text>
              </Col>
              <Col span={12} className="leading-none text-right my-auto">
                <Typography.Text className="text-[9px] mb-1 sm:text-[12px] md:text-xs lg:text-sm xl:text-base  font-semibold">{orderCreated}</Typography.Text>
              </Col>
            </Row>

            <Row justify="space-between" className="">
              <Col span={12} className="leading-none my-auto">
                <Typography.Text type="secondary" className="text-[9px] mb-1 sm:text-[12px] md:text-xs lg:text-sm xl:text-base font-semibold">
                  Durasi Pengerjaan
                </Typography.Text>
              </Col>
              <Col span={12} className="leading-none text-right my-auto">
                <Typography.Text className="text-[9px] mb-1 sm:text-[12px] md:text-xs lg:text-sm xl:text-base  font-semibold">{orderDetail?.commission?.durationTime} Hari</Typography.Text>
              </Col>
            </Row>

            <Row justify="space-between" className="">
              <Col span={12} className="leading-none my-auto">
                <Typography.Text type="secondary" className="text-[9px] mb-1 sm:text-[12px] md:text-xs lg:text-sm xl:text-base  font-semibold">
                  Deadline Pesanan
                </Typography.Text>
              </Col>
              <Col span={12} className="leading-none text-right my-auto ">
                <Typography.Text className="text-[9px] mb-1 sm:text-[12px] md:text-xs lg:text-sm xl:text-base  font-semibold">{orderDeadline}</Typography.Text>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <Card
            bordered={false}
            title={
              <Text className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg  font-extrabold" strong>
                Pembayaran
              </Text>
            }
          >
            <Row justify="space-between" className="">
              <Col span={12} className="leading-none my-auto">
                <Typography.Text type="secondary" className="text-[9px] mb-1 sm:text-[12px] md:text-xs lg:text-sm xl:text-base  font-semibold">
                  Tanggal Pembayaran
                </Typography.Text>
              </Col>
              <Col span={12} className="leading-none text-right my-auto">
                <Typography.Text className="text-[9px] mb-1 sm:text-[12px] md:text-xs lg:text-sm xl:text-base  font-semibold">{paymentDate}</Typography.Text>
              </Col>
            </Row>
            <Row justify="space-between" className="">
              <Col span={12} className="leading-none ">
                <Typography.Text type="secondary" className="text-[9px] mb-1 sm:text-[12px] md:text-xs lg:text-sm xl:text-base  font-semibold">
                  Status Pembayaran
                </Typography.Text>
              </Col>
              <Col span={12} className="leading-none my-auto text-right">
                <Typography.Text className={`${orderDetail?.payment ==null? "text-red-500" : "text-green-500"} text-[9px] mb-1 sm:text-[12px] md:text-xs lg:text-sm xl:text-base  font-semibold`}>{paymentStatus}</Typography.Text>
              </Col>
            </Row>
            <Row justify="space-between" className="">
              <Col span={12} className="leading-none my-auto">
                <Typography.Text type="secondary" className="text-[9px] mb-1 sm:text-[12px] md:text-xs lg:text-sm xl:text-base  font-semibold">
                  Total Pembayaran
                </Typography.Text>
              </Col>
              <Col span={12} className="leading-none text-right my-auto">
                <Typography.Text className="text-[9px] mb-1 sm:text-[12px] md:text-xs lg:text-sm xl:text-base  font-semibold">Rp. {totalPayment}</Typography.Text>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default OrderDetailTab;
