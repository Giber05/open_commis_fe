import { Row, Col, Card, Typography, Tag, Divider, Carousel, Image } from "antd";
import React from "react";
import FullWidthCorousel from "../../../../../../../../../../core/common_components/main_app/image_shower/FullWidthCorousel";
import { UtilMethods } from "../../../../../../../../../../core/utils/util_methods";
import { CommissionPost } from "../../../../../../../../../common/commission/data/models/commission_post";
import useIllustratorDetailOrderHandler from "../../../use_illustrator_detail_order_handler";

type ComPostProps = {
  commission: CommissionPost;
};
function ComPostTab({ commission }: ComPostProps) {
  const commissionPrice = UtilMethods.getIndonesianCurrencyFormat(commission?.price)

  return (
    <div>
      <Row gutter={[8, 16]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <div className="rounded-xl mx-auto text-center">
            <Image className="max-h-52 md:max-h-64 lg:max-h-72" style={{ borderRadius: "12px" }} src={commission?.image_1} />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <Card className=" rounded-xl" title={ <Typography.Text className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg  font-extrabold" strong>
                Overview
              </Typography.Text>
            }>
            <Row justify="space-between" className="my-2">
              <Col span={8} className="leading-none">
                <Typography.Text type="secondary" className="text-[10px] mb-1 sm:text-[11px] md:text-xs lg:text-sm xl:text-base  font-semibold">
                  Judul:
                </Typography.Text>
              </Col>
              <Col span={16} className="leading-none">
                <Typography.Text className="text-[10px] mb-1 sm:text-[11px] md:text-xs lg:text-sm xl:text-base  font-semibold">{`${commission?.description?.length! > 50 ? commission?.description?.substring(0, 50)+" ...":commission.description} `}</Typography.Text>
              </Col>
            </Row>
            <Row justify="space-between" className="my-2">
              <Col span={8} className="leading-none">
                <Typography.Text type="secondary" className="text-[10px] mb-1 sm:text-[11px] md:text-xs lg:text-sm xl:text-base  font-semibold">
                  Harga:
                </Typography.Text>
              </Col>
              <Col span={16} className="leading-none">
                <Typography.Text className="text-[10px] mb-1 sm:text-[11px] md:text-xs lg:text-sm xl:text-base  font-semibold">Rp. {commissionPrice}</Typography.Text>
              </Col>
            </Row>
            <Row justify="center" className="my-2">
              <Col span={24} className="leading-none text-center">
                <Typography.Text type="secondary" className="text-[10px] mb-1 sm:text-[11px] md:text-xs lg:text-sm xl:text-base  font-semibold">
                  Deskripsi
                </Typography.Text>
              </Col>
              <Col span={24} className="leading-none text-center">
                <Typography.Text className="text-[10px] mb-1 sm:text-[11px] md:text-xs lg:text-sm xl:text-base  font-semibold">{`${commission?.description?.length! > 100 ? commission?.description?.substring(0, 100)+" ...":commission.description} `}</Typography.Text>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ComPostTab;
