import { DeleteCommandData, deleteCommand } from "@/services"
import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import { AxiosResponse } from "axios"

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
    mutationFn: (data: DeleteCommandData) => deleteCommand<Response>(data),
  })

  return mutation
}
