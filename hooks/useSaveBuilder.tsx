import { Response, useSaveBuilderMutation } from "@/hooks"
import { SaveBuilderData } from "@/services"
import { customAPIError } from "@/utils"
import { MutateOptions } from "@tanstack/react-query"
import { AxiosResponse } from "axios"
import { toast } from "sonner"

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
