import { Metadata } from "next"
import Link from "next/link"
import { Icons, UserAuthForm } from "@/components"
import { loginConfig } from "@/config"

export const metadata: Metadata = loginConfig

export default function LoginPage() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="mx-auto h-6 w-6" />
        <h1 className="gray-200 text-2xl font-semibold">Welcome back</h1>
        <p className="text-muted-foreground text-sm">
          Enter your email to sign in to your account
        </p>
      </div>
      <UserAuthForm />
      <p className="text-muted-foreground px-8 text-center text-sm">
        <Link
          href="/register"
          className="hover:text-brand underline underline-offset-4"
        >
          Don&apos;t have an account? Sign Up
        </Link>
      </p>
    </div>
  )
}
