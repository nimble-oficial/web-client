import { getCommandById } from "@/services"
import { Command } from "@/stores"
import { useQuery } from "@tanstack/react-query"

interface UseGetCommandByIdQueryProps {
  commandId: string
}

export interface CommandResponse extends Command {}

interface Response {
  data: CommandResponse
}

export const useGetCommandByIdQuery = ({
  commandId,
}: UseGetCommandByIdQueryProps) => {
  return useQuery(
    [`command-${commandId}`],
    () => getCommandById<Response>(commandId),
    {
      enabled: !!commandId,
    }
  )
}
