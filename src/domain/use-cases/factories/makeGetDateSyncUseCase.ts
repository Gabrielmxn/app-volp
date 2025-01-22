import { DrizzleSyncRepositories } from "src/domain/repositories/drizzle/drizzle-sync-repositories"
import { GetDateSyncUseCase } from "../get-date-sync"


export function makeGetDateSyncUseCase(){
  const syncRepositories = new DrizzleSyncRepositories()
  const getDateSync = new GetDateSyncUseCase(syncRepositories)

  return getDateSync
}