import { useBuilderAutoSave } from "@/hooks"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

export const SavingLabel = () => {
  const { isLoading } = useBuilderAutoSave()

  return (
    <div
      className={cn(
        "fixed bottom-5 left-5 flex items-center gap-1 rounded-sm border border-slate-100 bg-white px-2 py-1 duration-100 dark:border-slate-800 dark:bg-slate-900",
        isLoading ? "opacity-1" : "opacity-0"
      )}
    >
      <Loader2 className="animate-spin" size={15} />
      <p className="text-sm">Saving</p>
    </div>
  )
}
