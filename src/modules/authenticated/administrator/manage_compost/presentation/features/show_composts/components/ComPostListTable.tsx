import React, { useEffect } from "react";
import { Avatar, Button, message, Row, Table, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { DeleteOutlined, UserOutlined } from "@ant-design/icons";
import CustomRow from "./CustomRow";
import useAdminComPostListHandler from "../use_admin_compost_list_handler";
import CommissionPosts from "../../../../../../../guest/commission_post/data/models/compost_list/commission_posts";
import { UtilMethods } from "../../../../../../../../core/utils/util_methods";

function onChange(pagination: any, filters: any, sorter: any, extra: any) {
  console.log("params", pagination, filters, sorter, extra);
}

type ComPostsProps = {
  composts: CommissionPosts[];
};
function ComPostListTable({ composts }: ComPostsProps) {
  const navigate = useNavigate();
  const { isLoadingComPosts, pagination, onChangePage, deleteComPost } = useAdminComPostListHandler();

  const columns: any = [
    {
      title: "Gambar",
      render: (value: any, record: any) => {
        return (
          <Row justify="center">
            <Avatar shape="square" size={150} src={record.image_1} className="object-contain" />
          </Row>
        );
      },
      width: 200,
      fixed: "left",
    },
    {
      title: "Judul",
      render: (value: any, record: any) => {
        return (
          <Row>
            <Typography.Text className="my-auto" strong>
              {record.title}
            </Typography.Text>
          </Row>
        );
      },
      sorter: (a: any, b: any) => a.title.length - b.title.length,
    },
    {
      title: "Harga",
      render: (value: any, record: any) => {
        const price = UtilMethods.getIndonesianCurrencyFormat(record.price);

        return (
          <Row>
            <Typography.Text className="my-auto" strong>
              Rp. {price}
            </Typography.Text>
          </Row>
        );
      },
      sorter: (a: any, b: any) => a.price - b.price,
    },
    {
      title: "Status OC",
      dataIndex: "status",
      filters: [
        {
          text: "Tersedia",
          value: "OPEN",
        },
        {
          text: "Tidak Tersedia",
          value: "CLOSED",
        },
      ],
      onFilter: (value: any, record: any) => record.status.indexOf(value) === 0,
    },

    {
      title: "Illustrator",
      render: (value: any, record: any) => (
        <Typography.Text className="my-auto" strong>
          {record.illustrator.name}
        </Typography.Text>
      ),

      sorter: (a: any, b: any) => a.illustrator.name.length - b.illustrator.name.length,
    },
    {
      title: "Aksi",
      fixed: "right",
      width: 50,
      render: (value: any, record: any) => <Button onClick={() => deleteComPost(record.id)} type="text" style={{ color: "red" }} icon={<DeleteOutlined />}></Button>,
    },
  ];

  return (
    <div>
      <Table
        loading={isLoadingComPosts}
        onRow={(record, rowIndex) => {
          return {
            onDoubleClick: (event) => navigate(`/admin/manage-compost/${record.id}`),
          };
        }}
        components={{
          body: {
            row: CustomRow,
          },
        }}
        pagination={{ pageSize: pagination?.pageSize, total: pagination?.totalData, current: pagination?.currentPage, onChange: onChangePage }}
        indentSize={10}
        scroll={{ x: 768 }}
        size="middle"
        columns={columns}
        dataSource={composts}
        onChange={onChange}
      />
    </div>
  );
}

export default ComPostListTable;
