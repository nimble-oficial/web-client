import { api } from "@/services/api"
import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

export interface CreateCommandData {
  name: string
  description: string
  guildId: string
  // options: {
  //   notEnabledMessage: string
  //   canSendNotEnabledMessage: boolean
  // }
}

interface Response {
  data: {
    builderId: string
    _id: string
  }
}

export const useCreateCommandMutation = (
  options?: UseMutationOptions<
    AxiosResponse<Response, any>,
    unknown,
    CreateCommandData,
    unknown
  >
) => {
  const mutation = useMutation({
    ...options,

    mutationFn: (data: CreateCommandData) => {
      return api.post(`/commands`, data)
    },
  })

  return mutation
}
