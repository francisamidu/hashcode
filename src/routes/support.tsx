import { createFileRoute, useLocation } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/support')({
  component: RouteComponent
})    

function RouteComponent() {
  return <div>Support</div>
}