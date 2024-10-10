
import { db } from "src/lib/db/drizzle/conection"
import { DrizzleAboutRepository } from "../repositories/drizzes/drizzle-about-repository"
import { IAboutRepository } from "../repositories/entidades/about-entity"
import { VerbeteRepositoriesEntidade } from "../repositories/entidades/verbete-entidades"
import { about as aboutSchema } from "@db/schema"


export interface UpdateAboutUseCaseRequest {
  id: number
  about: string
  executionDateOperation: number
}
export class UpdateAboutUseCase{
  constructor(private aboutRepository: IAboutRepository){}

  async execute({id, about, executionDateOperation}: UpdateAboutUseCaseRequest){
    const response = await this.aboutRepository.findAbout()
    if(response.length === 0){
      await db.insert(aboutSchema).values({id, description: about, executionDateOperation}).returning()
      return
    }

    if(response[0].id === id){
      return
    }

     if(response[0].id !== id){
      console.log(id)
      console.log(response[0].id)
       const newAbout = await this.aboutRepository.updateAbout({
        description: about,
        executionDateOperation,
        id,
        idExisting: response[0].id
      })
    }

   
    return response;
  }
}