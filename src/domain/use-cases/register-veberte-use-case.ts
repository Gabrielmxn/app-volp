import { VerbeteRepositoriesEntidade } from "../repositories/entidades/verbete-entidades"


export interface RegisterVeberteUseCaseRequest {
  code: number
  description: string
  foreing: boolean
}
export class RegisterVeberteUseCase{
  constructor(private verbeteRepositoriesEntidade: VerbeteRepositoriesEntidade){}

  async execute({code, description, foreing}: RegisterVeberteUseCaseRequest){
    const response = await this.verbeteRepositoriesEntidade.registerVerbete({
      id: code, description, foreing
    })

    return response;
  }
}