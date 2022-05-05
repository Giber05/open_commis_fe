import React from "react";
import { Avatar, Button, message, Row, Table, Typography } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined, UserOutlined } from "@ant-design/icons";
import CustomRow from "./CustomRow";

const columns: any = [
  {
    title: "Gambar",
    render: (value: any, record: any) => {
      return (
        <Row justify="center">
          <Avatar shape="square" size={150} src={record.image} className="object-contain" />
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
      return (
        <Row>
          <Typography.Text className="my-auto" strong>
            Rp. {record.price}
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
    title: "illustrator",
    dataIndex: "illustratorName",
    sorter: (a: any, b: any) => a.illustratorName.length - b.illustratorName.length,
  },
  {
    title: "Aksi",
    fixed: "right",
    width: 50,
    render: () => <Button type="text" style={{ color: "red" }} icon={<DeleteOutlined />}></Button>,
  },
];

const data: any = [
  {
    key: "1",
    title: "ANIME ART",
    image: "http://assets.kompasiana.com/items/album/2021/01/13/132043720-400394311015035-3349975606868569092-n-5ffeef6d8ede4812033625f2.jpg?t=o&v=770",
    status: "OPEN",
    illustratorName: "Gilang",
    price: 112223,
  },
  {
    key: "2",
    illustratorName: "Gilang",
    title: "MAU BIKIN LOGO ?",
    image: "https://www.allkpop.com/upload/2022/02/content/210437/web_data/allkpop_1645436466_minju-collage-1.jpg",
    status: "CLOSED",
    price: 133223,
  },
  {
    key: "3",
    illustratorName: "Ifal",
    title: "CHIBI STYLE",
    image: "https://www.allkpop.com/upload/2022/02/content/210437/web_data/allkpop_1645436466_minju-collage-1.jpg",
    status: "OPEN",
    price: 1523423,
  },
  {
    key: "4",
    illustratorName: "Icun",
    title: "MAKE Comic",
    image: "http://assets.kompasiana.com/items/album/2021/01/13/132043720-400394311015035-3349975606868569092-n-5ffeef6d8ede4812033625f2.jpg?t=o&v=770",
    status: "CLOSED",
    price: 162223,
  },
];

function onChange(pagination: any, filters: any, sorter: any, extra: any) {
  console.log("params", pagination, filters, sorter, extra);
}
function ComPostListTable() {
  return (
    <div>
      <Table
        onRow={(record, rowIndex) => {
          return {
            onDoubleClick: (event) => message.info(record.title),
          };
        }}
        components={{
          body: {
            row: CustomRow,
          },
        }}
        pagination={{ showSizeChanger: true }}
        indentSize={10}
        scroll={{ x: 768 }}
        size="middle"
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
    </div>
  );
}

export default ComPostListTable;
