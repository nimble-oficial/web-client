import { siteConfig } from "@/config"
import { features } from "@/constants"

export default function MarketingPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <a
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
            href="https://twitter.com/shadcn"
            rel="noreferrer"
          >
            Currently in Beta
          </a>

          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Automate your Discord Server easily and for free.
          </h1>

          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Create dynamic commands, execute commands for every server event,
            and more with a powerful, easy to use dashboard. Easy. Open source.
          </p>

          <div className="space-x-4">
            <a
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              href="/login"
            >
              Get Started
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              href={siteConfig.links.github}
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="container space-y-6 bg-transparent py-8 md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>

          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Explore amazing features that will help you automate your Discord
            server using {siteConfig.name}.
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {features.map(({ title, content, icon: Icon }, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-lg border bg-background p-2"
            >
              <div className="flex min-h-[180px] flex-col justify-start rounded-md p-6">
                <Icon className="mb-3 h-8 w-8" />
                <div className="space-y-2">
                  <h3 className="font-bold">{title}</h3>
                  <p className="text-sm">{content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Proudly Open Source
          </h2>

          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {siteConfig.name} is open source and powered by open source
            software. <br /> The code is available on{" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
              href="https://github.com/shadcn/taxonomy"
            >
              GitHub
            </a>
            .{" "}
          </p>

          <a
            target="_blank"
            rel="noreferrer"
            className="flex"
            href="https://github.com/shadcn/taxonomy"
          >
            <div className="flex h-10 w-10 items-center justify-center space-x-2 rounded-md border border-muted bg-muted">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5 text-foreground"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </div>

            <div className="flex items-center">
              <div className="h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-muted border-y-transparent"></div>
              <div className="flex h-10 items-center rounded-md border border-muted bg-muted px-4 font-medium">
                13,036 stars on GitHub
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  )
}
