import React from "react";
import faker from "@faker-js/faker";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from "chart.js";

import { Bar, Line } from "react-chartjs-2";
ChartJS.register(LineElement);

export const options: any = {
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

const labels: any = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const transactions = [
  { amount: 42, text: "", date: "2021-04-16T08:52:24.408Z", type: "Expense", category: "Car", id: "dda58c24-92fc-431f-a4eb-d89fad5cdf81" },
  { amount: 3000, text: "", date: "2021-04-14T19:30:00.000Z", type: "Income", category: "Salary", id: "915db4d8-1b20-4455-be06-c50b15920ae8" },
  { amount: 2997, text: "", date: "2021-03-17T20:30:00.000Z", type: "Income", category: "Salary", id: "ec1608b1-dc4f-428d-9d41-006322b2cf78" },
  { amount: 19993, text: "", date: "2021-02-01T20:30:00.000Z", type: "Income", category: "Salary", id: "5f51a268-4d68-4407-87f2-3156d27d5084" },
  { amount: 1000, text: "", date: "2021-01-06T20:30:00.000Z", type: "Expense", category: "Salary", id: "554b0776-8fad-46da-9609-e617f33b4e0e" },
  { amount: 96, text: "", date: "2020-08-06T19:30:00.000Z", type: "Income", category: "Salary", id: "1b806abf-9012-477f-9f1b-c99c53e1cb7d" },
];

const organizedTransactions = Object.fromEntries(
  [...Array.from(new Set(transactions.map((t) => parseInt(t.date.split("-")[0]))))].map((yr) => [
    yr,
    Object.fromEntries(
      [...Array.from(new Set(transactions.filter((t) => parseInt(t.date.split("-")[0]) === yr).map((t) => parseInt(t.date.split("-")[1]))))].map((mo) => [
        mo,
        transactions.filter((t) => parseInt(t.date.split("-")[0]) === yr && parseInt(t.date.split("-")[1]) === mo),
      ])
    ),
  ])
);
Object.entries(organizedTransactions).forEach(([key, value]) => {
  // console.log(key, value);
});
const strangeObject: any = {
  objects: {
    objectName_1: {
      name: "x",
      otherData: "some other data",
    },
    objectName_2: {
      name: "y",
      otherData: "some other data",
    },
  },
};
const arrayOfObjects = Object.keys(strangeObject.objects).map((key) => strangeObject.objects[key]);
// console.log({ arrayOfObjects });

const test = Object.values(organizedTransactions).map((values) => console.log({values}));
export const data: any = {
  labels,
  datasets: [
    {
      label: "Transaksi",
      data: labels.map((label: string, i: number) => {}),
      // faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(132, 99, 255, 0.5)",
    },
  ],
};

const LineChart = () => {
  return (
    <div className="w-full bg-white rounded-xl overflow-hidden shadow-md p-4 undefined">
      <Line options={options} data={data} />
    </div>
  );
};
export default LineChart;
