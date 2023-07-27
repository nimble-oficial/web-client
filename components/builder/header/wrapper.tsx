interface BuilderFlowHeaderProviderProps {
  children: React.ReactNode
}

export const BuilderFlowHeaderProvider = ({
  children,
}: BuilderFlowHeaderProviderProps) => {
  return (
    <header className="light:border-b-slate-200 dark:bg-background fixed top-0 z-20 w-screen border bg-white p-2">
      <div className="flex items-center justify-between">{children}</div>
    </header>
  )
}
