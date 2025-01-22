import { VerbeteRepositoriesEntity } from "../repositories/entity/verbete-entidades"


export interface RegisterVeberteUseCaseRequest {
  code: number
  description: string
  foreing: boolean
}
export class RegisterVeberteUseCase{
  constructor(private verbeteRepository: VerbeteRepositoriesEntity){}

  async execute({code, description, foreing}: RegisterVeberteUseCaseRequest){
    try{
       const existesVerbete = await this.verbeteRepository.findById({
      id: code
    })

    if(!existesVerbete){
        const response = await this.verbeteRepository.registerVerbete({
        id: code, description, foreing
      })
    return response;
    }
  }catch(error: Error){
      console.log(error)
    }
    }
    
    



  }
