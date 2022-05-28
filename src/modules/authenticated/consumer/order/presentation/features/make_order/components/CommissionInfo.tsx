import { Card, Row, Col, Typography, Divider } from "antd";
import React from "react";
import { UtilMethods } from "../../../../../../../../core/utils/util_methods";
import { CommissionPostDetail } from "../../../../../../../guest/commission_post/data/models/compost_detail/commission_post_detail";

type CommissionInfoProps = {
  commission: CommissionPostDetail;
};
function CommissionInfo({ commission }: CommissionInfoProps) {
  const commissionPrice = UtilMethods.getIndonesianCurrencyFormat(commission?.price);
  return (
    <Card className="comic-shadow">
      <div>
        <Row gutter={[12, 12]}>
          <Col xs={24} sm={24} md={24} lg={10}>
            <div className=" text-center my-auto">
              <img className="w-full md:w-3/4 lg:w-2/3 max-w-full max-h-36 object-contain" src={commission?.image_1} />
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={14}>
            <div className="">
              <Typography.Text className="text-sm sm:text-base md:text-lg lg:text-xl  font-normal">{commission?.title}</Typography.Text>
            </div>
          </Col>
        </Row>
      </div>
      <Divider className="font-bold" />
      <Row justify="space-between">
        <Col>
          <div >
            <Typography.Text className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">Total</Typography.Text>
          </div>
        </Col>
        <Col>
          <div className="text-right">
            <Typography.Text className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">Rp. {commissionPrice}</Typography.Text>
          </div>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col>
          <div >
            <Typography.Text className="text-xs sm:text-sm md:text-base font-normal">Durasi Pengerjaan</Typography.Text>
          </div>
        </Col>
        <Col>
          <div className="text-right">
            <Typography.Text className="text-xs sm:text-sm md:text-base font-normal">{commission?.durationTime} Hari</Typography.Text>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default CommissionInfo;
