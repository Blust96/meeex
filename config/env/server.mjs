import { createEnv } from "@t3-oss/env-nextjs"
import dotenv from "dotenv"
import { z } from "zod"

dotenv.config({ path: ".env.local" })

export const serverEnv = createEnv({
    server: {
        PG_CONNECTION_URL: z.string().startsWith("postgres://"),
        GOOGLE_CLIENT_ID: z.string().min(1),
        GOOGLE_CLIENT_SECRET: z.string().min(1),
    },
    runtimeEnv: process.env,
})
