import { SaveBuilderData, saveBuilder } from "@/services"
import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

interface Response {
  data: null
}

export const useSaveBuilderMutation = (
  options?: UseMutationOptions<
    AxiosResponse<Response, any>,
    unknown,
    SaveBuilderData,
    unknown
  >
) => {
  const mutation = useMutation({
    ...options,
    mutationFn: (data: SaveBuilderData) => saveBuilder<Response>(data),
  })

  return mutation
}
