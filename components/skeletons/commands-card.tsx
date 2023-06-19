import { Skeleton } from "../ui"

const columns = 3
const rows = 4

export const CommandsCardSkeleton = () => {
  return (
    <>
      {Array.from({ length: columns * rows }).map((_, i) => (
        <Skeleton key={i} className="h-[150px] w-[340px]" />
      ))}
    </>
  )
}
