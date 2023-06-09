export interface CustomError {
  message?: string
  response?: {
    data: HttpException
  }
}

export class HttpException extends Error {
  public status: number
  public message: string

  constructor(status: number, message: string) {
    super(message)
    this.status = status
    this.message = message
  }
}

const customAPIError = (err: unknown) => {
  const customError = err as CustomError

  return {
    ok: false,
    message:
      customError?.response?.data?.message ||
      customError?.message ||
      "An Internal Error has Occurred",
    data: null,
  }
}

export { customAPIError }
