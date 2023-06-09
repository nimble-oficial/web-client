import { EditCommandSchema } from "@/schemas"
import { api } from "@/services/api"
import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

export interface EditCommandData extends EditCommandSchema {
  commandId: string
}

export interface Response {
  data: null
}

export const useEditCommandMutation = (
  options?: UseMutationOptions<
    AxiosResponse<Response, any>,
    unknown,
    EditCommandData,
    unknown
  >
) => {
  const mutation = useMutation({
    ...options,

    mutationFn: (data: EditCommandData) => {
      const { description, enabled, name, commandId, allowedChannel } = data

      return api.patch(`/commands/${commandId}`, {
        name,
        description,
        enabled,
        allowedChannel,
      })
    },
  })

  return mutation
}
