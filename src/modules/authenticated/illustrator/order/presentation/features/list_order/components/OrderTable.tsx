import { Button, Row, Space, Table, Tag, Typography } from "antd";
import Column from "antd/lib/table/Column";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UtilMethods } from "../../../../../../../../core/utils/util_methods";
import useIllustratorOrderListHandler from "../use_illustrator_order_list_handler";
import CustomRow from "./CustomRow";

function OrderTable() {
  const { getOrders, onChangePage, isLoading, orders, pagination } = useIllustratorOrderListHandler();
  const navigate = useNavigate();
  useEffect(() => {
    getOrders();
  }, [pagination?.currentPage]);

  return (
    <div className="comic-shadow p-3 rounded-xl">
      <Table
        loading={isLoading}
        rowKey={"id"}
        onRow={(record, rowIndex) => {
          return {
            onDoubleClick: (event) => navigate(`/manage/order/${record.id}`),
          };
        }}
        components={{
          body: {
            row: CustomRow,
          },
        }}
        dataSource={orders}
        scroll={{ x: "100vw" }}
        size="middle"
        pagination={{ pageSize: pagination?.pageSize, total: pagination?.totalData, current: pagination?.currentPage, onChange: onChangePage }}
      >
        <Column title="Commission" width={30} render={(text, record: any) => <Typography.Text>{record.commission.title}</Typography.Text>} />
        <Column title="Nama Konsumen" width={30} render={(text, record: any) => <Typography.Text>{record.consumer.name}</Typography.Text>} />
        <Column title="Tanggal Pemesanan" render={(text, record: any) => <Typography.Text>{UtilMethods.getIndonesianFormatDate(record.orderDate)}</Typography.Text>} width={30} />
        <Column
          title="Status"
          width={150}
          render={(text, record: any) => {
            let color = UtilMethods.matchStatusColor(record.status);
            let status = UtilMethods.translateOrderStatus(record.status);
            return <Tag color={color}>{status}</Tag>;
          }}
        />

        <Column title="Order ID" dataIndex="id" width={100} />
      </Table>
    </div>
  );
}

export default OrderTable;
