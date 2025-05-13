import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/informasi/$informasiId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/informasi/$informasiId"!</div>
}
