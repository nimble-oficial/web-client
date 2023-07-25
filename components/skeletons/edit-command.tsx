import { Skeleton } from "../ui"

export const EditCommandSkeleton = () => {
  return (
    <div className="space-y-4">
      <Skeleton className="h-9 w-40" />
      <Skeleton className="h-6 w-72" />
    </div>
  )
}
