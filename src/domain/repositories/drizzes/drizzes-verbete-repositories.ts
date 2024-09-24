import {  verbete } from './../../../db/schema';
import { Verbete } from "src/DTO/verbete";
import { DrizzesVerbeteRepositoriesEntidade } from "../entidades/verbete-entidades";
import { db } from 'src/lib/db/drizzle';


export class DrizzesVerbeteRepositories implements DrizzesVerbeteRepositoriesEntidade{
  async registerVerbete(data: Verbete) {
    const response = await db.insert(verbete).values(data).returning()


    if(!response[0]){
     throw new Error("Não foi possível cadastrar o verbete.")
    }

    return response[0]
    
  }


}