import { api } from "@/services/api"
import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

export interface DeleteCommandData {
  commandId: string
  builderId: string
}

interface Response {
  data: null
}

export const useDeleteCommandMutation = (
  options?: UseMutationOptions<
    AxiosResponse<Response, any>,
    unknown,
    DeleteCommandData,
    unknown
  >
) => {
  const mutation = useMutation({
    ...options,
    mutationFn: (data: DeleteCommandData) => {
      const { builderId, commandId } = data

      return api.delete(`commands/by-builder/${builderId}/${commandId}`)
    },
  })

  return mutation
}
