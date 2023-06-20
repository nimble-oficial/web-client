import { describe, expect, it } from "vitest"

import { getMessageFromError } from "."

describe("getMessageFromError()", () => {
  it("return a generic error message if the input is empty", () => {
    expect(getMessageFromError("")).toBe("An Internal Error has Occurred")
    expect(getMessageFromError("    ")).toBe("An Internal Error has Occurred")
    expect(getMessageFromError(undefined!)).toBe(
      "An Internal Error has Occurred"
    )
    expect(getMessageFromError(null!)).toBe("An Internal Error has Occurred")
  })

  it("return error message correctly", () => {
    expect(getMessageFromError(new Error("Forbidden"))).toBe("Forbidden")

    expect(getMessageFromError(new Error("Not authorized"))).toBe(
      "Not authorized"
    )
    expect(
      getMessageFromError({
        message: "Not authorized",
      })
    ).toBe("Not authorized")

    expect(
      getMessageFromError({
        message: "Catch me if you can",
      })
    ).toBe("Catch me if you can")

    expect(getMessageFromError("Catch me if you can")).not.toBe(
      "Catch me if you can"
    )

    expect(
      getMessageFromError({
        response: {
          data: {
            message: "I'm a teapot",
          },
        },
      })
    ).toBe("I'm a teapot")

    expect(
      getMessageFromError({
        response: {
          data: {
            status: 400,
            message: "Bad Request",
          },
        },
      })
    ).toBe("Bad Request")
  })
})
