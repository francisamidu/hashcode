import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { lazy } from 'react'

const BackToTop = lazy(() => import('@/components/BackToTop'))
const FAQSection = lazy(() => import('@/components/FAQ'))
const CTASection = lazy(() => import('@/components/CTA'))
const Features = lazy(() => import('@/components/Features'))
const Footer = lazy(() => import('@/components/Footer'))
const Header = lazy(() => import('@/components/Header'))
const Hero = lazy(() => import('@/components/Hero'))
const Pricing = lazy(() => import('@/components/Pricing'))

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <FAQSection />
      <CTASection />
      <Footer />
      <BackToTop />
    </>
  )
}

export const Route = createFileRoute('/')({
  component: Home
})

export default Home
