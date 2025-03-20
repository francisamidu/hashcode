import AuthNavbar from '@/components/AuthNavbar'
import { createRootRoute, Outlet } from '@tanstack/react-router'

const Index = () => {
  return (
    <>
      <AuthNavbar />
      <Outlet />
    </>
  )
}

export const Route = createRootRoute({
  component: Index
})

export default Index
