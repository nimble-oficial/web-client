import { describe, expect, it } from "vitest"

import { capitalize } from "."

describe("capitalize()", () => {
  it("return an empty string if the input is empty", () => {
    expect(capitalize("")).toBe("")
    expect(capitalize("    ")).toBe("")
    expect(capitalize(undefined!)).toBe("")
    expect(capitalize(null!)).toBe("")
  })
  it("capitalize the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello")
    expect(capitalize("a")).toBe("A")
    expect(capitalize("foobar")).toBe("Foobar")
    expect(capitalize("Vitest is amazing")).toBe("Vitest is amazing")
    expect(capitalize("vitest is amazing")).toBe("Vitest is amazing")
  })
})
