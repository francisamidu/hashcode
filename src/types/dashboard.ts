export interface DashboardLink {
  active: boolean
  icon: JSX.Element
  to: string
  text: string
  badge?: string
}

export interface UserCardProps {
  username: string
  transactionCount: number
  onClick?: () => void
}
