import { DrizzleVerbeteRepositories } from "src/domain/repositories/drizzle/drizzle-verbete-repositories"
import { DeleteVeberteUseCase } from "../delete-verbete-use-case"


export function makeDeleteVerbeteUseCase(){
  const verbeteRepository = new DrizzleVerbeteRepositories()

  const deleteVeberteUseCase = new DeleteVeberteUseCase(verbeteRepository)

  return deleteVeberteUseCase
}

