import React from "react";
import { Table, Typography } from "antd";
import { Transaction } from "../../../../data/models/transaction/transaction";
import { UtilMethods } from "../../../../../../../../core/utils/util_methods";
import useAdminDashboardHandler from "../use_admin_dashboard_handler";

type TransactionProps = {
  transactions: Transaction[];
};
function TransactionTable({ transactions }: TransactionProps) {
  const { isGetTransactionsLoading, onChangePage, pagination } = useAdminDashboardHandler();
  const columns: any = [
    {
      title: "Nama Ilustrator",
      dataIndex: "illustrator",
      sorter: (a: any, b: any) => {
        if (a.illustrator > b.illustrator) {
          return 1;
        }
        if (a.illustrator < b.illustrator) {
          return -1;
        }
        return 0;
      },
    },
    {
      title: "Nama Konsumen",
      dataIndex: "consumer",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => {
        if (a.consumer > b.consumer) {
          return 1;
        }
        if (a.consumer < b.consumer) {
          return -1;
        }
        return 0;
      },
    },
    {
      title: "Tanggal Transaksi",
      render: (value: any, record: any) => UtilMethods.getIndonesianFormatDate(record.orderDate),
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => +new Date(a.orderDate) - +new Date(b.orderDate),
    },
    {
      title: "Total Pembayaran",
      dataIndex: "grandTotal",
      sorter: (a: any, b: any) => a.grandTotal - b.grandTotal,
    },
    {
      title: "Metode Pembayaran",

      render: (value: any, record: any) => (record.paymentMethod == null ? "-" : record.paymentMethod),
    },
    {
      title: "ID Transaksi",
      dataIndex: "id",
      sorter: (a: any, b: any) => a.id - b.id,
    },
  ];
  return (
    <div className="w-full bg-white rounded-xl overflow-hidden shadow-md p-4 undefined">
      <div>
        <Typography.Title level={5}>Transaksi Terbaru</Typography.Title>
      </div>
      <Table
        loading={isGetTransactionsLoading}
        pagination={{
          showSizeChanger: false,
          onChange: onChangePage,
          pageSize: pagination?.pageSize,
          total: pagination?.totalData,
          current: pagination?.currentPage,
        }}
        scroll={{ x: 1024 }}
        size="middle"
        columns={columns}
        dataSource={transactions}
      />
    </div>
  );
}

export default TransactionTable;
