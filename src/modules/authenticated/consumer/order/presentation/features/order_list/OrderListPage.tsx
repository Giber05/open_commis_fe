import React, { useEffect } from "react";
import { Avatar, Card, Divider, Rate, Row, Typography, Image, Pagination } from "antd";
import OrderItem from "./component/OrderItem";
import { Link } from "react-router-dom";
import SuccessButton from "../../../../../../../core/common_components/buttons/SuccessButton";
import useConsumerOrderListHandler from "./use_consumer_order_list_handler";
import CircularLoadingIndicator from "../../../../../../../core/common_components/CircularLoadingIndicator";

function OrderListPage(): JSX.Element {
  const { isLoading, initLoading, getOrders, orders, pagination, onChangePage } = useConsumerOrderListHandler();

  useEffect(() => {
    getOrders();
    window.scrollTo(0, 0);
  }, [pagination?.currentPage]);

  if (initLoading) {
    return <CircularLoadingIndicator />;
  }
  console.log({ orders });

  return (
    <div>
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center">Daftar Pesanan</h2>
      <div>
        {orders.map((order, index) => (
          <Link to={{ pathname: `/consumer/order/${order.id}` }}>
            <OrderItem order={order} />
          </Link>
        ))}
      </div>
      <div className="mx-auto text-center my-3">{!isLoading ? <Pagination responsive pageSize={pagination?.pageSize} total={pagination?.totalData} defaultCurrent={1} current={pagination?.currentPage} onChange={onChangePage} /> : null}</div>
    </div>
  );
}

export default OrderListPage;
