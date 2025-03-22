'use client'

import { useRef } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export function BarChart() {
  const chartRef = useRef<ChartJS>(null)

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    }
  }

  const labels = ['Safaricom', 'Airtel', 'Telkom', 'Other']

  const data = {
    labels,
    datasets: [
      {
        label: 'Transactions',
        data: [65, 25, 8, 2],
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(234, 179, 8, 0.8)',
          'rgba(156, 163, 175, 0.8)'
        ],
        borderWidth: 0,
        borderRadius: 4
      }
    ]
  }

  return (
    <div className="h-[300px] w-full">
      <Bar ref={chartRef} options={options} data={data} />
    </div>
  )
}
