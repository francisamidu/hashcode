import Sidebar from '@/components/dashboard/Sidebar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <main>
      <Sidebar />
      <section className="ml-[260px]">
        <Outlet />
      </section>
    </main>
  )
}
