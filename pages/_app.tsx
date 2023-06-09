import type { AppProps } from "next/app"
import { TailwindIndicator, ThemeProvider } from "@/components"
import { QueryClientProvider } from "@tanstack/react-query"
import { SessionProvider } from "next-auth/react"
import NextNProgress from "nextjs-progressbar"
import { Toaster } from "sonner"

import { client } from "@/lib/react-query"

import "@/styles/globals.css"

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={client}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">
              <Component {...pageProps} />
              <NextNProgress />
              <Toaster />
            </div>
          </div>
          <TailwindIndicator />
        </ThemeProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}
