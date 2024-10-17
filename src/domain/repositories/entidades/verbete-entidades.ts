import { Verbete } from "src/DTO/verbete";


export interface FindByIdProps {
  id: number
}
export interface FetchVerbeteProps{
  query?: string
}
export interface VerbeteRepositoriesEntidade {
  registerVerbete(data: Verbete): Promise<Verbete | null>
  findById(data: FindByIdProps): Promise<Verbete | null>
  updateVerbete(data: Verbete): Promise<Verbete | null>
  deleteVerbete(data: Verbete): Promise<Verbete | null>
  fetchVerbete(data: FetchVerbeteProps): Promise<Verbete[] | []>
  fetchVerbeteWithLev(data: FetchVerbeteProps): Promise<Verbete[] | []>
}