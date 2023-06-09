import { CreateCommandData, createCommand } from "@/services"
import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

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
    mutationFn: (data: CreateCommandData) => createCommand<Response>(data),
  })

  return mutation
}
