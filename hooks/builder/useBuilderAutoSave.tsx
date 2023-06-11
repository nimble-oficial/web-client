import { useViewport } from "reactflow"
import { useInterval } from "usehooks-ts"

import { useBuilderStore } from "../stores"
import { useSaveBuilder } from "./useSaveBuilder"

const SECONDS_TO_AUTO_SAVE = 30
const INTERVAL_TO_AUTO_SAVE = SECONDS_TO_AUTO_SAVE * 1000

export const useBuilderAutoSave = () => {
  const { builderId, edges, nodes } = useBuilderStore()

  const { handleSave, isLoading } = useSaveBuilder()
  const viewport = useViewport()

  useInterval(async () => {
    if (!builderId) {
      return
    }

    await handleSave({ builderId, edges, nodes, viewport })
  }, INTERVAL_TO_AUTO_SAVE)

  return { isLoading }
}
