import { getCommandByBuilder } from "@/services"
import { Command } from "@/stores/dashboard"
import { useQuery } from "@tanstack/react-query"

interface UseGetCommandByGuildQueryProps {
  builderId: string
}

interface Response {
  data: Command
}

export const useGetCommandByGuildQuery = ({
  builderId,
}: UseGetCommandByGuildQueryProps) => {
  return useQuery([`commands-by-builder-${builderId}`], () =>
    getCommandByBuilder<Response>(builderId)
  )
}
