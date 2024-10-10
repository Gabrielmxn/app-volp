import { Sync } from "src/DTO/sync";
import { ISyncRepositories } from "../repositories/entidades/sync-entity";

export interface UpdateLastSyncUseCaseRequest {
  date: string
}
export interface UpdateLastSyncUseCaseResponse{
  sync: Sync | null
}
export class UpdateLastSyncUseCase{
  constructor(private syncRepositories: ISyncRepositories){}

  async execute({date}: UpdateLastSyncUseCaseRequest): Promise<UpdateLastSyncUseCaseResponse>{
    const sync = await this.syncRepositories.findById({
      date,
    })
    console.log("sync repositoryt ", sync)
    if(!sync){
      return {
        sync: null
      }
    }

    const updateSync = await this.syncRepositories.updateDateLastSync({
      date,
    })
console.log("sync repository ", updateSync)
    return {
      sync: updateSync
    }

    }
}