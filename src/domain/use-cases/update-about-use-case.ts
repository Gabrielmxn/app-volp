
import { AboutRepositoryEntity } from "../repositories/entity/about-entity"
import { about as aboutSchema } from "@db/schema"


export interface UpdateAboutUseCaseRequest {
  id: number
  about: string
  executionDateOperation: number
}
export class UpdateAboutUseCase{
  constructor(private aboutRepository: AboutRepositoryEntity){}

  async execute({id, about, executionDateOperation}: UpdateAboutUseCaseRequest){
    const response = await this.aboutRepository.findAbout()
    if(response.length === 0){
      const response = this.aboutRepository.registerAbout({
        id,
        description: about,
        executionDateOperation
      })
      return response
    }

    if(response[0].id === id){
      return
    }

     if(response[0].id !== id){
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