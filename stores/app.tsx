import { create } from "zustand"

import { GuildChannel, GuildRole, Member } from "@/types/discord"

interface RolesStore {
  roles: GuildRole[]
  isLoadingRoles: boolean
  rolesError: string | null

  handleSetRoles: (roles: GuildRole[]) => void
  handleSetIsLoadingRoles: (isLoadingRoles: boolean) => void
  handleSetRolesError: (rolesError: string | null) => void
}

interface MembersStore {
  members: Member[]
  isMembersLoading: boolean
  membersError: string | null

  handleSetMembers: (members: Member[]) => void
  handleSetIsMembersLoading: (isMembersLoading: boolean) => void
  handleSetMembersError: (membersError: string | null) => void
}

interface ChannelsStore {
  channels: GuildChannel[]
  isChannelsLoading: boolean
  channelsError: string | null

  handleSetChannels: (channels: GuildChannel[]) => void
  handleSetIsChannelsLoading: (isChannelsLoading: boolean) => void
  handleSetChannelsError: (channelsError: string | null) => void
}

interface AppStore extends RolesStore, MembersStore, ChannelsStore {}

const rolesInitialState = {
  roles: [],
  isLoadingRoles: true,
  rolesError: null,
}

const membersInitialState = {
  members: [],
  isMembersLoading: true,
  membersError: null,
}

const channelsInitialState = {
  channels: [],
  isChannelsLoading: true,
  channelsError: null,
}

const initialStates = {
  ...rolesInitialState,
  ...membersInitialState,
  ...channelsInitialState,
}

export const appStore = create<AppStore>((set, get) => ({
  ...initialStates,
  handleSetMembers: (members) => set({ members }),
  handleSetIsMembersLoading: (isMembersLoading) => set({ isMembersLoading }),
  handleSetMembersError: (membersError) => set({ membersError }),

  handleSetRoles: (roles) => set({ roles }),
  handleSetIsLoadingRoles: (isLoadingRoles) => set({ isLoadingRoles }),
  handleSetRolesError: (rolesError) => set({ rolesError }),

  handleSetChannels: (channels) => set({ channels }),
  handleSetIsChannelsLoading: (isChannelsLoading) => set({ isChannelsLoading }),
  handleSetChannelsError: (channelsError) => set({ channelsError }),
}))
