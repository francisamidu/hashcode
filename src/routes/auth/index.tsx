import AltFooter from '@/components/AltFooter'
import AuthNavbar from '@/components/AuthNavbar'
import ErrorFallback from '@/components/ErrorFallback'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { ErrorBoundary } from 'react-error-boundary'

const Index = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AuthNavbar />
        <main>
          <Outlet />
        </main>
        <AltFooter />
      </ErrorBoundary>
    </>
  )
}

export const Route = createRootRoute({
  component: Index,
  errorComponent: ErrorFallback
})

export default Index
