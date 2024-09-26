import { DrizzesSyncRepositories } from "src/domain/repositories/drizzes/drizzes-sync-repositories"
import { GetDateSyncUseCase } from "../get-date-sync"
import { UpdateLastSyncUseCase } from "../update-last-sync-use-case"


export function makeUpdateLastSyncUseCase(){
  const syncRepositories = new DrizzesSyncRepositories()
  const updateLastSyncUseCase = new UpdateLastSyncUseCase(syncRepositories)

  return updateLastSyncUseCase
}