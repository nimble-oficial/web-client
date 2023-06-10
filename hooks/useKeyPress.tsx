import { useEffect } from "react"

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
