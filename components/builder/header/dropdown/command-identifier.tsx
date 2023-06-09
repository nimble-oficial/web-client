import { ChevronDown } from "lucide-react"

interface CommandIdentifierProps {
  guildName: string
  commandName: string
}

export const CommandIdentifier = ({
  commandName,
  guildName,
}: CommandIdentifierProps) => {
  return (
    <div
      role="button"
      className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400"
    >
      {guildName} / {commandName} <ChevronDown size={15} />
    </div>
  )
}
