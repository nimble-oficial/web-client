import { describe, expect, it } from "vitest"

import { getGuildIcon } from "."

describe("getGuildIcon()", () => {
  it("return an empty string if the input is empty", () => {
    expect(getGuildIcon("", "")).toBe("")
    expect(getGuildIcon("    ", "")).toBe("")
    expect(getGuildIcon(undefined!, null!)).toBe("")
    expect(getGuildIcon(null!, undefined!)).toBe("")
  })

  it("url must contains .png file extension", () => {
    expect(getGuildIcon("123456789", "abcdefg")).toContain(".png")
  })
  it("return guild icon correctly", () => {
    expect(getGuildIcon("123456789", "abcdefg")).toBe(
      "https://cdn.discordapp.com/icons/123456789/abcdefg.png"
    )

    expect(getGuildIcon("123456789", "abcdefg")).toBe(
      "https://cdn.discordapp.com/icons/123456789/abcdefg.png"
    )

    expect(getGuildIcon("123456789", "abcdefg")).toBe(
      "https://cdn.discordapp.com/icons/123456789/abcdefg.png"
    )
  })
})
