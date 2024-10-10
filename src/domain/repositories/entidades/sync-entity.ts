import { Sync } from "src/DTO/sync";

export interface FindByIdProps{
  id: number
}

export interface UpdateDateLastSyncProps {
  date: string
}
export interface ISyncRepositories {
  fetchDateOfLastSync(): Promise<Sync | null>
  findById(data: FindByIdProps): Promise<Sync | null>
  updateDateLastSync(data: UpdateDateLastSyncProps): Promise<Sync>
}