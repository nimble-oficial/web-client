import { api } from "@/services/api"
import { useQuery } from "@tanstack/react-query"

interface UseGetBuilderQueryProps {
  builderId: string
}

export const useGetBuilderQuery = ({ builderId }: UseGetBuilderQueryProps) => {
  return useQuery(
    [`builderId-${builderId}`],
    () => {
      return api.get(`/builders/${builderId}`)
    },
    {
      enabled: !!builderId,
    }
  )
}
