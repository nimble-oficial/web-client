"use client"

import { useEffect } from "react"

export const useMultiKeyPress = (
  targetKeys: string[],
  cb: (ev: KeyboardEvent) => void
) => {
  const keys = new Map<string, boolean>()

  function downHandler(ev: KeyboardEvent): void {
    keys.set(ev.key.toLowerCase(), true)

    const arePressed = targetKeys.every((key) => keys.get(key.toLowerCase()))

    if (arePressed) {
      cb(ev)
    }
  }

  function upHandler(ev: KeyboardEvent): void {
    keys.delete(ev.key.toLowerCase())
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler)
    window.addEventListener("keyup", upHandler)

    return () => {
      keys.clear()

      window.removeEventListener("keydown", downHandler)
      window.removeEventListener("keyup", upHandler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keys])
}
