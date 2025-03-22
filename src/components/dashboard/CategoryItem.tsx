interface CategoryItemProps {
  name: string
  color: string
  percentage: number
}

export function CategoryItem({ name, color, percentage }: CategoryItemProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center">
          <div className={`h-3 w-3 rounded-full ${color} mr-2`}></div>
          <span className="text-sm">{name}</span>
        </div>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-gray-100">
        <div
          className={`h-2 rounded-full ${color}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}
