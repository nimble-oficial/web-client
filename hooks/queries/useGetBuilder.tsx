import { getCurrentBuilder } from "@/services"
import { useQuery } from "@tanstack/react-query"

interface UseGetBuilderQueryProps {
  builderId: string
}

export const useGetBuilderQuery = ({ builderId }: UseGetBuilderQueryProps) => {
  return useQuery(
    [`builderId-${builderId}`],
    () => getCurrentBuilder(builderId),
    {
      enabled: !!builderId,
    }
  )
}
