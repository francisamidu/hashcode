import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const Index = () => {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools initialIsOpen={false} />
    </>
  )
}

export const Route = createRootRoute({
  component: Index
})

export default Index
