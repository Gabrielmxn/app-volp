import { Sync } from "src/DTO/sync";
import { SyncRepositories } from "../repositories/entidades/sync-entity";

export interface UpdateLastSyncUseCaseRequest {
  date: string
}
export interface UpdateLastSyncUseCaseResponse{
  sync: Sync | null
}
export class UpdateLastSyncUseCase{
  constructor(private syncRepositories: SyncRepositories){}

  async execute({date}: UpdateLastSyncUseCaseRequest): Promise<UpdateLastSyncUseCaseResponse>{
    const sync = await this.syncRepositories.findById({
      date,
    })

    if(sync){
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