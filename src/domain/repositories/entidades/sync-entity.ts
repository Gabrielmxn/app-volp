import { Sync } from "src/DTO/sync";

export interface FindByIdProps{
  date: string
}

export interface UpdateDateLastSyncProps {
  date: string
}
export interface SyncRepositories {
  fetchDateOfLastSync(): Promise<Sync | null>
  findById(data: FindByIdProps): Promise<Sync | null>
  updateDateLastSync(data: UpdateDateLastSyncProps): Promise<Sync>
}