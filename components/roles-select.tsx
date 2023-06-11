import { useState } from "react"
import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  FormControl,
  FormField,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RolesSelectSkeleton,
} from "@/components"
import { DEFAULT_OPTION_VALUES } from "@/constants/default-option-values"
import { useDashboardStore, useGetGuildRoles } from "@/hooks"
import { getRoleSelectOptionLabel } from "@/utils"
import { Check, ChevronsUpDown, ServerCrash } from "lucide-react"
import { Control, FieldValues, UseFormSetValue } from "react-hook-form"

import { cn } from "@/lib/utils"

interface RolesMultiSelectProps<T extends FieldValues> {
  setValue: UseFormSetValue<T>
  control: Control<T>
}

export function RolesSelect<T extends FieldValues>({
  setValue,
  control,
}: RolesMultiSelectProps<T>) {
  const [open, setOpen] = useState(false)

  const { selectedGuild } = useDashboardStore()

  const { data, isLoading, error } = useGetGuildRoles({
    guildId: selectedGuild?.id!,
  })

  const roles = data?.data?.filter((role) => role.name !== "@everyone")

  // TODO: USE MULTI SELECT!!
  return (
    <FormField
      control={control}
      name="allowedRole"
      render={({ field }) => (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <div className="grid w-full gap-2">
              <FormControl>
                <Button
                  id="allowedRole"
                  type="button"
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-full justify-between",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {isLoading
                    ? "Loading your roles..."
                    : getRoleSelectOptionLabel(field.value?.id, roles)}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </div>
          </PopoverTrigger>

          <PopoverContent className="max-h-[300px] w-[550px] overflow-y-auto p-0">
            <Command className="w-full">
              <CommandInput className="w-full" placeholder="Search roles..." />

              {!isLoading && <CommandEmpty>No role found.</CommandEmpty>}

              <CommandGroup>
                {!!error && !isLoading && (
                  <CommandEmpty className="border border-dashed">
                    <div className="mx-auto flex w-full flex-col items-center justify-center py-4 text-center">
                      <ServerCrash size={25} />

                      <h3 className="mt-4 text-lg font-semibold">
                        Something went wrong
                      </h3>

                      <p className="mb-4 mt-2 text-sm text-muted-foreground">
                        We couldn&#39;t load roles from your server. Try again
                        later.
                      </p>
                    </div>
                  </CommandEmpty>
                )}

                {isLoading && !error ? (
                  <RolesSelectSkeleton />
                ) : (
                  <>
                    <CommandItem
                      onSelect={() => {
                        setValue(
                          "allowedRole",
                          DEFAULT_OPTION_VALUES.allowedRole
                        )
                        setOpen(false)
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          field.value.id ===
                            DEFAULT_OPTION_VALUES.allowedRole.id
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      All Roles
                    </CommandItem>
                    {roles?.map((role) => (
                      <CommandItem
                        key={role.id}
                        onSelect={() => {
                          setValue("allowedRole", {
                            id: role.id,
                            name: role.name,
                          })
                          setOpen(false)
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            field.value.id === role.id
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {role.name}
                      </CommandItem>
                    ))}
                  </>
                )}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      )}
    />
  )
}
