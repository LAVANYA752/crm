import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


// Chart config
const data = {
  labels: [
    'Entertainment',
    'Travel',
    'Shopping'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: ['40', '25', '35'],
    backgroundColor: [
      '#625FFB',
      '#49BAFD',
      '#FF83BE'
    ],
    hoverOffset: 4
  }]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
          fontColor: '#94ADC2'
      }
    },
  },
};

const CircleChart = () => {
  return (
    <div className="w-full mx-auto">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default CircleChart;
