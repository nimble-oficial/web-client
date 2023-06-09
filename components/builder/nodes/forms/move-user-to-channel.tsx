import { useMemo, useState } from "react"
import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Switch,
} from "@/components"
import { useDashboardStore, useGetGuildChannelsQuery } from "@/hooks"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"

export const MoveUserToChannelNodeForm = ({}) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  const { selectedGuild } = useDashboardStore()

  const { data, isLoading } = useGetGuildChannelsQuery({
    guildId: selectedGuild.guildId,
  })

  const channels = useMemo(() => {
    return data?.data?.data || []
  }, [data?.data?.data])

  const onlyVoiceChannels = useMemo(() => {
    return (
      channels
        .filter((channel) => channel.type === 2)
        .sort((a, b) => (a.position > b.position ? 1 : -1)) || []
    )
  }, [channels])

  const getChannel = (value: string) =>
    onlyVoiceChannels.find((channel) => channel.name.toLowerCase() === value)
      ?.name

  const uniqueChannels = useMemo(() => {
    const nonDuplicated: typeof channels = []

    onlyVoiceChannels.forEach((channel) => {
      if (!nonDuplicated.some((ch) => ch.name === channel.name)) {
        nonDuplicated.push(channel)
      }
    })

    return nonDuplicated
  }, [onlyVoiceChannels])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="grid">
      <Separator />

      <div className="mt-4 flex flex-col items-start gap-2">
        <div className="mb-2 grid w-full gap-2">
          <Label htmlFor="channel">Voice Channel</Label>

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between"
              >
                {value ? getChannel(value) : "Select the voice channel..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
              <Command className="w-full">
                <CommandInput
                  placeholder="Search a voice channel..."
                  className="w-full"
                />
                <CommandEmpty>No voice channel found.</CommandEmpty>
                <CommandGroup className="w-full">
                  {uniqueChannels.map((channel) => (
                    <CommandItem
                      className="w-full"
                      key={channel.id}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === channel.name ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {channel.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>

          {/* <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between"
              >
                {value
                  ? frameworks.find((framework) => framework.value === value)
                      ?.label
                  : "Select users..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="Search framework..." />
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === framework.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {framework.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover> */}
        </div>
      </div>

      <div className="mt-2 flex flex-col items-start gap-2">
        <div className="mb-2 grid w-full gap-2">
          <Label htmlFor="message-2">Conditional</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="None" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center space-x-2">
          <Switch id="enabled" />
          <Label htmlFor="enabled">Enabled</Label>
        </div>
      </div>
    </div>
  )
}
