"use client"

import { useRouter } from "next/navigation"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  Icons,
} from "@/components"
import { signOut, useSession } from "next-auth/react"

export function UserNav() {
  const { replace } = useRouter()
  const { data, status } = useSession()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          {status === "authenticated" && data?.user?.name && (
            <Avatar className="h-8 w-8">
              <AvatarImage src={data.user.image ?? ""} alt={data.user.name} />
              <AvatarFallback>{data.user.name.substring(0, 1)}</AvatarFallback>
            </Avatar>
          )}
        </Button>
      </DropdownMenuTrigger>
      {data?.user?.name && (
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-semibold leading-none">
                {data.user.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {data.user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Icons.user className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icons.creditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icons.settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icons.plusCircle className="mr-2 h-4 w-4" />
              <span>New Team</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={async () => {
              await signOut()
              replace("/auth")
            }}
          >
            <Icons.logout className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  )
}
