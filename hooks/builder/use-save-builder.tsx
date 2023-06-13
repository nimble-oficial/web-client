import { Response, useSaveBuilderMutation } from "@/hooks"
import { SaveBuilderData } from "@/services"
import { customAPIError } from "@/utils"
import { MutateOptions } from "@tanstack/react-query"
import { AxiosResponse } from "axios"
import { toast } from "sonner"

/**
 *`useSaveBuilder` is a hook that saves the builder.
 *
 * It returns a function that saves the builder.
 *
 * @returns {function} handleSave - A function that saves the builder.
 *
 * @example
 * const { handleSave } = useSaveBuilder()
 *
 * <button onClick={() => handleSave(data)}>Save</button>
 *
 */
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
      toast.error(customAPIError(err))
    }
  }

  return { handleSave, ...rest }
}
