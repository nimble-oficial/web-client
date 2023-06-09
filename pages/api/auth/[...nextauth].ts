import NextAuth, { AuthOptions } from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

interface User {
  id: string
  username: string
  discriminator: string
  locale: string
  image: string
  email: string
  access_token: string
  refresh_token: string
  expires_at: number
  token_type: string
}

export const authOptions: AuthOptions = {
  theme: {
    colorScheme: "light",
  },

  // callbacks: {
  //   async session({ session, token }) {
  //     if (session.user) {
  //       Object.assign(session.user, { id: token.sub })
  //     }

  //     return session
  //   },
  // },

  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID ?? "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET ?? "",
    }),
  ],
}

export default NextAuth(authOptions)
