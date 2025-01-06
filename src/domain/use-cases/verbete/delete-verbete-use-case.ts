import { VerbeteRepositoriesEntidade } from "src/domain/repositories/entidades/verbete-entidades"


export interface DeleteVeberteUseCaseRequest {
  code: number
  description: string
  foreing: boolean
}
export class DeleteVeberteUseCase{
  constructor(private verbeteRepository: VerbeteRepositoriesEntidade){}

  async execute({code, description, foreing}: DeleteVeberteUseCaseRequest){
    console.log("DELETADO1:", code, description, foreing)
    const verbeteExists = await this.verbeteRepository.findById({
      id: code
    })

    if(verbeteExists){
       const response = await this.verbeteRepository.deleteVerbete({
          id: code, description, foreing, soundex: null
       })

       return response;
    }
  
    
  }
}