import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite/next";

const expo = openDatabaseSync("volp.db");

export const db = drizzle(expo);


