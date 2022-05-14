import React from "react";
import { Avatar, Button, Row, Table, Typography } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined, UserOutlined } from "@ant-design/icons";

const columns: any = [
  {
    title: "Nama pengguna",
    render:(value:any,record:any)=>{
      return <Row >
        <Avatar size={50} icon={<UserOutlined/>} className="mr-2" />
        <Typography.Text className="my-auto" strong>{record.name}</Typography.Text>
      </Row>
    },
    width:200,
    fixed: 'left',
    sorter: (a: any, b: any) => a.name.length - b.name.length,
  },
  {
    title: "Jenis Pengguna",
    dataIndex: "role",
    filters: [
      {
        text: "Ilustrator",
        value: "illustrator",
      },
      {
        text: "Konsumen",
        value: "consumer",
      },
      {
        text: "Administrator",
        value: "administrator",
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value: any, record: any) => record.role.indexOf(value) === 0,
  },
  {
    title: "Tanggal dibuat",
    dataIndex: "createdAt",
    defaultSortOrder: "descend",
    sorter: (a: any, b: any) => a.createdAt.length - b.createdAt.length,
  },
  {
    title: "Email",
    dataIndex: "email",
  },

  {
    title: "Nomor Telepon",
    dataIndex: "phoneNumber",
    sorter: (a: any, b: any) => a.phoneNumber.length - b.phoneNumber.length,
  },
  {
    title: "Aksi",
    fixed: 'right',
    width:50,
    render: () => <Button type="text" style={{ color: "red"}} icon={<DeleteOutlined />}></Button>,
  },
];

const data: any = [
  {
    key: "1",
    phoneNumber: "0877656556144",
    name: "Gilang Liberty",
    createdAt: "05 Mei 2022",
    email: "exampleEmail@example.com",
    role: "illustrator",
    userId: 1123,
  },
  {
    key: "2",
    phoneNumber: "0477656556544",
    name: "Ifaldzi alwi",
    createdAt: "04 April 2022",
    email: "exampleEmail@example.com",
    role: "consumer",
    userId: 1323,
  },
  {
    key: "3",
    phoneNumber: "0577656556544",
    name: "Moh. Ichwan",
    createdAt: "03 Mei 2022",
    email: "exampleEmail@example.com",
    role: "administrator",
    userId: 1523,
  },
  {
    key: "4",
    phoneNumber: "0877656556544",
    name: "Gilang Liberty",
    createdAt: "02 Januari 2022",
    email: "exampleEmail@example.com",
    role: "consumer",
    userId: 1623,
  },
];

function onChange(pagination: any, filters: any, sorter: any, extra: any) {
}
function UserListTable() {
  return (
    <div >

      <Table pagination={{showSizeChanger:true}} indentSize={10} scroll={{ x: 768 }} size="middle" columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}

export default UserListTable;
