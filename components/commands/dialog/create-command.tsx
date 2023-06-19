"use client"

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Form,
  FormField,
  FormLabel,
  FormMessage,
  Input,
  SheetClose,
  SheetFooter,
} from "@/components"
import { DEFAULT_OPTION_VALUES } from "@/constants"
import { useCreateCommandMutation, useDashboardStore } from "@/hooks"
import { CreateCommandSchema, createCommandSchema } from "@/schemas"
import { customAPIError, parseCommandName } from "@/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

interface CreateCommandDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function CreateCommandDialog({
  isOpen,
  onClose: handleCloseDialog,
}: CreateCommandDialogProps) {
  const form = useForm<CreateCommandSchema>({
    resolver: zodResolver(createCommandSchema),
  })

  const { handleSubmit, getValues, reset: resetFormFields, control } = form
  const { handleAddNewCommand, selectedGuild } = useDashboardStore()
  const { mutateAsync, isLoading } = useCreateCommandMutation()

  const handleCreate = async () => {
    try {
      const formValues = getValues()

      const { data } = await mutateAsync({
        description: formValues.description,
        guildId: selectedGuild?.id!,
        name: parseCommandName(formValues.name),
      })

      const createdCommand = {
        ...formValues,
        guildId: selectedGuild?.id!,
        enabled: true,
        _id: data?.data?._id,
        builderId: data?.data?.builderId,
        createdAt: new Date(),
        sendCommandNotEnabledMessage: true,
        commandNotEnabledMessage: `${formValues.name} is not enabled.`,
        ...DEFAULT_OPTION_VALUES,
      }

      handleCloseDialog()
      handleAddNewCommand(createdCommand)
      resetFormFields()

      toast.success("Command created successfully!")
    } catch (err) {
      toast.error(customAPIError(err))
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleCloseDialog}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Command</DialogTitle>

          <DialogDescription>
            Create a new command for your server. You can edit the command later
            on.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={handleSubmit(handleCreate)}
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

            <SheetFooter>
              <SheetClose asChild>
                <Button
                  type="submit"
                  onClick={handleCreate}
                  disabled={isLoading}
                >
                  Create command
                </Button>
              </SheetClose>
            </SheetFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
