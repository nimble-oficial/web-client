import { HttpException } from "@/exceptions"

export interface CustomError {
  message?: string
  response?: {
    data: HttpException
  }
}

const customAPIError = (err: unknown) => {
  const customError = err as CustomError

  return (
    customError?.response?.data?.message ||
    customError?.message ||
    "An Internal Error has Occurred"
  )
}

export { customAPIError }
