import { Logo } from "."

interface NavItem {
  title: string
  href: string
}

const ITEMS: NavItem[] = [
  {
    title: "Features",
    href: "/#features",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Documentation",
    href: "/docs",
  },
]

export const Nav = () => {
  return (
    <div className="flex h-20 items-center justify-between py-6">
      <div className="flex gap-6 md:gap-10">
        <Logo />
        <nav className="hidden gap-6 md:flex">
          {ITEMS.map((item, index) => (
            <a
              key={index}
              className="flex items-center text-lg font-medium text-foreground/60 transition-colors hover:text-foreground/80 sm:text-sm"
              href={item.href}
            >
              {item.title}
            </a>
          ))}
        </nav>
        <button className="flex items-center space-x-2 md:hidden">
          <span className="hidden font-bold sm:inline-block">??</span>
          <span className="font-bold">Menu</span>
        </button>
      </div>
      <nav>
        <a
          className="inline-flex h-9 items-center justify-center rounded-md bg-secondary px-4 text-sm font-medium text-secondary-foreground ring-offset-background transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          href="/login"
        >
          Login
        </a>
      </nav>
    </div>
  )
}
