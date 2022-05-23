import React, { useEffect } from "react";
import { Avatar, Card, Divider, Rate, Row, Typography, Image, Pagination, Result } from "antd";
import OrderItem from "./component/OrderItem";
import { Link } from "react-router-dom";
import SuccessButton from "../../../../../../../core/common_components/buttons/SuccessButton";
import useConsumerOrderListHandler from "./use_consumer_order_list_handler";
import CircularLoadingIndicator from "../../../../../../../core/common_components/CircularLoadingIndicator";
import { MehOutlined, SmileOutlined } from "@ant-design/icons";

function OrderListPage(): JSX.Element {
  const { isLoading, initLoading, getOrders, orders, pagination, onChangePage } = useConsumerOrderListHandler();

  useEffect(() => {
    getOrders();
    window.scrollTo(0, 0);
  }, [pagination?.currentPage]);

  if (initLoading) {
    return <CircularLoadingIndicator />;
  }

  return (
    <div>
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 text-center">Daftar Pesanan</h2>
      <div>
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <Link to={{ pathname: `/consumer/order/${order.id}` }} className="mx-auto ">
              <OrderItem order={order} />
            </Link>
          ))
        ) : (
          <Result icon={<MehOutlined />} title="Anda Belum memiliki pesanan yang dipesan!" />
        )}
      </div>
      {orders.length > 0 ? (
        <div className="mx-auto text-center my-3">
          {!isLoading ? <Pagination responsive pageSize={pagination?.pageSize} total={pagination?.totalData} defaultCurrent={1} current={pagination?.currentPage} onChange={onChangePage} /> : null}
        </div>
      ) : null}
    </div>
  );
}

export default OrderListPage;
