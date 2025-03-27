import AltFooter from '@/components/AltFooter'
import AuthNavbar from '@/components/AuthNavbar'
import ErrorFallback from '@/components/ErrorFallback'
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
  component: Index,
  errorComponent: ErrorFallback
})

export default Index
