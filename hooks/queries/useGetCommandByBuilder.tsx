import { api } from "@/services/api"
import { SelectedCommand } from "@/stores/dashboard"
import { useQuery } from "@tanstack/react-query"

interface UseGetCommandByGuildQueryProps {
  builderId: string
}

interface Response {
  data: {
    data: SelectedCommand
  }
}

export const useGetCommandByGuildQuery = ({
  builderId,
}: UseGetCommandByGuildQueryProps) => {
  return useQuery<Response>([`commands-by-builder-${builderId}`], () => {
    return api.get(`/commands/by-builder/${builderId}`)
  })
}
