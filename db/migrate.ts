import { migrate } from "drizzle-orm/postgres-js/migrator"

import { db, sql } from "."

await migrate(db, { migrationsFolder: "drizzle" })

await sql.end()
