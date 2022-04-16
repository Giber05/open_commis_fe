import { Row, Col, Popconfirm } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import DangerButton from "../../../../../../core/common_components/buttons/DangerButton";
import InfoButton from "../../../../../../core/common_components/buttons/InfoButton";
import CircularLoadingIndicator from "../../../../../../core/common_components/CircularLoadingIndicator";
import FullWidthCorousel from "../../../../../../core/common_components/main_app/image_shower/FullWidthCorousel";
import DetailComPost from "../../../../../authenticated/illustrator/manage_compost/presentation/features/compost_detail/components/DetailComPost";
import OrdersTable from "../../../../../authenticated/illustrator/manage_compost/presentation/features/compost_detail/components/OrdersTable";
import Reviews from "../../../../../authenticated/illustrator/manage_compost/presentation/features/compost_detail/components/Reviews";
import DetailCommission from "./components/DetailCommission";
import useComPostDetailHandler from "./use_compost_detail_handler";

function CommissionPostDetail() {
  const {getComPostDetail,commissionPost,isLoadingComPosts} = useComPostDetailHandler()
  useEffect(() => {
    getComPostDetail()
  }, []);
  console.log({commissionPost});
  if(isLoadingComPosts || commissionPost==null) return <CircularLoadingIndicator/>
  return (
    <div className="max-w-3xl mx-auto py-3  sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
      <Row gutter={[24, 24]} className="">
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="bg-gray-200 comic-shadow">
            <FullWidthCorousel 
              image1={commissionPost.image_1}
              image2={commissionPost.image_2}
              image3={commissionPost.image_3}
              image4={commissionPost.image_4}
               />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <DetailCommission commission={commissionPost} key={commissionPost.id} />
        </Col>
      </Row>
     
      <div className="my-5">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Ulasan</h2>
        <Reviews />
        <Reviews />
        <Reviews />
      </div>
    </div>
  );
}

export default CommissionPostDetail;
