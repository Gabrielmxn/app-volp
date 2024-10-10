import { VerbeteRepositoriesEntidade } from "../repositories/entidades/verbete-entidades"


export interface RegisterVeberteUseCaseRequest {
  code: number
  description: string
  foreing: boolean
}
export class RegisterVeberteUseCase{
  constructor(private verbeteRepository: VerbeteRepositoriesEntidade){}

  async execute({code, description, foreing}: RegisterVeberteUseCaseRequest){
     const existesVerbete = await this.verbeteRepository.findById({
      id: code
    })

    if(existesVerbete){
      console.error("O verbete já está cadastrado")
      return
    }
    
    const response = await this.verbeteRepository.registerVerbete({
      id: code, description, foreing
    })


    console.log('register', code, description, foreing)
    return response;
  }
}