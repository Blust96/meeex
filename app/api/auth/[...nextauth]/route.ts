import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

import { serverEnv } from "@/config/env/server.mjs"
import { db } from "@/db"

const handler = NextAuth({
    adapter: DrizzleAdapter(db),
    providers: [
        GoogleProvider({
            clientId: serverEnv.GOOGLE_CLIENT_ID,
            clientSecret: serverEnv.GOOGLE_CLIENT_SECRET,
        }),
    ],
})

export { handler as GET, handler as POST }
