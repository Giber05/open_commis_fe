import React from "react";
import { Table, Typography } from "antd";

const columns: any = [
  {
    title: "Nama Ilustrator",
    dataIndex: "illustratorName",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Jim",
        value: "Jim",
      },
      {
        text: "Submenu",
        value: "Submenu",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the illustratorName started with `value`
    onFilter: (value: any, record: any) => record.illustratorName.indexOf(value) === 0,
    sorter: (a: any, b: any) => a.illustratorName.length - b.illustratorName.length,
  },
  {
    title: "Nama Konsumen",
    dataIndex:"consumerName",
    defaultSortOrder: "descend",
    sorter: (a: any, b: any) => a.consumerName.length - b.consumerName.length,
  },
  {
    title: "Tanggal Transaksi",
    dataIndex: "transactionDate",
    defaultSortOrder: "descend",
    sorter: (a: any, b: any) => a.transactionDate.length - b.transactionDate.length,
  },
  {
    title: "Commission Post",
    dataIndex: "compostTitle",
  },
  {
    title: "Metode Pembayaran",
    dataIndex: "paymentMethod",
    filters: [
      {
        text: "BNI",
        value: "BNI",
      },
      {
        text: "BRI",
        value: "BRI",
      },
      {
        text: "BCA",
        value: "BCA",
      },
      {
        text: "E-Wallet",
        value: "E-Wallet",
        children: [
          {
            text: "OVO",
            value: "OVO",
          },
          {
            text: "ShopeePay",
            value: "ShopeePay",
          },
          {
            text: "GoPay",
            value: "GoPay",
          },
          {
            text: "Dana",
            value: "Dana",
          },
          {
            text: "Toko Retail",
            value: "RetailStore",
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the illustratorName started with `value`
    onFilter: (value: any, record: any) => record.paymentMethod.indexOf(value) === 0,
  },
  {
    title: "ID Transaksi",
    dataIndex: "transactionId",
    sorter: (a: any, b: any) => a.transactionId - b.transactionId,
  },
  
];

const data: any = [
  {
    key: "1",
    illustratorName: "John Brown",
    phoneNumber: "0877656556144",
    consumerName: "Gilang Liberty",
    transactionDate:"05 Mei 2022",
    compostTitle:"Chibi Style",
    paymentMethod:"DANA",
    transactionId:1123,
  },
  {
    key: "2",
    illustratorName: "Jim Green",
    phoneNumber: "0477656556544",
    consumerName: "Ifaldzi alwi",
    transactionDate:"04 April 2022",
    compostTitle:"Chibi Style",
    paymentMethod:"BRI",
    transactionId:1323,
  },
  {
    key: "3",
    illustratorName: "Joe Black",
    phoneNumber: "0577656556544",
    consumerName: "Moh. Ichwan",
    transactionDate:"03 Mei 2022",
    compostTitle:"Chibi Style",
    paymentMethod:"BNI",
    transactionId:1523,
  },
  {
    key: "4",
    illustratorName: "Jim Red",
    phoneNumber: "0877656556544",
    consumerName: "Gilang Liberty",
    transactionDate:"02 Januari 2022",
    compostTitle:"Chibi Style",
    paymentMethod:"RetailStore",
    transactionId:1623,
  },
];

function onChange(pagination: any, filters: any, sorter: any, extra: any) {
}
function TransactionTable() {
  return (
    <div className="w-full bg-white rounded-xl overflow-hidden shadow-md p-4 undefined">
      <div>
        <Typography.Title level={5}>Transaksi Terbaru</Typography.Title>
      </div>
      <Table scroll={{ x: 1024 }} size="middle" columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}

export default TransactionTable;
