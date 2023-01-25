import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
export const Chart=({obj})=>{
    
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
    
    const options = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Line Chart',
        },
      },
    };
    
    const labels = obj.map(a => a.timestamp);
    
    const data = {
      labels,
      datasets: [
        {
          label: 'Temperatura',
          data: obj.map(a =>a.value ),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Umidità',
          data: obj.map(a =>a.hum ),
          borderColor: 'rgb(48, 213, 200)',
          backgroundColor: 'rgb(127, 255, 212)',
        },
      ],
    }
    return <Line options={options} data={data} />;
    
}