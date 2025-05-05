import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function TaskBarChart() {
  const data = {
    labels: ["", "", "", "", "", "", ""], 
    datasets: [
      {
        label: "Completed",
        data: [30, 50, 40, 55, 35, 50, 40], 
        backgroundColor: "#6366F1", 
        borderRadius: 20,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      },
      {
        label: "Remaining",
        data: [70, 50, 60, 45, 65, 50, 60], 
        backgroundColor: "#FBCFE8", 
        borderRadius: 20,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
        ticks: { display: false },
      },
      y: {
        stacked: true,
        grid: { display: false },
        ticks: { display: false },
      },
    },
  };

  return (
        <Bar data={data} options={options} />
  );
}
