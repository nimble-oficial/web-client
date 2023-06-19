import { Icons } from "@/components"

export const BuilderLoader = () => {
  return (
    <div className="fixed z-20 flex h-screen w-screen items-center justify-center">
      <Icons.spinner size={40} className="animate-spin text-slate-500" />
    </div>
  )
}
