import { createEnv } from "@t3-oss/env-nextjs"
import dotenv from "dotenv"
import { z } from "zod"

dotenv.config({ path: ".env.local" })

export const serverEnv = createEnv({
    server: {
        PG_CONNECTION_URL: z.string().startsWith("postgres://"),
        AUTH_SECRET: z.string().min(1),
        AUTH_SPOTIFY_ID: z.string().min(1),
        AUTH_SPOTIFY_SECRET: z.string().min(1),
    },
    runtimeEnv: process.env,
})
