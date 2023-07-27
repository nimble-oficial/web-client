import { useGetCommandByIdQuery } from "../queries"

interface UseGetCommandProps {
  commandId: string
}

export const useGetCommand = ({ commandId }: UseGetCommandProps) => {
  return useGetCommandByIdQuery({ commandId })
}
