"use client"

import { ComponentPropsWithoutRef, useEffect, useState } from "react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  GuildSwitcherSkeleton,
  Icons,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components"
import { useDashboardStore, useGetUserGuilds } from "@/hooks"
import { cn } from "@/lib"
import { getGuildIcon } from "@/utils"

export interface Guild {
  id: string
  value: string
  name: string
  icon: string
}

type PopoverTriggerProps = ComponentPropsWithoutRef<typeof PopoverTrigger>

interface TeamSwitcherProps extends PopoverTriggerProps {}

export function GuildSwitcher({ className }: TeamSwitcherProps) {
  const [open, setOpen] = useState(false)

  const [showNewTeamDialog, setShowNewTeamDialog] = useState(false)

  const { data, isLoading } = useGetUserGuilds()

  const guilds = data?.data

  const [selectedGuild, setSelectedGuild] = useState<Guild | null>(null)

  const { handleSelectGuild } = useDashboardStore()

  useEffect(() => {
    if (guilds?.length) {
      setSelectedGuild(guilds[0])
      handleSelectGuild(guilds[0])
    }
  }, [guilds, handleSelectGuild])

  if (isLoading) {
    return <GuildSwitcherSkeleton />
  }

  return (
    <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          {!!selectedGuild?.name && (
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              aria-label="Select a server"
              className={cn("w-[200px] justify-between", className)}
            >
              <Avatar className="mr-2 h-5 w-5">
                <AvatarImage
                  src={getGuildIcon(selectedGuild.id, selectedGuild.icon)}
                  alt={selectedGuild.name}
                />

                <AvatarFallback>
                  {selectedGuild.name.substring(0, 1)}
                </AvatarFallback>
              </Avatar>

              {selectedGuild.name}

              <Icons.chevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
            </Button>
          )}
        </PopoverTrigger>

        <PopoverContent className="w-[200px] p-0" side="top">
          <Command>
            <CommandList>
              <CommandInput placeholder="Search server..." />
              <CommandEmpty>No server found.</CommandEmpty>
              {guilds?.map((guild) => (
                <CommandItem
                  key={guild.id}
                  onSelect={() => {
                    handleSelectGuild(guild)
                    setSelectedGuild(guild)
                    setOpen(false)
                  }}
                  className="text-sm"
                >
                  <Avatar className="mr-2 h-5 w-5">
                    <AvatarImage
                      src={getGuildIcon(guild?.id, guild.icon)}
                      alt={guild.name}
                    />

                    <AvatarFallback>
                      {guild.name?.substring(0, 1)}
                    </AvatarFallback>
                  </Avatar>

                  {guild.name}

                  <Icons.check
                    className={cn(
                      "ml-auto h-4 w-4",
                      selectedGuild?.name === guild.name
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandList>

            <CommandSeparator />

            <CommandList>
              <CommandGroup>
                <DialogTrigger asChild>
                  <CommandItem
                    onSelect={() => {
                      setOpen(false)
                      setShowNewTeamDialog(true)
                    }}
                  >
                    <Icons.plusCircle className="mr-2 h-5 w-5" />
                    Add new server
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new server</DialogTitle>

          <DialogDescription>
            Add a new team to manage products and customers.
          </DialogDescription>
        </DialogHeader>

        <div>
          <div className="space-y-4 py-2 pb-4">
            <div className="space-y-2">
              <Label htmlFor="name">Team name</Label>

              <Input id="name" placeholder="Acme Inc." />
            </div>

            <div className="space-y-2">
              <Label htmlFor="plan">Subscription plan</Label>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="free">
                    <span className="font-medium">Free</span> -{" "}
                    <span className="text-muted-foreground">
                      Trial for two weeks
                    </span>
                  </SelectItem>

                  <SelectItem value="pro">
                    <span className="font-medium">Pro</span> -{" "}
                    <span className="text-muted-foreground">
                      $9/month per user
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowNewTeamDialog(false)}>
            Cancel
          </Button>

          <Button type="submit">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
