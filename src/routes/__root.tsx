import Hero from '@/components/Hero'
import Features from '@/components/Features'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import Pricing from '@/components/Pricing'
import FAQSection from '@/components/FAQ'
import CTASection from '@/components/CTA'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import BackToTop from '@/components/BackToTop'

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
