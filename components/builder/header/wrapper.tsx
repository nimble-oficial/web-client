interface BuilderFlowHeaderProviderProps {
  children: React.ReactNode
}

export const BuilderFlowHeaderProvider = ({
  children,
}: BuilderFlowHeaderProviderProps) => {
  return (
    <header className="light:border-b-slate-200 w-screen border bg-white p-2 dark:bg-gray-950">
      <div className="flex items-center justify-between">{children}</div>
    </header>
  )
}
