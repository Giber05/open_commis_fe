import { Typography, Row, Col, Rate, Image } from "antd";
import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { Link } from "react-router-dom";
import { UtilMethods } from "../../../../../../../core/utils/util_methods";
import { CommissionPost } from "../../../../../../common/commission/data/models/commission_post";
import CommissionPosts from "../../../../../commission_post/data/models/compost_list/commission_posts";
import CommissionPostListPage from "../../../../../commission_post/presentation/features/commission_post_list/CommissionPostListPage";
import { ArtworkModel } from "../../../../data/models/artwork_model";
import "./hideScrollbar.css";

type CommissionProps = {
  itemId: string;
  commission: CommissionPosts;
};
function IllustratorsCommissionSection({ commission, itemId }: CommissionProps) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);
  const commissionPrice = UtilMethods.getIndonesianCurrencyFormat(commission?.price);

  return (
    <div className="inline-block p-3 content-center">
      <div className="comic-shadow-btn w-56 p-3 bg-white flex items-center justify-center max-w-xs overflow-hidden rounded-lg hover-scale-up">
        <Link to={`/${commission.id}/detail`} className="block cursor-pointer">
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
            <Typography.Title level={5}>{commission.title.length > 20 ? commission.title.substring(0, 22) + "..." : commission.title}</Typography.Title>
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

export default IllustratorsCommissionSection;
