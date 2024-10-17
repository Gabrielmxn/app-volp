import { drizzle, ExpoSQLiteDatabase } from "drizzle-orm/expo-sqlite";
import { SQLiteDatabase } from "expo-sqlite";

export let db: ExpoSQLiteDatabase<Record<string, never>>
export function initializeDatabaseConnection(expoDb: SQLiteDatabase){
  db = drizzle(expoDb, {
    logger: true,
  })
  console.log("CONEXÃO ESTABELECIDA")
}