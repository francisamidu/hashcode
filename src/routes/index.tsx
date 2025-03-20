import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import BackToTop from '@/components/BackToTop'
import FAQSection from '@/components/FAQ'
import CTASection from '@/components/CTA'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CustomScroll from '@/components/Scrollbar'
import Pricing from '@/components/Pricing'

const Home = () => {
  return (
    <>
      {/* <CustomScroll> */}
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <FAQSection />
      <CTASection />
      <Footer />

      <BackToTop />
      {/* </CustomScroll> */}
    </>
  )
}

export const Route = createFileRoute('/')({
  component: Home
})

export default Home
