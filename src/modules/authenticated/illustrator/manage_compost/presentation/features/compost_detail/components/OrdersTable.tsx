import { Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import qs from "qs";
import Column from "antd/lib/table/Column";
import ColumnGroup from "antd/lib/table/ColumnGroup";

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
  return (
    <div className="comic-shadow p-3 rounded-xl">
      <Table style={{}} dataSource={data} scroll={{ x: "100vw" }} size="middle" pagination={{ responsive: true, pageSize: 5 }}>
        <Column title="Nama Konsumen" dataIndex="firstName" key="firstName" />
        <Column title="Tenggat Waktu" dataIndex="lastName" key="lastName" />
        <Column title="Tanggal Pemesanan" dataIndex="age" key="age" />
        <Column
          title="Status"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag: any) => (
                <Tag color="green" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
          <Column title="Order ID" dataIndex="address" key="address" />
      </Table>
    </div>
  );
}

export default OrdersTable;
