"use client"

import { useEffect, useState } from "react"
import { formatDistanceStrict } from "date-fns"

export const useTimeAgo = (compareDate: Date) => {
  const [timeAgo, setTimeAgo] = useState(() => {
    return getTimeAgoFromNow(compareDate)
  })

  function getTimeAgoFromNow(date: Date) {
    return formatDistanceStrict(date, new Date(), {
      addSuffix: true,
    })
  }

  useEffect(() => {
    function refreshTimeAgo() {
      setTimeAgo(getTimeAgoFromNow(compareDate))
    }

    window.addEventListener("focus", refreshTimeAgo)

    return () => {
      window.removeEventListener("focus", refreshTimeAgo)
    }
  }, [compareDate])

  return timeAgo
}
