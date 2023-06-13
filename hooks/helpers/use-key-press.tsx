"use client"

import { useEffect } from "react"

/**
 * `useKeyPress` is a hook that listens to the key press event.
 * It takes the target key and callback function as arguments.
 * Whenever the target key is pressed, it calls the callback function.
 *
 * @param {string} targetKey - The key that needs to be pressed.
 * @param {CallableFunction} cb - The callback function that needs to be called when the target key is pressed.
 * @returns {void}
 *
 * @example
 * useKeyPress("Enter", () => {
 *  console.log("Enter key is pressed")
 * })
 *
 */
export const useKeyPress = (targetKey: string, cb: CallableFunction): void => {
  function downHandler(ev: KeyboardEvent): void {
    if (ev.key.toLowerCase() === targetKey.toLowerCase()) {
      cb()
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler)

    return () => {
      window.removeEventListener("keydown", downHandler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
