export interface Member {
  user: {
    avatar: string
    id: string
    username: string
    discriminator: string
  }
}

export interface GuildRole {
  id: string
  name: string
}

export interface GuildChannel {
  id: string
  name: string
  position: number
  parent_id: string
  type: number
}
