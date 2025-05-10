import { createFileRoute } from '@tanstack/react-router'
import React from 'react'
import AboutPage from '../pages/about'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <React.Fragment>
      <AboutPage />
    </React.Fragment>
  )
}
