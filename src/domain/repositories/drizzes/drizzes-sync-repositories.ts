

import { sync } from '@db/schema';
import {  FindByIdProps, ISyncRepositories, UpdateDateLastSyncProps } from '../entidades/sync-entity';
import { eq, ne } from 'drizzle-orm';
import { db } from 'src/lib/db/drizzle/conection';



export class DrizzesSyncRepositories implements ISyncRepositories{
  async updateDateLastSync({date}: UpdateDateLastSyncProps) {
    console.log('updateDateLastSync', date)
    const syncResponse = (await db.update(sync).set({
      date: date,
    }).where(eq(sync.id, 1)).returning())[0]

    return syncResponse
  }
  async findById({date}: FindByIdProps) {
    const response = (await db.select().from(sync).where(ne(sync.date, date)))[0]

    if(!response){
      return null
    }

    return response
  }
  async fetchDateOfLastSync(){
    const response = await db.select().from(sync).where(eq(sync.id, 1))
   console.log(response)

    return response[0] ? response[0] : null
  }
 
}