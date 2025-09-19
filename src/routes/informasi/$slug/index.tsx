import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/informasi/$slug/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/informasi/$slug/"!</div>
}
