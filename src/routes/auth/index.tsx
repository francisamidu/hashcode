import AltFooter from '@/components/AltFooter'
import AuthNavbar from '@/components/AuthNavbar'
import { createRootRoute, Outlet } from '@tanstack/react-router'

const Index = () => {
  return (
    <>
      <AuthNavbar />
      <main>
        <Outlet />
      </main>
      <AltFooter />
    </>
  )
}

export const Route = createRootRoute({
  component: Index
})

export default Index
