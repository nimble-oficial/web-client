"use client"

import React from "react"
import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"
import { ThemeProvider } from "@/components"
import { client, cn } from "@/lib"
import { QueryClientProvider } from "@tanstack/react-query"
import NextNProgress from "nextjs-progressbar"
import { Toaster } from "sonner"

import "@/styles/globals.css"
import { NextAuthProvider } from "./providers"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <NextAuthProvider>
          <QueryClientProvider client={client}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <main className="flex-1">{children}</main>
              <NextNProgress />
              <Toaster />
            </ThemeProvider>
          </QueryClientProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
