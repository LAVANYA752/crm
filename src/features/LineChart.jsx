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
  { month: 'Jan', income: 10000, expenses: 8000 },
  { month: 'Feb', income: 15000, expenses: 10000 },
  { month: 'Mar', income: 18000, expenses: 12000 },
  { month: 'Apr', income: 25000, expenses: 20000 },
  { month: 'May', income: 20000, expenses: 15000 },
  { month: 'Jun', income: 22000, expenses: 18000 },
  { month: 'Jul', income: 18000, expenses: 15000 },
  { month: 'Aug', income: 15000, expenses: 12000 },
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
      backgroundColor: '#22d3ee2a',
      tension: 0.4,
    },
    {
      label: 'Expenses',
      data: data.map(item => item.expenses),
      fill: true    ,
      borderColor: '#f472b6', // Red
      backgroundColor: '#f472b62a',
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
  scales: {
    x: {},
    y: {
      min: 0, 
      max: 30000, 
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
