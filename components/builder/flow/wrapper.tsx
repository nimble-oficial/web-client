"use client"

import { useBuilderStore } from "@/hooks"
import { useReactFlow } from "reactflow"

import { BuilderLoader } from "./loader"
import { BuilderFlowUI } from "./ui"

interface BuilderFlowWrapperProps {
  children: React.ReactNode
  isLoading: boolean
  builderId: string
}

export const BuilderFlowWrapper = ({
  children,
  isLoading,
  builderId,
}: BuilderFlowWrapperProps) => {
  const { viewportInitialized } = useReactFlow()
  const { showUI } = useBuilderStore()

  return (
    <div style={{ width: "100vw", height: "calc(100vh - 58px)" }}>
      {isLoading && !viewportInitialized && <BuilderLoader />}
      {showUI && <BuilderFlowUI builderId={builderId} />}
      {children}
    </div>
  )
}
