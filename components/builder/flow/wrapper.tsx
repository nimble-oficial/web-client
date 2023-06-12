"use client"

interface BuilderFlowWrapperProps {
  children: React.ReactNode
}

export const BuilderFlowWrapper = ({ children }: BuilderFlowWrapperProps) => {
  return (
    <div style={{ width: "100vw", height: "calc(100vh - 58px)" }}>
      {children}
    </div>
  )
}
