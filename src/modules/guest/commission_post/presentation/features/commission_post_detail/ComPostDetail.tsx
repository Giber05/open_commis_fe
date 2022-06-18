import { ArrowDownOutlined, DownOutlined, StarFilled, UpCircleOutlined } from "@ant-design/icons";
import { Row, Col, Popconfirm, Avatar, Typography, Card, Divider, Result, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import DangerButton from "../../../../../../core/common_components/buttons/DangerButton";
import InfoButton from "../../../../../../core/common_components/buttons/InfoButton";
import CircularLoadingIndicator from "../../../../../../core/common_components/CircularLoadingIndicator";
import FullWidthCorousel from "../../../../../../core/common_components/main_app/image_shower/FullWidthCorousel";
import NotFound from "../../../../../../core/common_components/NotFound";
import DetailComPost from "../../../../../authenticated/illustrator/manage_compost/presentation/features/compost_detail/components/DetailComPost";
import OrdersTable from "../../../../../authenticated/illustrator/manage_compost/presentation/features/compost_detail/components/OrdersTable";
import Reviews from "../../../../../authenticated/illustrator/manage_compost/presentation/features/compost_detail/components/Reviews";
import DetailCommission from "./components/DetailCommission";
import IllustratorSection from "./components/IllustratorSection";
import useComPostDetailHandler from "./use_compost_detail_handler";

function CommissionPostDetail() {
  const { getComPostDetail, commissionPost, isLoadingComPosts } = useComPostDetailHandler();

  useEffect(() => {
    getComPostDetail();
    window.scroll(0, 0);
  }, [commissionPost?.reviews?.length]);

  const [onMoreReview, setOnMoreReview] = useState(false);
  const [isMoreFiveReviews, setIsMoreFiveReviews] = useState(false);
  useEffect(() => {
    if (commissionPost?.reviews?.length! > 4) setIsMoreFiveReviews(true);
  }, [commissionPost?.reviews?.length]);

  if (isLoadingComPosts) return <CircularLoadingIndicator />;
  else if (commissionPost == null) return <NotFound />;

  const rating = (Math.round(commissionPost?.overallRating! * 100) / 100).toFixed(2);
  return (
    <div className="max-w-3xl mx-auto py-3  sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="bg-gray-200 comic-shadow">
            <FullWidthCorousel image1={commissionPost.image_1} image2={commissionPost.image_2} image3={commissionPost.image_3} image4={commissionPost.image_4} />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <DetailCommission commission={commissionPost} key={commissionPost.id} />
        </Col>
      </Row>
      <Row gutter={[24, 2]} className="flex-row-reverse my-5">
        <Col xs={24} sm={24} md={12} lg={12}>
          <IllustratorSection illustrator={commissionPost.illustrator} />
          <Divider />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="my-5 text-left">
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
              Ulasan ({<StarFilled className="text-yellow-400" />} {rating})
            </h3>
            {commissionPost?.reviews?.length! > 0 ? (
              isMoreFiveReviews && !onMoreReview ? (
                <div>
                  {commissionPost?.reviews?.slice(0, 4).map((review, index) => (
                    <Reviews review={review} />
                  ))}
                  <div className="mx-auto flex justify-center">
                    <Button icon={<DownOutlined />} className="text-gray-400 font-bold" onClick={() => setOnMoreReview(true)} type="text">
                      Selengkapnya
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  {commissionPost?.reviews?.map((review, index) => (
                    <Reviews review={review} />
                  ))}
                </div>
              )
            ) : (
              <Card className="mx-auto">
                <Result title="Belum ada Review" subTitle="Commission post ini belum diberi review oleh konsumen" />
              </Card>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CommissionPostDetail;
