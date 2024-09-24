import { Verbete } from "src/DTO/verbete";

export interface DrizzesVerbeteRepositoriesEntidade {
  registerVerbete(data: Verbete): Promise<Verbete | null>
}