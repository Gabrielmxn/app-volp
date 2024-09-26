import { SyncRepositories } from "../repositories/entidades/sync-entity";

export interface RegisterLastSynsUseCaseRequest {
  id: number
}
export interface RegisterLastSynsUseCaseResponse{}
export class RegisterLastSynsUseCase{
  constructor(private syncRepositories: SyncRepositories){}

  async execute({id}: RegisterLastSynsUseCaseRequest){
    const repsonseSync = await this.syncRepositories.findById({
      id,
    })

    if(!repsonseSync){
       return {
        date: "1980-08-05_01:15:20"
       }
    }

    return {
      date: repsonseSync.date
    }

    }
}