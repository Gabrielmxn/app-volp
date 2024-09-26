import { DrizzesSyncRepositories } from "src/domain/repositories/drizzes/drizzes-sync-repositories"
import { GetDateSyncUseCase } from "../get-date-sync"


export function makeGetDateSyncUseCase(){
  const syncRepositories = new DrizzesSyncRepositories()
  const getDateSync = new GetDateSyncUseCase(syncRepositories)

  return getDateSync
}