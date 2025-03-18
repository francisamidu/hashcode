import React from 'react'
import { createFileRoute } from '@tanstack/react-router'

const Home = () => {
  return <main id="home"></main>
}

export const Route = createFileRoute('/')({
  component: Home
})

export default Home
