"use client"

import { useEffect } from "react"
import {
  ChannelSelect,
  CommandsSheetProvider,
  EnableCommandSwitch,
  Form,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  Input,
  Label,
  RolesSelect,
  Separator,
  Switch,
  TextareaWithLimit,
} from "@/components"
import { DEFAULT_OPTION_VALUES } from "@/constants/default-option-values"
import { useDashboardStore, useEditCommandMutation } from "@/hooks"
import { EditCommandSchema, editCommandSchema } from "@/schemas"
import { EditCommandData } from "@/services"
import { customAPIError, parseCommandName } from "@/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"

export const EditCommandSheet = () => {
  const {
    isSheetOpen,
    selectedGuild,
    selectedCommand,
    handleCloseSheet,
    handleEditCommand,
    handleSelectCommand,
  } = useDashboardStore()

  const { mutateAsync, isLoading } = useEditCommandMutation()

  const form = useForm<EditCommandSchema>({
    resolver: zodResolver(editCommandSchema),
  })

  const { handleSubmit, setValue, getValues, control } = form

  // TODO: fix this workaround
  useEffect(() => {
    if (selectedCommand) {
      setValue("name", selectedCommand.name)
      setValue("description", selectedCommand?.description ?? "")
      setValue("enabled", selectedCommand.enabled)
      setValue(
        "allowedChannel",
        selectedCommand?.allowedChannel ?? DEFAULT_OPTION_VALUES.allowedChannel
      )
      setValue(
        "allowedRole",
        selectedCommand?.allowedRole ?? DEFAULT_OPTION_VALUES.allowedRole
      )
      setValue(
        "commandNotEnabledMessage",
        selectedCommand?.commandNotEnabledMessage ??
          `${selectedCommand.name} is not enabled.`
      )
      setValue(
        "sendCommandNotEnabledMessage",
        selectedCommand?.sendCommandNotEnabledMessage ?? true
      )
    }
  }, [selectedCommand, setValue])

  const handleSaveCommand = async () => {
    try {
      const payload: EditCommandData = {
        ...getValues(),
        commandId: selectedCommand._id,
        guildId: selectedGuild?.id!,
      }

      payload.name = parseCommandName(payload.name)

      await mutateAsync(payload)

      const newCommandPayload = {
        ...selectedCommand,
        ...payload,
      }

      handleEditCommand(newCommandPayload)
      handleSelectCommand(newCommandPayload)
      handleCloseSheet()

      toast.success("Command updated successfully!")
    } catch (err) {
      toast.error(customAPIError(err))
    }
  }

  return (
    <CommandsSheetProvider
      isOpen={isSheetOpen}
      isButtonDisabled={isLoading}
      buttonLabel={isLoading ? "Saving..." : "Save Changes"}
      handleCloseSheet={handleCloseSheet}
      handleSaveCommand={handleSubmit(handleSaveCommand)}
      title={`Edit "${selectedCommand.name}"`}
      description="Edit the command, its description, handle authorizations and more."
    >
      <Form {...form}>
        <form
          onSubmit={handleSubmit(handleSaveCommand)}
          className="grid space-y-6"
        >
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <div className="flex flex-col justify-start gap-2">
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  placeholder="Eg.: !ping"
                  className="col-span-3"
                  id="name"
                  {...field}
                />

                <FormMessage />
              </div>
            )}
          />

          <FormField
            control={control}
            name="description"
            render={({ field }) => (
              <div className="flex flex-col justify-start gap-2">
                <FormLabel htmlFor="description">Description</FormLabel>
                <Input
                  placeholder="Eg.: Replies with pong"
                  className="col-span-3"
                  id="description"
                  {...field}
                />

                <FormMessage />
              </div>
            )}
          />

          <div className="flex flex-col justify-start gap-2">
            <FormLabel htmlFor="allowedChannel">
              Allow for specific channel
            </FormLabel>
            <ChannelSelect setValue={setValue} control={control} />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <FormLabel htmlFor="allowedRole">Allow for specific role</FormLabel>
            <RolesSelect setValue={setValue} control={control} />
          </div>

          <FormField
            control={control}
            name="commandNotEnabledMessage"
            render={({ field }) => (
              <div className="flex flex-col justify-start gap-2">
                <FormLabel htmlFor="commandNotEnabledMessage">
                  Command not enabled message
                </FormLabel>

                <TextareaWithLimit
                  id="commandNotEnabledMessage"
                  placeholder="Eg.: This comand is not enabled."
                  {...field}
                />

                <FormMessage />
              </div>
            )}
          />

          <Separator />

          <EnableCommandSwitch control={control} />

          <div className="flex flex-row items-center justify-between space-y-2 rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Send command not enabled message
              </Label>
              <FormDescription className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                You can customize the message in the &quot;Command not enabled
                message&quot; field.
              </FormDescription>
            </div>
            <FormField
              control={control}
              name="sendCommandNotEnabledMessage"
              render={() => (
                <div className="flex items-center gap-4">
                  <div className="flex items-center space-x-2">
                    <Controller
                      name="sendCommandNotEnabledMessage"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <Switch
                          id="sendCommandNotEnabledMessage"
                          checked={value}
                          onCheckedChange={onChange}
                        />
                      )}
                    />
                  </div>
                </div>
              )}
            />
          </div>
        </form>
      </Form>
    </CommandsSheetProvider>
  )
}
