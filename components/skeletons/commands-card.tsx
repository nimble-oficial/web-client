import { Skeleton } from "../ui"

export const CommandsCardSkeleton = () => {
  return (
    <div className="flex w-full flex-col gap-1">
      <Skeleton className="mb-4 h-8 w-64" />
      <Skeleton className="h-12 w-full rounded-none" />
      <Skeleton className="h-12 w-full rounded-none" />
    </div>
  )
}
