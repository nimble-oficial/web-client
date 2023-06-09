import { customAPIError } from "@/utils/get-error-from-api"
import { MutateOptions } from "@tanstack/react-query"
import { AxiosResponse } from "axios"
import { toast } from "sonner"

import { Response, SaveBuilderData, useSaveBuilderMutation } from "./mutations"

export const useSaveBuilder = () => {
  const { mutateAsync, ...rest } = useSaveBuilderMutation()

  const handleSave = async (
    data: SaveBuilderData,
    options?:
      | MutateOptions<
          AxiosResponse<Response, any>,
          unknown,
          SaveBuilderData,
          unknown
        >
      | undefined
  ) => {
    try {
      await mutateAsync(data, options)
    } catch (err) {
      toast.error(customAPIError(err).message)
    }
  }

  return { handleSave, ...rest }
}
