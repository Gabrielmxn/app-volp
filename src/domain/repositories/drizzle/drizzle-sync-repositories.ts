

import { sync } from '@db/schema';
import {  FindByIdProps, SyncRepositoriesEntity, UpdateDateLastSyncProps } from '../entity/sync-entity';
import { eq, ne } from 'drizzle-orm';
import { openDatabaseSync } from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';




export class DrizzleSyncRepositories implements SyncRepositoriesEntity{
    private expoDb = openDatabaseSync('volp.db')
    private db = drizzle(this.expoDb)

  async updateDateLastSync({date}: UpdateDateLastSyncProps) {
    console.log('updateDateLastSync', date)
    const syncResponse = (await this.db.update(sync).set({
      date: date,
    }).where(eq(sync.id, 1)).returning())[0]

    return syncResponse
  }
  async findById({id}: FindByIdProps) {
    const response = (await this.db.select().from(sync).where(ne(sync.id, id)))[0]

    if(!response){
      return null
    }

    return response
  }
  async fetchDateOfLastSync(){
    const response = await this.db.select().from(sync).where(eq(sync.id, 1))
   console.log(response)

    return response[0] ? response[0] : null
  }
 
}