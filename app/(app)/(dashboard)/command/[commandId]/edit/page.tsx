"use client"

import {
  Button,
  EditCommandForm,
  EditCommandSkeleton,
  Empty,
  Heading,
} from "@/components"
import { useGetCommand } from "@/hooks"
import { getMessageFromError } from "@/utils"

interface CommandPageProps {
  params: {
    commandId: string
  }
}

export default function CommandPage({ params }: CommandPageProps) {
  const { commandId } = params
  const { data, isLoading, error, refetch } = useGetCommand({ commandId })

  const command = data?.data?.data

  if (!!error) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <Empty
          heading="Something went wrong"
          description={getMessageFromError(error)}
        >
          <Button onClick={() => refetch()}>Try Again</Button>
        </Empty>
      </div>
    )
  }

  if (isLoading) {
    return <EditCommandSkeleton />
  }

  return (
    <div className="flex flex-col gap-4 px-4">
      <Heading
        heading={`Edit ${command?.name ?? "Command"}`}
        text="Edit the command's name and configurations."
      />

      <EditCommandForm command={command} />
    </div>
  )
}
