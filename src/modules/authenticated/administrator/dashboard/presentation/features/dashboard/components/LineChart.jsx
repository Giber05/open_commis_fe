import React from "react";
import faker from "@faker-js/faker";

import { Chart as ChartJS } from "chart.js/auto";

import { Bar, Line } from "react-chartjs-2";



export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Grafik Transaksi (example)",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Transaksi",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(132, 99, 255, 0.5)",
    },
    
  ],
};
const LineChart = () => {
  return (
    <div className="w-full bg-white rounded-xl overflow-hidden shadow-md p-4 undefined">
      <Line  options={options} data={data} />
    </div>
  );
};
export default LineChart;
