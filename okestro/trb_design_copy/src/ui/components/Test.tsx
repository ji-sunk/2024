import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
// import { Chart } from 'react-chartjs-2';

// Chart.js 플러그인 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend,
);

const MixedChartExample = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        type: 'bar', // 막대 차트
        label: 'Bar Dataset',
        data: [10, 20, 30, 40, 50, 60, 70],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        type: 'line', // 선형 차트
        label: 'Line Dataset',
        data: [15, 25, 35, 45, 55, 65, 75],
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 2,
        tension: 0.4, // 부드러운 곡선
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '600px', margin: '0 auto' }}>
      <h2>Mixed Chart Example</h2>
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};

export default MixedChartExample;
