import { DrizzleSyncRepositories } from "src/domain/repositories/drizzle/drizzle-sync-repositories"
import { UpdateLastSyncUseCase } from "../update-last-sync-use-case"


export function makeUpdateLastSyncUseCase(){
  const syncRepositories = new DrizzleSyncRepositories()
  const updateLastSyncUseCase = new UpdateLastSyncUseCase(syncRepositories)

  return updateLastSyncUseCase
}