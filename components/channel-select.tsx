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
  Skeleton,
} from "@/components"
import { DEFAULT_OPTION_VALUES } from "@/constants/default-option-values"
import { useDashboardStore, useGetGuildChannelsQuery } from "@/hooks"
import { cn } from "@/lib"
import { Check, ChevronsUpDown, ServerCrash } from "lucide-react"
import { Control, FieldValues, UseFormSetValue } from "react-hook-form"

interface ChannelsMultiSelectProps<T extends FieldValues> {
  setValue: UseFormSetValue<T>
  channelType?: "text" | "voice"
  control: Control<T>
}

const CHANNEL_TYPES = {
  text: 0,
  voice: 2,
}

export function ChannelSelect<T extends FieldValues>({
  setValue,
  channelType = "text",
  control,
}: ChannelsMultiSelectProps<T>) {
  const [open, setOpen] = useState(false)

  const { selectedGuild } = useDashboardStore()

  const { data, isLoading, error } = useGetGuildChannelsQuery({
    guildId: selectedGuild?.id!,
  })

  const channels = data?.data

  const onlyTextChannels =
    channels?.filter(
      (channel) => CHANNEL_TYPES[channelType] === channel.type
    ) || []

  const getChannelName = (value: string) => {
    if (value === DEFAULT_OPTION_VALUES.allowedChannel) return "All Channels"

    return onlyTextChannels.find((channel) => channel.id === value)?.name
  }

  // TODO: USE MULTI SELECT!!
  return (
    <FormField
      control={control}
      name="allowedChannel"
      render={({ field: { value } }) => (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <div className="grid w-full gap-2">
              <FormControl>
                <Button
                  type="button"
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-full justify-between",
                    !value && "text-muted-foreground"
                  )}
                >
                  {isLoading
                    ? "Loading your channels..."
                    : getChannelName(value)}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </div>
          </PopoverTrigger>

          <PopoverContent className="max-h-[300px] w-[550px] overflow-y-auto p-0">
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
                      <ServerCrash size={25} />

                      <h3 className="mt-4 text-lg font-semibold">
                        Something went wrong
                      </h3>

                      <p className="mb-4 mt-2 text-sm text-muted-foreground">
                        We couldn&#39;t load channels from your server. Try
                        again later.
                      </p>
                    </div>
                  </CommandEmpty>
                )}

                {isLoading && !error ? (
                  <div className="space-y-1">
                    <Skeleton className="h-[30px] w-full" />
                    <Skeleton className="h-[30px] w-full" />
                    <Skeleton className="h-[30px] w-full" />
                  </div>
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
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === DEFAULT_OPTION_VALUES.allowedChannel
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      All Channels
                    </CommandItem>
                    {onlyTextChannels.map((channel) => (
                      <CommandItem
                        key={channel.id}
                        onSelect={() => {
                          setValue("allowedChannel", channel.id)
                          setOpen(false)
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === channel.id ? "opacity-100" : "opacity-0"
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
