import { VerbeteRepositoriesEntity } from "src/domain/repositories/entity/verbete-entidades"


export interface FetchVeberteUseCaseRequest {
 query?: string
}
export class FetchVeberteUseCase{
  constructor(private verbeteRepository: VerbeteRepositoriesEntity){}

  async execute({query = ''}: FetchVeberteUseCaseRequest){
    const response = await this.verbeteRepository.fetchVerbete({
      query
    })
   
    return response;
  }
}