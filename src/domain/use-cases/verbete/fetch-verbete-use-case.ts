import { VerbeteRepositoriesEntidade } from "src/domain/repositories/entidades/verbete-entidades"


export interface FetchVeberteUseCaseRequest {
 query?: string
}
export class FetchVeberteUseCase{
  constructor(private verbeteRepository: VerbeteRepositoriesEntidade){}

  async execute({query = ''}: FetchVeberteUseCaseRequest){
    const response = await this.verbeteRepository.fetchVerbete({
      query
    })

    // if(response.length === 0){
    //   const responseWithLev = await this.verbeteRepository.fetchVerbeteWithLev({
    //     query
    //   })
    //   console.log('dentro do IF responseWithLev')
    //   console.log(responseWithLev)
    //   return responseWithLev
    // }
   
    return response;
  }
}