import { SyncRepositoriesEntity } from "../repositories/entity/sync-entity";

export interface RegisterLastSyncUseCaseRequest {
  date: string
}
export interface RegisterLastSyncUseCaseResponse{}
export class RegisterLastSyncUseCase{
  constructor(private syncRepositories: SyncRepositoriesEntity){}

  async execute({date}: RegisterLastSyncUseCaseRequest){
    const sync = await this.syncRepositories.fetchDateOfLastSync()

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