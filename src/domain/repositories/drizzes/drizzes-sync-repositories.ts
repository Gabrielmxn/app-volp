import {  sync } from './../../../db/schema';
import { db } from 'src/lib/db/drizzle';
import {  FindByIdProps, SyncRepositories, UpdateDateLastSyncProps } from '../entidades/sync-entity';
import { Sync } from 'src/DTO/sync';
import { eq } from 'drizzle-orm';


export class DrizzesSyncRepositories implements SyncRepositories{
  async updateDateLastSync({date}: UpdateDateLastSyncProps) {
    const syncResponse = (await db.update(sync).set({
      date
    }).returning())[0]

    return syncResponse
  }
  async findById({date}: FindByIdProps) {
    const response = (await db.select().from(sync).where(eq(sync.date, date)))[0]

    if(!response){
      return null
    }

    return response
  }
  async fetchDateOfLastSync(){
    const response = await db.select().from(sync)
    console.log(response)

    return response[0] ? response[0] : null
  }
 
}