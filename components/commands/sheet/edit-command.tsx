import {
  ChannelSelect,
  CommandsSheetProvider,
  Form,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  Input,
  Label,
  Switch,
} from "@/components"
import { useDashboardStore, useEditCommandMutation } from "@/hooks"
import { EditCommandSchema, editCommandSchema } from "@/schemas"
import { customAPIError, parseCommandName } from "@/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"

export const EditCommandSheet = () => {
  const {
    isSheetOpen,
    selectedCommand,
    handleCloseSheet,
    handleEditCommand,
    handleSelectCommand,
  } = useDashboardStore()

  const { mutateAsync, isLoading } = useEditCommandMutation()

  const form = useForm<EditCommandSchema>({
    resolver: zodResolver(editCommandSchema),
    defaultValues: {
      name: selectedCommand?.name ?? "",
      description: selectedCommand?.description ?? "",
      enabled: selectedCommand?.enabled ?? true,
      allowedChannel: selectedCommand?.allowedChannel ?? "all",
    },
  })

  const { handleSubmit, setValue, getValues, control } = form

  const handleSaveCommand = async () => {
    try {
      const payload = {
        ...getValues(),
        commandId: selectedCommand._id,
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
      description=" Edit the command, its description, enable command and more."
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
            <FormDescription>
              Select only text channel to allow this command to be triggered in.
            </FormDescription>

            <ChannelSelect setValue={setValue} control={control} />
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
