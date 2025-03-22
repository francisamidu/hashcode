'use client'

import { useRef } from 'react'
import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartOptions
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export function DonutChart() {
  const chartRef = useRef<ChartJS>(null)

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    cutout: '70%'
  }

  const data = {
    labels: ['M-Pesa API', 'CSV Imports', 'Manual Entry'],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: [
          'rgb(99, 102, 241)',
          'rgb(34, 197, 94)',
          'rgb(234, 179, 8)'
        ],
        borderWidth: 0
      }
    ]
  }

  return (
    <div className="h-[180px] w-[180px]">
      <Doughnut ref={chartRef} options={options} data={data} />
    </div>
  )
}
