import { Verbete } from "src/DTO/verbete";

export interface VerbeteRepositoriesEntidade {
  registerVerbete(data: Verbete): Promise<Verbete | null>
}