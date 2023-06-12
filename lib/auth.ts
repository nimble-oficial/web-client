import { AuthOptions } from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

export const authOptions: AuthOptions = {
  theme: {
    colorScheme: "light",
  },
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID ?? "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET ?? "",
    }),
  ],
}
