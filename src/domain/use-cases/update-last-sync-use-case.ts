import { Sync } from "src/DTO/sync";
import { SyncRepositoriesEntity } from "../repositories/entity/sync-entity";

export interface UpdateLastSyncUseCaseRequest {
  date: string
}
export interface UpdateLastSyncUseCaseResponse{
  sync: Sync | null
}
export class UpdateLastSyncUseCase{
  constructor(private syncRepositories: SyncRepositoriesEntity){}

  async execute({date}: UpdateLastSyncUseCaseRequest): Promise<UpdateLastSyncUseCaseResponse>{
    const sync = await this.syncRepositories.fetchDateOfLastSync()
    if(!sync){
      return {
        sync: null
      }
    }

    const updateSync = await this.syncRepositories.updateDateLastSync({
      date,
    })

    return {
      sync: updateSync
    }

    }
}