import { VerbeteRepositoriesEntidade } from "src/domain/repositories/entidades/verbete-entidades"


export interface FetchVeberteUseCaseRequest {
 query: string
}
export class FetchVeberteUseCase{
  constructor(private verbeteRepository: VerbeteRepositoriesEntidade){}

  async execute({query}: FetchVeberteUseCaseRequest){
    const response = await this.verbeteRepository.fetchVerbete({
      query
    })

    console.log("get verbete:", response)
    return response;
  }
}