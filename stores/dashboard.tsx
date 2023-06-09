import { create } from "zustand"

export interface Command {
  _id: string
  name: string
  enabled: boolean
  description: string
  createdAt: Date
}

export interface SelectedCommand extends Command {
  builderId: string
  allowedChannel: string
}

interface Guild {
  name: string
  guildId: string
}

export interface Commands {
  selectedGuild: Guild
  commands: Command[]
  selectedCommand: SelectedCommand
  isSheetOpen: boolean
  handleEditCommand: (command: SelectedCommand) => void
  handleSelectCommand: (command: SelectedCommand) => void
  handleOpenSheet: () => void
  handleCloseSheet: () => void
  handleSetCommands: (commands: Command[]) => void
  handleAddNewCommand: (command: Command) => void
  handleDeleteCommand: (commandId: string) => void
  handleSelectGuild: (guildId: Guild) => void
}

interface DashboardStore extends Commands {}

const initialStates = {
  selectedGuild: {
    name: "Familia Gaymer",
    guildId: "442508456495284224",
  },
  commands: [],
  selectedCommand: {} as SelectedCommand,
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
