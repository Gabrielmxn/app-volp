import { drizzle, ExpoSQLiteDatabase } from "drizzle-orm/expo-sqlite";
import SQLite, { openDatabaseSync, importDatabaseFromAssetAsync } from "expo-sqlite/next";
import * as FileSystem from 'expo-file-system'
import {Asset} from 'expo-asset'



// async function openDatabase(pathToDatabaseFile: string) {
//   if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
//     await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
//   }
//   const asset = await Asset.fromModule(pathToDatabaseFile).downloadAsync();
//   if(!asset.localUri){
//     throw new Error("error")
//   }
//   await FileSystem.copyAsync({
//     from: asset.localUri,
//     to: FileSystem.documentDirectory + 'SQLite/volp.db',
//   });
//   return SQLite.openDatabaseSync('volp.db');
// }

async function openDatabase(pathToDatabaseFile: string) {
  // Verifica se o diretório 'SQLite' existe no FileSystem
  const sqliteDir = FileSystem.documentDirectory + 'SQLite';
  const dirInfo = await FileSystem.getInfoAsync(sqliteDir);
  
  if (!dirInfo.exists) {
    // Cria o diretório SQLite se não existir
    await FileSystem.makeDirectoryAsync(sqliteDir);
  }

  // Baixa o arquivo de banco de dados do módulo (do asset)
  const asset = await Asset.fromModule(pathToDatabaseFile).downloadAsync();

  if (!asset.localUri) {
    throw new Error('Erro ao fazer download do banco de dados');
  }

  // Copia o banco de dados baixado para o diretório do FileSystem
  await FileSystem.copyAsync({
    from: asset.localUri,
    to: `${sqliteDir}/volp.db`,
  });

  // Abre o banco de dados SQLite
  return SQLite.openDatabaseAsync('volp.db');
}
const expo = await openDatabase(require('./volp.db'))
// const expo = openDatabaseSync("volp", {

// });

// importDatabaseFromAssetAsync("volp", {
//   assetId: require('./volp.db'),
//   forceOverwrite: true

// })

console.log("auwdwia aw")

export const db = drizzle(expo);


