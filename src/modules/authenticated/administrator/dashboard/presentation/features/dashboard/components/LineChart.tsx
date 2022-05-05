import React from "react";
import faker from "@faker-js/faker";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,PointElement,LineElement } from "chart.js";


import { Bar, Line } from "react-chartjs-2";
ChartJS.register(LineElement);



export const options:any = {
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

const labels:any = ["January", "February", "March", "April", "May", "June", "July"];

export const data:any = {
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
