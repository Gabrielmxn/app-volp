import {  verbete } from './../../../db/schema';
import { Verbete } from "src/DTO/verbete";
import {  VerbeteRepositoriesEntidade } from "../entidades/verbete-entidades";
import { db } from 'src/lib/db/drizzle';


export class DrizzesVerbeteRepositories implements VerbeteRepositoriesEntidade{
  async registerVerbete(data: Verbete) {
    const response = await db.insert(verbete).values(data).onConflictDoNothing().returning()

    if(!response[0]){
     console.log("Já está cadastrado")
    }

    return response[0]
    
  }


}