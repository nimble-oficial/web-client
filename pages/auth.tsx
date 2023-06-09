import Head from "next/head"
import Link from "next/link"
import { Button } from "@/components"
import { signIn } from "next-auth/react"

import { cn } from "@/lib/utils"

export default function AuthenticationPage() {
  return (
    <>
      <Head>
        <title>Authenticate</title>
      </Head>

      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:px-0">
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome back!
              </h1>
              <p className="text-sm text-muted-foreground">
                Sign in with Discord to build amazing things for your server!
              </p>
            </div>
            <div>
              <form
                className={cn("grid")}
                onSubmit={async () => {
                  await signIn()
                }}
              >
                <Button type="submit">Sign in with Discord</Button>
              </form>
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
