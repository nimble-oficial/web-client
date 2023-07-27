import { Icons } from "./icons"

interface EmptyProps {
  heading: string
  description: string
  children?: React.ReactNode
}

export const Empty = ({ heading, description, children }: EmptyProps) => {
  return (
    <div className="space-y-4 text-center">
      <Icons.ghost size={70} className="mx-auto" />
      <div>
        <h1 className="text-2xl font-bold">{heading}</h1>
        <p className="text-gray-500">{description}</p>
      </div>

      {children}
    </div>
  )
}
