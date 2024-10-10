import { ISyncRepositories } from "../repositories/entidades/sync-entity";

export interface RegisterLastSynsUseCaseRequest {
  date: string
}
export interface RegisterLastSynsUseCaseResponse{}
export class RegisterLastSynsUseCase{
  constructor(private syncRepositories: ISyncRepositories){}

  async execute({date}: RegisterLastSynsUseCaseRequest){
    const sync = await this.syncRepositories.findById({
      date
    })
    console.log("o que é iossso", sync?.date)
    if(sync){
      return {
        sync
      }
    }

    if(!sync){
       return {
        date: "1980-08-05_01:15:20"
       }
    }

    return {
      sync
    }

    }
}