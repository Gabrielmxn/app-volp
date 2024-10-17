import { openDatabaseSync } from "expo-sqlite";
import { openDatabase } from "./open";
import { initializeDatabaseConnection } from "./conection";
import { getVerbeteOfVolpExternalABL } from "src/controllers/verbete";
import { fuseConection } from "@storage/fuse";

export async function initalize() {
    try {
        await openDatabase(require('./volp.db'));
        const expoDb = openDatabaseSync('volp.db')
        initializeDatabaseConnection(expoDb)

        await getVerbeteOfVolpExternalABL()
        
    } catch (error) {
      console.error("Erro ao copiarr DB:", error);
    }
  }
 