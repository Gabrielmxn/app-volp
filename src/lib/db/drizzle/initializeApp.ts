
import { openDatabaseSync } from "expo-sqlite";
import { openDatabase } from "./open";
import { drizzle, ExpoSQLiteDatabase } from "drizzle-orm/expo-sqlite";



export async function initalize() {
    try {
        await openDatabase(require('./volp.db'));
  
      
        
    } catch (error) {
      throw new Error("Nãof foi possível recuperar verbete")
    }
  }
 