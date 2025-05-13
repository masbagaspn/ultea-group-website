import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/informasi/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/informasi/"!</div>
}
