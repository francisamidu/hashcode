'use client'

import { useRef } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export function LineChart() {
  const chartRef = useRef<ChartJS>(null)

  const options: ChartOptions<'line'> = {
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
    elements: {
      line: {
        tension: 0.4
      },
      point: {
        radius: 0,
        hoverRadius: 6
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    }
  }

  const labels = [
    'Apr 10',
    'Apr 11',
    'Apr 12',
    'Apr 13',
    'Apr 14',
    'Apr 15',
    'Apr 16'
  ]

  const data = {
    labels,
    datasets: [
      {
        label: 'Transactions',
        data: [3000, 4000, 3800, 4300, 4200, 4800, 5000],
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.5)',
        borderWidth: 2
      },
      {
        label: 'Unique MSISDNs',
        data: [1500, 1800, 1700, 1900, 1850, 2000, 2100],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
        borderWidth: 2
      }
    ]
  }

  return (
    <div className="h-[300px] w-full">
      <Line ref={chartRef} options={options} data={data} />
    </div>
  )
}
