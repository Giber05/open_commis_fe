import { Button, Row, Space, Table, Tag, Typography } from "antd";
import Column from "antd/lib/table/Column";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useIllustratorOrderListHandler from "../use_illustrator_order_list_handler";

function OrderTable() {
  const { getOrders, onChangePage, isLoading, orders } = useIllustratorOrderListHandler();
  useEffect(() => {
    getOrders();
  }, []);
  console.log({ orders });
  const macthColor = (status:string)=>{
    
  }
  return (
    <div className="comic-shadow p-3 rounded-xl">
      <Table rowKey={"id"} dataSource={orders} scroll={{ x: "100vw" }} size="middle" pagination={{ responsive: true, pageSize: 5 }}>
        <Column title="Commission" width={30} render={(text, record: any) => <Typography.Text>{record.commission.title}</Typography.Text>} />
        <Column title="Nama Konsumen" width={30} render={(text, record: any) => <Typography.Text>{record.consumer.name}</Typography.Text>} />
        <Column title="Tanggal Pemesanan" dataIndex="orderDate" width={30} />
        <Column title="Status" dataIndex="status" width={150} />

        <Column title="Order ID" dataIndex="id" width={100} />
        <Column
          title="Action"
          key="action"
          width={20}
          render={(text, record: any) => (
            <Space size="middle">
              <Link to={{ pathname: `/manage/order/${record.id}` }}>Detail</Link>
            </Space>
          )}
        />
      </Table>
    </div>
  );
}
const data = [
  {
    key: "1",
    firstName: "Muhammad Ifaldzi liberty",
    lastName: "12 December 2022",
    age: "24 December 2022",
    address: "1001",
    tags: ["Menunggu Konfirmasi"],
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "2001",
    tags: ["loser"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "1111",
    tags: ["cool", "teacher"],
  },
  {
    key: "4",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "11111",
    tags: ["cool", "teacher"],
  },
  {
    key: "5",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "1111",
    tags: ["cool", "teacher"],
  },
  {
    key: "6",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "1111111",
    tags: ["cool", "teacher"],
  },
  {
    key: "7",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "1111111111111111111",
    tags: ["cool", "teacher"],
  },
  {
    key: "7",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "1111111",
    tags: ["cool", "teacher"],
  },
];

export default OrderTable;
