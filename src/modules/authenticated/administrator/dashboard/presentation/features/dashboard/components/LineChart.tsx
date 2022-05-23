import React, { useEffect } from "react";
import faker from "@faker-js/faker";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from "chart.js";

import { Bar, Line } from "react-chartjs-2";
import useAdminDashboardHandler from "../use_admin_dashboard_handler";
import { Skeleton } from "antd";
import { TransactionSum } from "../../../../data/models/transaction_sum/transaction_sum";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

type TransactionChartProps = {
  transactionSummary: TransactionSum[];
};

function LineChart({ transactionSummary }: TransactionChartProps) {
  const { isGetTransactionSumLoading } = useAdminDashboardHandler();
  const labels: any = transactionSummary.map((transaction) => transaction.month);
  const dataTransaction = transactionSummary.map((transaction) => transaction.total);

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Grafik Transaksi ",
      },
    },
  };

  return (
    <div className="w-full bg-white rounded-xl overflow-hidden shadow-md p-4 undefined bg-pri">
      {isGetTransactionSumLoading ? (
        <Skeleton />
      ) : (
        <Line
          options={options}
          data={{
            labels,
            datasets: [
              {
                label: "Total Transaksi",
                data: dataTransaction,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: "rgb(29, 148, 200)",
              },
            ],
          }}
        />
      )}
    </div>
  );
}
export default LineChart;
