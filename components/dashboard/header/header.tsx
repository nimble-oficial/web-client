import { Nav } from "@/components"

export const DashboardHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container">
        <Nav />
      </div>
    </header>
  )
}
