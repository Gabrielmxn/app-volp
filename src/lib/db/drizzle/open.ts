import * as FileSystem from 'expo-file-system'
import {Asset} from 'expo-asset'

export async function openDatabase(pathToDatabaseFile: string) {
  if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
  }
  const asset = await Asset.fromModule(pathToDatabaseFile).downloadAsync();
  if(!asset.localUri){
    throw new Error("error")
  }

    const dbExists = (await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite/volp.db')).exists;
    console.log(dbExists)
  if (dbExists) {
    console.log('Banco de dados já existe. Não será copiado novamente.');
    return;
  }
  await FileSystem.copyAsync({
    from: asset.localUri,
    to: FileSystem.documentDirectory + 'SQLite/volp.db',
  });
}