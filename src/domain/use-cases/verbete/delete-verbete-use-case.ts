import { VerbeteRepositoriesEntity } from "src/domain/repositories/entity/verbete-entidades"


export interface DeleteVeberteUseCaseRequest {
  code: number
  description: string
  foreing: boolean
}
export class DeleteVeberteUseCase{
  constructor(private verbeteRepository: VerbeteRepositoriesEntity){}

  async execute({code, description, foreing}: DeleteVeberteUseCaseRequest){
 
    const verbeteExists = await this.verbeteRepository.findById({
      id: code
    })

 
    if(verbeteExists){
       const response = await this.verbeteRepository.deleteVerbete({
          id: code, description, foreing
       })

       return response;
    }
  
    
  }
}