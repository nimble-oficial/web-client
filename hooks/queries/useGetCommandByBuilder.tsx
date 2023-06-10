import { getCommandByBuilder } from "@/services"
import { SelectedCommand } from "@/stores/dashboard"
import { useQuery } from "@tanstack/react-query"

interface UseGetCommandByGuildQueryProps {
  builderId: string
}

interface Response {
  data: SelectedCommand
}

export const useGetCommandByGuildQuery = ({
  builderId,
}: UseGetCommandByGuildQueryProps) => {
  return useQuery([`commands-by-builder-${builderId}`], () =>
    getCommandByBuilder<Response>(builderId)
  )
}
