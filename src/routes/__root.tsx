import NotFound from '@/components/NotFound'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { getUser } from '@/api/auth'
import { getUserProfile } from '@/api/user'

const Index = () => {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools initialIsOpen={false} />
    </>
  )
}

export const Route = createRootRoute<{
  getUser: typeof getUserProfile
}>({
  component: Index,
  notFoundComponent: NotFound
})

export default Index
