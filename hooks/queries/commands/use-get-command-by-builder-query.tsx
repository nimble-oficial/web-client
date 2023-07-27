import { getCommandByBuilder } from "@/services"
import { useQuery } from "@tanstack/react-query"

interface UseGetCommandByGuildQueryProps {
  builderId: string
}

export interface BuilderCommandResponse {
  _id: string
  name: string
  description: string
  guildId: string
  enabled: boolean
  createdAt: string
}
interface Response {
  data: BuilderCommandResponse
}

export const useGetCommandByBuilderQuery = ({
  builderId,
}: UseGetCommandByGuildQueryProps) => {
  return useQuery([`commands-by-builder-${builderId}`], () =>
    getCommandByBuilder<Response>(builderId)
  )
}
