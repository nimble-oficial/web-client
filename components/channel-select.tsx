"use client"

import { useState } from "react"
import {
  Button,
  ChannelSelectSkeleton,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  FormControl,
  FormField,
  Icons,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components"
import { DEFAULT_OPTION_VALUES } from "@/constants"
import { useGetGuildChannelsByType } from "@/hooks"
import { cn } from "@/lib"
import { getChannelSelectOptionLabel } from "@/utils"
import { Control, FieldValues, Path, UseFormSetValue } from "react-hook-form"

interface ChannelsMultiSelectProps<T extends FieldValues> {
  setValue: UseFormSetValue<T>
  channelType?: "text" | "voice"
  control: Control<T>
  name?: string
  width?: number
}

export function ChannelSelect<T extends FieldValues>({
  setValue,
  channelType = "text",
  control,
  width = 520,
  name = "allowedChannel",
}: ChannelsMultiSelectProps<T>) {
  const [open, setOpen] = useState(false)
  const { error, isLoading, getChannelsByType } = useGetGuildChannelsByType()

  const channels = getChannelsByType(channelType)

  // TODO: USE MULTI SELECT!!
  return (
    <FormField
      control={control}
      name={name as Path<T>}
      render={({ field }) => (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <div className="grid w-full gap-2">
              <FormControl>
                <Button
                  id={name}
                  type="button"
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "h-[40px] w-full justify-between px-3",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {isLoading
                    ? "Loading your channels..."
                    : getChannelSelectOptionLabel(field.value?.id, channels)}
                  <Icons.chevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </div>
          </PopoverTrigger>

          <PopoverContent
            className={cn(
              "max-h-[300px] overflow-y-auto p-0",
              `w-[${width}px]`
            )}
          >
            <Command className="w-full">
              <CommandInput
                className="w-full"
                placeholder="Search channels..."
              />

              {!isLoading && <CommandEmpty>No channel found.</CommandEmpty>}

              <CommandGroup>
                {!!error && !isLoading && (
                  <CommandEmpty className="border border-dashed">
                    <div className="mx-auto flex w-full flex-col items-center justify-center py-4 text-center">
                      <Icons.serverCrash size={25} />

                      <h3 className="mt-4 text-lg font-semibold">
                        Something went wrong
                      </h3>

                      <p className="text-muted-foreground mb-4 mt-2 text-sm">
                        We couldn&#39;t load channels from your server. Try
                        again later.
                      </p>
                    </div>
                  </CommandEmpty>
                )}

                {isLoading && !error ? (
                  <ChannelSelectSkeleton />
                ) : (
                  <>
                    <CommandItem
                      onSelect={() => {
                        setValue(
                          "allowedChannel",
                          DEFAULT_OPTION_VALUES.allowedChannel
                        )
                        setOpen(false)
                      }}
                    >
                      <Icons.check
                        className={cn(
                          "mr-2 h-4 w-4",
                          field?.value?.id ===
                            DEFAULT_OPTION_VALUES.allowedChannel.id
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      All Channels
                    </CommandItem>
                    {channels.map((channel) => (
                      <CommandItem
                        key={channel.id}
                        onSelect={() => {
                          setValue("allowedChannel", {
                            id: channel.id,
                            name: channel.name,
                          })
                          setOpen(false)
                        }}
                      >
                        <Icons.check
                          className={cn(
                            "mr-2 h-4 w-4",
                            field?.value?.id === channel.id
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {channel.name}
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
