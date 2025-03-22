import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/Documentation')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/Documentation"!</div>
}
