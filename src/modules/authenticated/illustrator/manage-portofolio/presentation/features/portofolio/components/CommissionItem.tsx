import { Typography, Row, Col, Rate, Image } from "antd";
import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { Link } from "react-router-dom";
import { UtilMethods } from "../../../../../../../../core/utils/util_methods";
import IllustratorComposts from "../../../../../manage_compost/data/models/illustrators_composts";
import "./hideScrollbar.css";

type CommissionProps = {
  itemId: string;
  commission: IllustratorComposts;
};
function CommissionItem({ commission, itemId }: CommissionProps) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);
  const commissionPrice = UtilMethods.getIndonesianCurrencyFormat(commission?.price)

  return (
    <div className="inline-block p-3 content-center">
      <div className="comic-shadow-btn w-56 p-3 bg-white flex items-center justify-center max-w-xs overflow-hidden rounded-lg hover-scale-up">
        <Link to={`/manage/manage-compost/${commission?.id}`} className="block cursor-pointer">
          <div className=" flex items-center text-center justify-center">
            <Image
              src={commission?.image_1 == undefined ? "https://thumb.zigi.id/frontend/thumbnail/2021/06/04/zigi-60b9e121dab72-go-yoon-jung_910_512.jpeg" : commission.image_1}
              className="max-h-40 w-56 object-contain "
              preview={false}
              style={{
                minHeight: "160px",
                maxWidth: "300px",
              }}
            />
          </div>
          <div className="p-3">
            <Typography.Title level={5}>{commission.title}</Typography.Title>
            <Row justify="space-between">
              <Col>
                <Typography.Text className="font-bold">Rp. {commissionPrice}</Typography.Text>
              </Col>
              <Col>
                <Rate disabled defaultValue={commission.overallRating == null ? 0 : commission.overallRating} className="text-xs" />
              </Col>
            </Row>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CommissionItem;
