import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/Transactions')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/Transactions"!</div>
}
