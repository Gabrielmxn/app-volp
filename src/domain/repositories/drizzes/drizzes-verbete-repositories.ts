
import { Verbete } from "src/DTO/verbete";
import {  FetchVerbeteProps, VerbeteRepositoriesEntidade } from "../entidades/verbete-entidades";
import { db } from 'src/lib/db/drizzle/conection';
import { verbete } from "@db/schema";
import { eq, ilike, like, sql } from "drizzle-orm";
import { FindByIdProps } from "../entidades/sync-entity";
import { levenshtein } from "@utils/levenshetin";
import * as SQLite from 'expo-sqlite';



export class DrizzesVerbeteRepositories implements VerbeteRepositoriesEntidade{
  async fetchVerbete(data: FetchVerbeteProps) {
    const response = db.select().from(verbete).where(like(verbete.description, `${data.query}%`)).limit(100)

    return response

  }
    async fetchVerbeteLevenshtein(data: FetchVerbeteProps) {
    const response = db.select().from(verbete).where(sql`${verbete.description} like ${data.query} COLLATE NOACCENT`).limit(100)

    return response

  }


  async fetchVerbeteWithLev({query}: FetchVerbeteProps){
    const dbww = await db.select().from(verbete)

    const test = dbww.filter(response => {
      const distance = levenshtein(response.description, query)
console.log(distance)
      if(distance <= 2){
        console.log(distance)
        return response
      }
    })

    return test
    
   

  }
  async deleteVerbete(data: Verbete): Promise<Verbete | null> {
   const response = db.delete(verbete).where(eq(verbete.id, data.id)).returning().get()
   

   if(!response){
    return null
   }
   return response
  }
  async findById({id}: FindByIdProps){
    const response = db.select().from(verbete).where(eq(verbete.id, id)).get()

    if(!response){
      return null
    }

    return response
  }
  async registerVerbete(data: Verbete) {
    const response = await db.insert(verbete).values(data).onConflictDoNothing().returning()

    

    return response[0]
    
  }


  async updateVerbete(data: Verbete){
      const response = await db.update(verbete).set(data).where(eq(verbete.id, data.id)).returning().get()

    

    return response
    
  }


}