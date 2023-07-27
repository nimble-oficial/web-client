"use client"

import { useEffect } from "react"
import Link from "next/link"
import {
  Button,
  EditAuthorizationCommandSettings,
  Form,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components"
import { DEFAULT_OPTION_VALUES } from "@/constants/default-option-values"
import { useDashboardStore, useEditCommandMutation } from "@/hooks"
import { EditCommandSchema, editCommandSchema } from "@/schemas"
import { EditCommandData } from "@/services"
import { Command } from "@/stores"
import { getMessageFromError, parseCommandName } from "@/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { EditGeneralCommandSettings } from "./general-settings"

interface EditCommandFormProps {
  command: Command | undefined
}

export const EditCommandForm = ({ command }: EditCommandFormProps) => {
  const { selectedGuild, handleEditCommand } = useDashboardStore()

  const { mutateAsync, isLoading } = useEditCommandMutation()

  const form = useForm<EditCommandSchema>({
    resolver: zodResolver(editCommandSchema),
  })

  const { handleSubmit, setValue, getValues, control } = form

  // TODO: fix this workaround
  useEffect(() => {
    if (command) {
      setValue("name", command.name)
      setValue("description", command?.description ?? "")
      setValue("enabled", command.enabled)
      setValue(
        "allowedChannel",
        command?.allowedChannel ?? DEFAULT_OPTION_VALUES.allowedChannel
      )
      setValue(
        "allowedRole",
        command?.allowedRole ?? DEFAULT_OPTION_VALUES.allowedRole
      )
      setValue(
        "commandNotEnabledMessage",
        command?.commandNotEnabledMessage ?? `${command.name} is not enabled.`
      )
      setValue(
        "sendCommandNotEnabledMessage",
        command?.sendCommandNotEnabledMessage ?? true
      )
    }
  }, [command, setValue])

  const handleSaveCommand = async () => {
    if (!command) {
      return
    }

    try {
      const payload: EditCommandData = {
        ...getValues(),
        commandId: command._id,
        guildId: selectedGuild?.id!,
      }

      payload.name = parseCommandName(payload.name)

      await mutateAsync(payload)

      const newCommandPayload = {
        ...command,
        ...payload,
      }

      handleEditCommand(newCommandPayload)

      toast.success("Command updated successfully!")
    } catch (err) {
      toast.error(getMessageFromError(err))
    }
  }

  if (!command) {
    return null
  }

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(handleSaveCommand)}
        className="flex w-full flex-col gap-6 lg:max-w-2xl"
      >
        <Tabs defaultValue="general" className="w-full">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="authorization">Authorization</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <EditGeneralCommandSettings control={control} />
          </TabsContent>

          <TabsContent value="authorization">
            <EditAuthorizationCommandSettings
              control={control}
              setValue={setValue}
            />
          </TabsContent>
        </Tabs>

        <div className="flex gap-4">
          <Button className="w-fit">{isLoading ? "Saving..." : "Save"}</Button>
          <Button className="w-fit" variant="secondary">
            <Link href={`/builder/${command.builderId}`}>Go To Builder</Link>
          </Button>
        </div>
      </form>
    </Form>
  )
}
