
import { Verbete } from "src/DTO/verbete";
import {  FetchVerbeteProps, VerbeteRepositoriesEntity } from "../entity/verbete-entidades";

import { verbete } from "@db/schema";
import { eq, like, sql } from "drizzle-orm";
import { FindByIdProps } from "../entity/sync-entity";
import { levenshtein } from "@utils/levenshetin";
import { openDatabaseSync } from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";



export class DrizzleVerbeteRepositories implements VerbeteRepositoriesEntity{
      private expoDb = openDatabaseSync('volp.db')
    private db = drizzle(this.expoDb)
  

  
  async fetchVerbete(data: FetchVerbeteProps) {
    const response = this.db.select().from(verbete).where(like(verbete.description, `%${data.query}%`)).limit(10)
    
    
    return response

  }
    async fetchVerbeteLevenshtein(data: FetchVerbeteProps) {
    const response = this.db.select().from(verbete).where(sql`${verbete.description} like ${data.query} COLLATE NOACCENT`).limit(10)

    return response

  }


  async fetchVerbeteWithLev({query}: FetchVerbeteProps){
    const dbww = await this.db.select().from(verbete)

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
   const response = this.db.delete(verbete).where(eq(verbete.id, data.id)).returning().get()
   

   if(!response){
    return null
   }
   return response
  }
  async findById({id}: FindByIdProps){
    const response = this.db.select().from(verbete).where(eq(verbete.id, id)).get()
   
    return response
  }
  async registerVerbete(data: Verbete) {
     const {id, description, foreing } = data
    const response = await this.db.insert(verbete).values({id, description, foreing }).returning()

    
    console.log('o que é' + response[0])
    return response[0]
    
  }


  async updateVerbete(data: Verbete){
      const response = await this.db.update(verbete).set(data).where(eq(verbete.id, data.id)).returning().get()

    

    return response
    
  }


}