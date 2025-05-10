import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register the components
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Filler, Tooltip, Legend);

const data = [
  { month: 'Jan', income: 0, expenses: 0 },
  { month: 'Feb', income: 18000, expenses: 10000 },
  { month: 'Mar', income: 15000, expenses: 12000 },
  { month: 'Apr', income: 25000, expenses: 18000 },
  { month: 'May', income: 20000, expenses: 29000 },
  { month: 'Jun', income: 5000, expenses: 12000 },
  { month: 'Jul', income: 10000, expenses: 15000 },
  { month: 'Aug', income: 0, expenses: 0 },
];

// Chart config
const chartData = {
  labels: data.map(item => item.month),
  datasets: [
    {
      label: 'Income',
      data: data.map(item => item.income),
      fill: true,
      borderColor: '#22d3ee', // Green
      // backgroundColor: '#22d3ee2a',
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, '#22d3ee2a');
        gradient.addColorStop(1, '#ffffff');
        return gradient;
      },
      tension: 0.4,
      pointRadius: 0,

    },
    {
      label: 'Expenses',
      data: data.map(item => item.expenses),
      fill: true    ,
      borderColor: '#f472b6', // Red
      // backgroundColor: '#f472b62a',
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, '#f472b62a');
        gradient.addColorStop(.9, '#ffffff');
        return gradient;
      },
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        boxWidth: 10,  
        boxHeight: 10,  
        boxBorderRadius: 10,
      },
    },
  },
  scales: {
    x: {  grid: { display: false },border: { display: false },},
    y: {
      min: 0, 
      max: 30000, 
      border: { display: false },
      ticks: {
        maxTicksLimit: 4,
      },
    },
  },
};

const LineChart = () => {
  return (
    <div className="w-full mx-auto">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
