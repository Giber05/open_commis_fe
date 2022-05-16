import React from "react";
import { Avatar, Button, Row, Table, Typography } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined, UserOutlined } from "@ant-design/icons";
import { UserList } from "../../../../data/models/user_list/user_list";
import useAdminUserListHandler from "../use_admin_user_list_handler";
import { UtilMethods } from "../../../../../../../../core/utils/util_methods";

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

function onChange(pagination: any, filters: any, sorter: any, extra: any) {}

type UserListProps = {
  users: UserList[];
};
function UserListTable({ users }: UserListProps) {
  const { isGetUsersLoading, pagination, onChangePage } = useAdminUserListHandler();

  const columns: any = [
    {
      title: "Nama pengguna",
      render: (value: any, record: any) => {
        return (
          <Row>
            <Avatar size={50} src={record.profilePicture} className="mr-2" />
            <Typography.Text className="my-auto" strong>
              {record.name}
            </Typography.Text>
          </Row>
        );
      },
      width: 200,
      fixed: "left",
      sorter: (a: any, b: any) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      },
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
      onFilter: (value: any, record: any) => record.role.indexOf(value) === 0,
    },
    {
      title: "Tanggal dibuat",
      render: (value: any, record: any) => UtilMethods.getIndonesianFormatDate(record.createdAt),

      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => +new Date(a.createdAt) - +new Date(b.createdAt),
    },
    {
      title: "Email",
      dataIndex: "email",
    },

    {
      title: "Nomor Telepon",
      dataIndex: "phone",
    },
    {
      title: "Aksi",
      fixed: "right",
      width: 50,
      render: () => <Button type="text" style={{ color: "red" }} icon={<DeleteOutlined />}></Button>,
    },
  ];

  return (
    <div>
      <Table
        loading={isGetUsersLoading}
        pagination={{
          showSizeChanger: false,
          onChange: onChangePage,
          pageSize: pagination?.pageSize,
          total: pagination?.totalData,
          current: pagination?.currentPage,
        }}
        indentSize={10}
        scroll={{ x: 768 }}
        size="middle"
        columns={columns}
        dataSource={users}
      />
    </div>
  );
}

export default UserListTable;
