import { EditCommandData, updateCommand } from "@/services"
import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

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
    mutationFn: (data: EditCommandData) => updateCommand<Response>(data),
  })

  return mutation
}
