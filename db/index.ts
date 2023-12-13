import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

import { serverEnv } from "@/config/env/server.mjs"

import * as schema from "./schema"

export const sql = postgres(serverEnv.PG_CONNECTION_URL, { max: 1 })

export const db = drizzle(sql, { schema })
