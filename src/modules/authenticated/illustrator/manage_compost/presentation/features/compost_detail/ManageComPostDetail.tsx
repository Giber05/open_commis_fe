import { DownOutlined, StarFilled } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Divider, Popconfirm, Result, Row, Tag, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DangerButton from "../../../../../../../core/common_components/buttons/DangerButton";
import InfoButton from "../../../../../../../core/common_components/buttons/InfoButton";
import CircularLoadingIndicator from "../../../../../../../core/common_components/CircularLoadingIndicator";
import FullWidthCorousel from "../../../../../../../core/common_components/main_app/image_shower/FullWidthCorousel";
import NotFound from "../../../../../../../core/common_components/NotFound";
import DetailComPost from "./components/DetailComPost";
import OrdersTable from "./components/OrdersTable";
import Reviews from "./components/Reviews";
import useIllustratorComPostDetailHandler from "./use_illustrator_compost_detail_handler";

function ManageComPostDetail(): JSX.Element {
  const { isLoadingComPost, commissionPostDetail, getComPostDetail, onDeleteComPost } = useIllustratorComPostDetailHandler();
  useEffect(() => {
    getComPostDetail();
    window.scroll(0, 0);
  }, [commissionPostDetail?.status]);
  const [onMoreReview, setOnMoreReview] = useState(false);
  const [isMoreFiveReviews, setIsMoreFiveReviews] = useState(false);
  useEffect(() => {
    if (commissionPostDetail?.reviews?.length! > 5) setIsMoreFiveReviews(true);
  }, [commissionPostDetail?.reviews?.length]);
  if (isLoadingComPost) return <CircularLoadingIndicator />;
  else if (commissionPostDetail == null) return <NotFound />;
  const rating = (Math.round(commissionPostDetail?.overallRating! * 100) / 100).toFixed(2);
  return (
    <div className="max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center">Commission Post Anda</h2>
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 text-center">{commissionPostDetail?.title}</h2>
        </Col>
        <Col span={8}>
          <Row justify="end">
            <Link to={{ pathname: `/manage/manage-compost/${commissionPostDetail?.id}/edit` }}>
              <div className="m-2">
                <InfoButton block title="EDIT" rounded />
              </div>
            </Link>
            <Link to="">
              <div className="m-2">
                <Popconfirm
                  title="Apakah kamu yakin ingin menghapus commission post ini?"
                  onCancel={() => {
                    return;
                  }}
                  onConfirm={onDeleteComPost}
                >
                  <DangerButton loading={isLoadingComPost} block title="HAPUS" rounded />
                </Popconfirm>
              </div>
            </Link>
          </Row>
        </Col>
      </Row>
      <Row gutter={[32, 32]} className="my-5">
        <Col xs={24} sm={12} lg={12}>
          <div className="bg-gray-200 comic-shadow">
            <FullWidthCorousel image1={commissionPostDetail?.image_1} image2={commissionPostDetail?.image_2} image3={commissionPostDetail?.image_3} image4={commissionPostDetail?.image_4} />
          </div>
        </Col>
        <Col xs={24} sm={12} lg={12}>
          <DetailComPost />
        </Col>
      </Row>
      <div className="pt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 ">Pesanan</h2>
        <OrdersTable />
      </div>
      <div className="my-5 pt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mt-5">
          Ulasan ({<StarFilled className="text-yellow-400" />} {rating})
        </h2>
        {commissionPostDetail?.reviews?.length! > 0 ? (
          isMoreFiveReviews && !onMoreReview ? (
            <div>
              {commissionPostDetail?.reviews?.slice(0, 4).map((review, index) => (
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
              {commissionPostDetail?.reviews?.map((review, index) => (
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
    </div>
  );
}

export default ManageComPostDetail;
