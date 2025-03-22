import { Progress } from '@/components/ui/progress'

interface OperatorItemProps {
  name: string
  value: number
}

export function OperatorItem({ name, value }: OperatorItemProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm">{name}</span>
        <span className="text-sm font-medium">{value}%</span>
      </div>
      <Progress value={value} className="h-2" />
    </div>
  )
}
