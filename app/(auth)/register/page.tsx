import { Metadata } from "next"
import { Icons, UserAuthForm } from "@/components"
import { registerConfig } from "@/config"

export const metadata: Metadata = registerConfig

export default function RegisterPage() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="mx-auto h-6 w-6" />
        <h1 className="gray-200 text-2xl font-semibold">Create an account</h1>
        <p className="text-muted-foreground text-sm">
          Enter your email below to create your account
        </p>
      </div>
      <UserAuthForm />
    </div>
  )
}
