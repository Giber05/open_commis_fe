import React from "react";
import { Avatar, Card, Divider, Rate, Row, Typography, Image } from "antd";
import OrderItem from "./features/component/OrderItem";
import { Link } from "react-router-dom";
import SuccessButton from "../../../../../core/common_components/buttons/SuccessButton";
// import useComPostsHandler from "../use_composts_handler";
// import CommissionPost from "../../../../data/models/compost_list/commission_post";

function OrderPage( ): JSX.Element {
  // const { isLoadingComPosts } = useComPostsHandler();
  // const { commission } = commissionPost;
  
  return (
   <div>
    <Link to={{ pathname: `/consumer/order/1001` }}>
     <OrderItem/>
    </Link>
   </div>
  );
}

export default OrderPage;