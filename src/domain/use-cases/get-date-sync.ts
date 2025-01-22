import { SyncRepositoriesEntity } from "../repositories/entity/sync-entity";

export interface GetDateSyncUseCaseRequest {}
export interface GetDateSyncUseCaseResponse {
  date: string | null
}
export class GetDateSyncUseCase{
  constructor(private syncRepositories: SyncRepositoriesEntity){}

  async execute({}: GetDateSyncUseCaseRequest): Promise<GetDateSyncUseCaseResponse>{

    const responseSync = await this.syncRepositories.fetchDateOfLastSync()

    if(!responseSync){
       return {
        date: null
       }
    }

    return {
      date: responseSync.date
    }

    }
}