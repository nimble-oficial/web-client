import { HttpException } from "@/exceptions"

export interface CustomError {
  message?: string
  response?: {
    data: HttpException
  }
}

export const getMessageFromError = (
  err: unknown,
  fallback = "An Internal Error has Occurred"
): string => {
  const customError = err as CustomError

  return (
    customError?.response?.data?.message || customError?.message || fallback
  )
}
