import { InboxOutlined } from "@ant-design/icons";
import { Typography, Form, Rate, Input, message, Upload, Row, Col, Card, Avatar, Image, Divider } from "antd";
import Dragger from "antd/lib/upload/Dragger";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DangerButton from "../../../../../../../core/common_components/buttons/DangerButton";
import SuccessButton from "../../../../../../../core/common_components/buttons/SuccessButton";
import CircularLoadingIndicator from "../../../../../../../core/common_components/CircularLoadingIndicator";
import NotFound from "../../../../../../../core/common_components/NotFound";
import AssetConstants from "../../../../../../../core/constants/asset_constants";
import useComPostDetailHandler from "../../../../../../guest/commission_post/presentation/features/commission_post_detail/use_compost_detail_handler";
import CommissionInfo from "./components/CommissionInfo";
import MakeOrderForm from "./components/MakeOrderForm";
import useMakeOrderHandler from "./use_make_order_handler";
const { Meta } = Card;
function MakeOrderPage() {
  const { getComPostDetail, commissionPost, isLoadingComPosts } = useComPostDetailHandler();

  useEffect(() => {
    window.scroll(0, 0);
    getComPostDetail()
  }, []);
  if (isLoadingComPosts) return <CircularLoadingIndicator />;
  else if (commissionPost == null) {
    return <NotFound />;
  }
  return (
    <div>
      <div className="max-w-full lg:w-11/12 m-auto text-sm shadow-none">
        <Typography className="text-center my-3 text-black text-2xl font-bold mb-5">Formulir Pemesanan</Typography>

        <Row gutter={[24, 24]} className="flex-row-reverse">
          <Col xs={24} sm={24} md={10} lg={10}>
            <CommissionInfo commission={commissionPost!}/>
          </Col>
          <Col xs={24} sm={24} md={14} lg={14}>
            <MakeOrderForm />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MakeOrderPage;
