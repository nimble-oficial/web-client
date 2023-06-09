import { useEffect } from "react"
import {
  ChannelSelect,
  CommandsSheetProvider,
  Form,
  FormField,
  FormLabel,
  FormMessage,
  Input,
  Label,
  RolesSelect,
  Switch,
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
      setValue("description", selectedCommand.description)
      setValue("enabled", selectedCommand.enabled)
      setValue(
        "allowedChannel",
        selectedCommand?.allowedChannel ?? DEFAULT_OPTION_VALUES.allowedChannel
      )
      setValue(
        "allowedRole",
        selectedCommand?.allowedRole ?? DEFAULT_OPTION_VALUES.allowedRole
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
      toast.success("Command updated successfully!")
    } catch (err) {
      toast.error(customAPIError(err).message)
    }
  }

  return (
    <CommandsSheetProvider
      isOpen={isSheetOpen}
      isButtonDisabled={isLoading}
      buttonLabel={isLoading ? "Saving..." : "Save Changes"}
      handleCloseSheet={handleCloseSheet}
      handleSaveCommand={handleSubmit(handleSaveCommand)}
      title={`Edit "${selectedCommand.name}" command`}
      description=" Edit the command, its description, handle authorizations and more."
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
                  placeholder="Eg.: !ping"
                  className="col-span-3"
                  id="description"
                  {...field}
                />

                <FormMessage />
              </div>
            )}
          />

          <div className="flex flex-col justify-start gap-2">
            <FormLabel>Allow for Specific Channel</FormLabel>
            <ChannelSelect setValue={setValue} control={control} />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <FormLabel>Allow for Specific Role</FormLabel>
            <RolesSelect setValue={setValue} control={control} />
          </div>

          <FormField
            control={control}
            name="enabled"
            render={() => (
              <div className="flex items-center gap-4">
                <div className="flex items-center space-x-2">
                  <Controller
                    name="enabled"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Switch
                        id="enabled"
                        checked={value}
                        onCheckedChange={onChange}
                      />
                    )}
                  />

                  <Label htmlFor="enabled">Enabled</Label>
                </div>
              </div>
            )}
          />
        </form>
      </Form>
    </CommandsSheetProvider>
  )
}
