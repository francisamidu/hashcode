import Sidebar from '@/components/dashboard/Sidebar'
import NotFound from '@/components/NotFound'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
  notFoundComponent: NotFound
})

function RouteComponent() {
  return (
    <main>
      <Sidebar />
      <section className="md:ml-[260px] 2xl:ml-0">
        <Outlet />
      </section>
    </main>
  )
}
