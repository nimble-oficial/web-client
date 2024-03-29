"use client"

import { Guild } from "@/components"
import { create } from "zustand"

export interface Command {
  _id: string
  name: string
  enabled: boolean
  description?: string
  createdAt: string
  builderId: string
  allowedChannel: AllowedChannel
  allowedRole: AllowedRole
  commandNotEnabledMessage: string
  sendCommandNotEnabledMessage: boolean
}

export interface AllowedChannel {
  id: string
  name: string
}

export interface AllowedRole {
  id: string
  name: string
}

interface Commands {
  selectedGuild: Guild | null
  commands: Command[]
  selectedCommand: Command
  isSheetOpen: boolean
  handleEditCommand: (command: Command) => void
  handleSelectCommand: (command: Command) => void
  handleOpenSheet: () => void
  handleCloseSheet: () => void
  handleSetCommands: (commands: Command[]) => void
  handleAddNewCommand: (command: Command) => void
  handleDeleteCommand: (commandId: string) => void
  handleSelectGuild: (guildId: Guild) => void
}

interface DashboardStore extends Commands {}

const initialStates = {
  selectedGuild: null,
  commands: [],
  selectedCommand: {} as Command,
  isSheetOpen: false,
}

export const dashboardStore = create<DashboardStore>((set, get) => ({
  ...initialStates,
  handleAddNewCommand: (command) =>
    set((state) => ({ commands: [command, ...state.commands] })),

  handleSetCommands: (commands) => set({ commands }),
  handleDeleteCommand: (commandId) => {
    const commands = get().commands.filter(
      (command) => command._id !== commandId
    )

    set({ commands })
  },
  handleSelectCommand: (command) => {
    set({ selectedCommand: command })
  },
  handleEditCommand: (command) => {
    const commands = get().commands.map((c) =>
      c._id === command._id ? command : c
    )

    set({ commands })
  },
  handleOpenSheet: () => {
    set({ isSheetOpen: true })
  },
  handleCloseSheet: () => {
    set({ isSheetOpen: false })
  },
  handleSelectGuild: (guild) => {
    set({ selectedGuild: guild })
  },
}))
