"use client"

import React from "react"
import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"
import { ThemeProvider } from "@/components"
import { client, cn } from "@/lib"
import { QueryClientProvider } from "@tanstack/react-query"
import { SessionProvider } from "next-auth/react"
import NextNProgress from "nextjs-progressbar"
import { Toaster } from "sonner"

import "@/styles/globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <SessionProvider>
          <QueryClientProvider client={client}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <main className="flex-1">{children}</main>
              <NextNProgress />
              <Toaster />
            </ThemeProvider>
          </QueryClientProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
