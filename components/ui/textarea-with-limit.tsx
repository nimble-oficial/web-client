import React from "react"

import { cn } from "@/lib/utils"

import { Textarea } from "./textarea"

interface TextareaWithLimitProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  limit: number
}

const TextareaWithLimit = React.forwardRef<
  HTMLTextAreaElement,
  TextareaWithLimitProps
>(({ value, limit = 2000, className, ...props }, ref) => {
  const reachedLimit = (value?.toString()?.length || 0) >= limit

  return (
    <div>
      <Textarea {...props} ref={ref} value={value} />
      <p
        className={cn(
          "mt-2 text-right text-sm text-slate-500 dark:text-slate-300",
          reachedLimit ? "text-red-800" : ""
        )}
      >
        {value?.toString().length} / {limit}
      </p>
    </div>
  )
})
TextareaWithLimit.displayName = "TextareaWithLimit"

export { TextareaWithLimit }
