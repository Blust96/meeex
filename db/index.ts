import { config } from "dotenv"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

import * as schema from "./schema"

config({ path: ".env.local" })

if (!process.env.PG_CONNECTION_URL) {
    throw new Error("Missing postgres connection string environment variable!")
}

export const sql = postgres(process.env.PG_CONNECTION_URL, { max: 1 })

export const db = drizzle(sql, { schema })
