import React from 'react';
import Icon from '../component/ui/svg/Icons';
import {
  Bar, Doughnut, Line
} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const HomeBannerAnalytics = () => {
  // Bar Chart
  const barData = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [
      {
        label: 'Values',
        data: [5, 2, 8, 6, 3],
        backgroundColor: ['#00CFE8', '#000000', '#EA5455', '#00CFE8', '#00000'],
        // borderRadius: 10,
        barThickness: 20,
        tension: 0.1,
        borderRadius: {
          topLeft: 10,
          topRight: 10,
          bottomLeft: 10,
          bottomRight: 10
        }
      }
    ],
  };

  // Doughnut Chart
  // const donutData = {
  //   labels: ['Sale'],
  //   datasets: [{
  //     data: [25, 25 ,25],
  //     backgroundColor: ['rgba(115, 103, 240, 1)', '#rgba(246, 65, 108, 1)','rgba(250, 116, 43, 1)'],
  //     borderWidth: 0,
  //   }]
  // };
  const donutData = {
    labels: ['Purple', 'Orange', 'Red', 'Remaining'],
    datasets: [{
      data: [25, 23, 25, 27],
      backgroundColor: [
        '#A066FF',  
        '#FFC45B', 
        '#FF6B6B',  
        '#F5F5F5'   
      ],
      borderWidth: 0,
    }]
  };

  const lineData = {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
    datasets: [
      {
        label: 'Sales',
        data: [8, 5, 7, 6, 4, 10, 7, 6, 5],
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, '#00CFE8');
          gradient.addColorStop(1, '#fff');
          return gradient;
        },
        borderRadius: Number.MAX_VALUE,
        barThickness: 6,
        borderSkipped: false
      },
      // {
      //   label: 'Background',
      //   data: Array(12).fill(12),
      //   backgroundColor: '#F2F4F7',
      //   barThickness: 6,
      //   borderRadius: Number.MAX_VALUE,
      //   borderSkipped: false
      // }
    ]
  };

  const options = {
    indexAxis: 'x',
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: '#8A93A6',
          font: {
            size: 12,
            weight: 'bold'
          }
        }
      },
      y: {
        grid: { display: false },
        ticks: { display: false },
        min: 0,
        max: 12
      }
    }
  };


  const miniLineData = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [{
      label: 'Business Strategy',
      data: [30, 20, 35, 25, 40 , 30],
      fill: true,
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, 'rgba(0,194,255,0.5)');
        gradient.addColorStop(0.5, '#ffffff');
        return gradient;
      },
      // backgroundColor: 'rgba(0,194,255,0.2)',
      borderColor: '#00C2FF',
      pointRadius: 0,
      pointHoverRadius: 0,
      tension: 0.4
    },
    {
      label: 'Created',
      data: [25, 33, 20, 35, 22 , 37,10 ,5],
      fill: true,
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, 'rgba(115,103,240,0.5)');
        gradient.addColorStop(0.5, '#ffffff');
        return gradient;
      },
      // backgroundColor: 'rgba(115,103,240,0.2)',
      borderColor: '#7367F0',
      pointRadius: 0,
      pointHoverRadius: 0,
      tension: 0.4,
    }]
  };

  return (
    <div className="homeBannerAnalyticsCard">
      <div className="homeBannerAnalyticsCardWrapper flex flex-col gap-4 card-animation">
        <div className="flex items-end gap-4 primaryPanel">
          <div className="cardBlock barCard">
            <div className='circleDotBlock ml-auto'>
              <div className='circleDot'></div>
              <div className='circleDot'></div>
              <div className='circleDot'></div>
            </div>
            <div className='chartBlock'>
              <Bar data={barData} options={{ plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { display: false } } }} />
            </div>
          </div>

          <div className="cardBlock earningsCard">
            <div className='circleIcon'></div>
            <div>
              <span className="text-sm text-gray-400">This Month</span>
              <h3 className="text-lg font-bold text-gray-800">$4,658</h3>
            </div>
          </div>
        </div>

        <div className="flex items-end gap-4 secondaryPanel">
          <div className="cardBlock statisticsCard w-fit">
            <p className="text-sm mb-2">Statistic</p>
            <div className='chartBlock'>
              <div className='chartArrow flex gap-3 mb-3 items-center justify-center'>
                <Icon name='arrow' />
                <p className="text-sm text-gray-600">Business Statergy</p>
                <Icon name='arrow' />
              </div>
              <Bar data={lineData} options={options} />
            </div>
          </div>

          <div className="cardBlock donutCard w-fit">
            <p className="text-sm mb-2">Global Statistic</p>
            <div className="relative w-[140px] h-[140px] mx-auto flex">
              <Doughnut data={donutData} options={{ cutout: '70%', plugins: { legend: { display: false } } }} />
              <div className="absolute inset-0 flex items-center justify-center text-xs font-bold"> Sales (75%)</div>
            </div>
          </div>
        </div>

        <div className='flex items-end gap-4 ternaryPanel justify-center'>
          <div className="cardBlock miniLineCard">
            <p className="text-sm mb-1">Contact Created</p>
            <div className='chartBlock'>
              <Line data={miniLineData} options={{ plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { display: false } } }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerAnalytics;
