import { describe, expect, it } from "vitest"

import { getUniqueChannels } from "."
import { guildChanelsMock } from "../../mocks/channels"

describe("getUniqueChannels()", () => {
  it("return an empty array if channels parameter is empty", () => {
    expect(getUniqueChannels([])).toStrictEqual([])
  })

  it("return an array with unique channels", () => {
    expect(
      getUniqueChannels([...guildChanelsMock, ...guildChanelsMock])
    ).toHaveLength(guildChanelsMock.length)

    expect(
      getUniqueChannels([...guildChanelsMock, ...guildChanelsMock])
    ).not.toHaveLength(guildChanelsMock.length * 2)
  })
})
