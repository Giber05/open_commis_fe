import { Card, Typography, Divider, Row, Col } from "antd";
import React from "react";
import { UtilMethods } from "../../../../../../../../core/utils/util_methods";
import { PaymentModel } from "../../../../data/models/payment/payment_model";

type PaymentProps = {
  payment: PaymentModel | null;
  grandTotal: number;
};
function PaymentDetail({ payment, grandTotal }: PaymentProps) {
  return (
    <Card
      className="comic-shadow sm:shrink-0 mt-5"
      //  loading={isLoadingComPosts}
      style={{
        maxWidth: "580px",
        padding: "0",
      }}
    >
      <Typography className="text-center text-lg sm:text-lg lg:text-2xl font-bold">Rincian Pembayaran</Typography>
      <Divider className="my-2" />
      {payment != null ? (
        <Row justify="space-between">
          <Col className="text-base leading-10">
            <Col>
              <Typography.Text className="text-sm  sm:text-sm lg:text-lg pr-5">Tanggal Pembayaran</Typography.Text>
            </Col>
            <Col>
              <Typography.Text className="text-sm  sm:text-sm lg:text-lg ">Metode Pembayaran</Typography.Text>
            </Col>
            <Col>
              <Typography.Text className="text-sm  sm:text-sm lg:text-lg ">Total Pembayaran</Typography.Text>
            </Col>
          </Col>

          <Col className="text-base leading-10">
            <Col>
              <Typography.Text className="text-sm mb-1 sm:text-sm lg:text-lg text-right font-bold">{UtilMethods.getIndonesianFormatDate(payment?.paymentDate!)}</Typography.Text>
            </Col>
            <Col>
              <Typography.Text className="text-sm mb-1 sm:text-sm lg:text-lg font-bold text-right"> {payment?.paymentMethod}</Typography.Text>
            </Col>
            <Col>
              <Typography.Text className="text-sm mb-1 sm:text-sm lg:text-lg font-bold text-right"> Rp. {grandTotal}</Typography.Text>
            </Col>
          </Col>
        </Row>
      ) : (
        <div className="text-center">
          <Col>
          <Typography.Text>Total yang harus dibayar:</Typography.Text>
          </Col>
          <Col>
          <Typography.Text className="font-bold text-base">Rp. {grandTotal}</Typography.Text>
          </Col>
        </div>
      )}
    </Card>
  );
}

export default PaymentDetail;
