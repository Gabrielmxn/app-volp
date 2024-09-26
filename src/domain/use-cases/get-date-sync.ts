import { SyncRepositories } from "../repositories/entidades/sync-entity";

export interface GetDateSyncUseCaseRequest {}
export interface GetDateSyncUseCaseResponse {
  date: string | null
}
export class GetDateSyncUseCase{
  constructor(private syncRepositories: SyncRepositories){}

  async execute({}: GetDateSyncUseCaseRequest): Promise<GetDateSyncUseCaseResponse>{
    const responseSync = await this.syncRepositories.fetchDateOfLastSync()
    console.log(responseSync)
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