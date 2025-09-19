import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/informasi/tags/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/informasi/tags/$slug"!</div>
}
