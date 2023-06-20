import { describe, expect, it } from "vitest"

import { parseCommandName } from "."

describe("parseCommandName()", () => {
  it("return an empty string if the input is empty", () => {
    expect(parseCommandName("")).toBe("")
    expect(parseCommandName("    ")).toBe("")
    expect(parseCommandName(undefined!)).toBe("")
    expect(parseCommandName(null!)).toBe("")
  })
  it("if command does not have '!' suffix so add it", () => {
    expect(parseCommandName("hello")).toBe("!hello")
    expect(parseCommandName("my-command")).toBe("!my-command")
    expect(parseCommandName("ping")).toBe("!ping")
  })

  it("if command already has '!' suffix so do nothing", () => {
    expect(parseCommandName("!hello")).toBe("!hello")
    expect(parseCommandName("!my-command")).toBe("!my-command")
    expect(parseCommandName("!ping")).toBe("!ping")
  })
})
