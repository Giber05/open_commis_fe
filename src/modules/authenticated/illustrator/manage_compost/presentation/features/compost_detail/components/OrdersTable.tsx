import { Space, Table, Tag, Typography } from "antd";
import React, { useEffect, useState } from "react";
import qs from "qs";
import Column from "antd/lib/table/Column";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import useIllustratorComPostDetailHandler from "../use_illustrator_compost_detail_handler";
import { UtilMethods } from "../../../../../../../../core/utils/util_methods";

const data = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "4",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "5",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "6",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "7",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "7",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

function OrdersTable() {
  const { isLoadingOrders, orders, orderPagination, getOrdersByCommission, onChangePage, commissionPostDetail } = useIllustratorComPostDetailHandler();
  useEffect(() => {
    getOrdersByCommission();
  }, [orderPagination?.currentPage]);
  console.log({ orders });
  // let orderDeadline = UtilMethods.getDeadlineDate(orders?.orderDate!, orderDetail?.commission.durationTime!);

  return (
    <div className="comic-shadow p-3 rounded-xl">
      <Table 
        pagination={{ pageSize: orderPagination?.pageSize, total: orderPagination?.totalData, current: orderPagination?.currentPage, onChange: onChangePage }}
        key="id" loading={isLoadingOrders} dataSource={orders} scroll={{ x: "100vw" }} size="middle" >
        <Column
        width={50}
        title="Nama Konsumen" render={(text, record: any) => <Typography.Text>{record.consumer.name}</Typography.Text>} />
        <Column
        width={50}

          title="Tenggat Waktu"
          render={(text, record: any) => {
            let deadline = UtilMethods.getDeadlineDate(record.orderDate!, commissionPostDetail?.durationTime!);
            return <Typography.Text>{deadline}</Typography.Text>;
          }}
        />
        <Column
        width={50}
          title="Tanggal Pemesanan"
          render={(text, record: any) => {
            let orderDate = UtilMethods.getIndonesianFormatDate(record.orderDate);
            return <Typography.Text>{orderDate}</Typography.Text>;
          }}
        />
        <Column
          title="Status"
        width={30}

          render={(text, record: any) => {
            let statusColor = UtilMethods.matchStatusColor(record.status);
            return <Tag color={statusColor}>{record.status}</Tag>;
          }}
        />

        <Column title="Order ID" dataIndex="id" 
        width={30}
        />
      </Table>
    </div>
  );
}

export default OrdersTable;
