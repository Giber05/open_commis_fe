import { Row, Space, Table, Tag } from 'antd';
import Column from 'antd/lib/table/Column';
import React from 'react'
import { Link } from 'react-router-dom';

function OrderTable() {
    return (
    <div className="comic-shadow p-3 rounded-xl">
      <Table style={{}} dataSource={data} scroll={{ x: "100vw" }} size="middle" pagination={{ responsive: true, pageSize: 5 }}>
        <Column title="Nama Konsumen" dataIndex="firstName" key="firstName" width={100} />
        <Column title="Tenggat Waktu" dataIndex="lastName" key="lastName" width={30} />
        <Column title="Tanggal Pemesanan" dataIndex="age" key="age" width={30} />
        <Column title="Commission Post" dataIndex="firstName" key="firstName" width={150}/>
        <Column
          title="Status"
          dataIndex="tags"
          key="tags"
          width={12}
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
          <Column title="Order ID" dataIndex="address" key="address"  width={100} />
          <Column
            title= 'Action'
            key='action'
            width={20}
            render={(text, record) => (
            <Space size="middle">
            <Link  to={{ pathname: `/manage/order/1001` }}>Detail</Link>
            </Space>
            )}
          />
      </Table>
    </div>
  )
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

export default OrderTable