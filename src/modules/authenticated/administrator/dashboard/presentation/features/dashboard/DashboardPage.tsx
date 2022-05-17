import { Row, Col, Card, Table, Typography } from "antd";
import React, { useEffect } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import TestChart from "./components/TestChart";
import LineChart from "./components/LineChart";
import TransactionTable from "./components/TransactionTable";
import useAdminDashboardHandler from "./use_admin_dashboard_handler";

function DashboardPage() {
  const { transactionList, getTransactionList, pagination } = useAdminDashboardHandler();
  useEffect(() => {
    getTransactionList();
  }, [pagination?.currentPage]);

  return (
    <>
      <div className="bg-gradient-to-t from-sky-400 to-primary px-3 md:px-8 h-40" />
      <div className="px-3 md:px-8 -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-6">
            <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
              <TestChart />
            </div>
            <div className="xl:col-start-4 xl:col-end-7 px-4 mb-14">
              <LineChart />
            </div>
          </div>
        </div>
        <div className="container  max-w-2xl mx-auto py-3 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
          <Typography.Title level={4}>Tabel Transaksi</Typography.Title>
          <TransactionTable transactions={transactionList} />
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
