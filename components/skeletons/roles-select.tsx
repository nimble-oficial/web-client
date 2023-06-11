import { Skeleton } from "../ui"

export const RolesSelectSkeleton = () => {
  return (
    <div className="space-y-1">
      <Skeleton className="h-[30px] w-full" />
      <Skeleton className="h-[30px] w-full" />
      <Skeleton className="h-[30px] w-full" />
    </div>
  )
}
