"use client"

import {
  BuilderBackButton,
  BuilderFlowHeaderActions,
  BuilderFlowHeaderProvider,
} from "@/components"

export const BuilderHeader = () => {
  return (
    <BuilderFlowHeaderProvider>
      <BuilderBackButton />
      <BuilderFlowHeaderActions />
    </BuilderFlowHeaderProvider>
  )
}
