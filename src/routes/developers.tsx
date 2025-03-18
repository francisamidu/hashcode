import { createFileRoute, useLocation } from '@tanstack/react-router'

export const Route = createFileRoute('/developers')({
  component: RouteComponent
})

function RouteComponent() {
  const location = useLocation()
  return <div>Hello {location.pathname}!</div>
}
