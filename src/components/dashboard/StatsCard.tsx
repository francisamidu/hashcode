import type React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronUp, ArrowDownRight } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string
  icon: React.ReactNode
  change: number
  period: string
}

export function StatsCard({
  title,
  value,
  icon,
  change,
  period
}: StatsCardProps) {
  const isPositive = change >= 0

  return (
    <Card>
      <CardContent className="py-2 px-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          {icon}
        </div>
        <div className="mt-4">
          <p className="text-2xl font-bold">{value}</p>
          <div className="mt-2 flex items-center text-xs">
            <span
              className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}
            >
              {isPositive ? (
                <ChevronUp className="mr-1 h-3 w-3" />
              ) : (
                <ArrowDownRight className="mr-1 h-3 w-3" />
              )}
              {Math.abs(change)}%
            </span>
            <span className="ml-2 text-gray-500">{period}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
