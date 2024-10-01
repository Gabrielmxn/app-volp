import { VerbeteRepositoriesEntidade } from "../repositories/entidades/verbete-entidades"


export interface RegisterVeberteUseCaseRequest {
  code: number
  description: string
  foreing: boolean
}
export class RegisterVeberteUseCase{
  constructor(private verbeteRepository: VerbeteRepositoriesEntidade){}

  async execute({code, description, foreing}: RegisterVeberteUseCaseRequest){
    const response = await this.verbeteRepository.registerVerbete({
      id: code, description, foreing
    })

    return response;
  }
}