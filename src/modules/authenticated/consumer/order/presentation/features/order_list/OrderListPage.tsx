import React, { useEffect } from "react";
import { Avatar, Card, Divider, Rate, Row, Typography, Image } from "antd";
import OrderItem from "./component/OrderItem";
import { Link } from "react-router-dom";
import SuccessButton from "../../../../../../../core/common_components/buttons/SuccessButton";
import useConsumerOrderListHandler from "./use_consumer_order_list_handler";
import CircularLoadingIndicator from "../../../../../../../core/common_components/CircularLoadingIndicator";
// import useComPostsHandler from "../use_composts_handler";
// import CommissionPost from "../../../../data/models/compost_list/commission_post";

function OrderListPage(): JSX.Element {
  // const { isLoadingComPosts } = useComPostsHandler();
  // const { commission } = commissionPost;
  const { isLoading, getOrders, orders, pagination } = useConsumerOrderListHandler();

  useEffect(() => {
    getOrders();
  }, [pagination?.currentPage]);

  if (isLoading) {
    return <CircularLoadingIndicator />;
  }
  console.log({ orders });

  return (
    <div>
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center">Daftar Pesanan</h2>

      {orders.map((order, index) => (
        <div>
          <Link to={{ pathname: `/consumer/order/${order.id}` }}>
            <OrderItem order={order} />
          </Link>
          ;
        </div>
      ))}
    </div>
  );
}

export default OrderListPage;
