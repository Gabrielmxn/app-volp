import { DrizzleVerbeteRepositories } from "src/domain/repositories/drizzle/drizzle-verbete-repositories"
import { UpdateVeberteUseCase } from "../update-verbete-use-case"


export function makeUpdateVerbeteUseCase(){
  const verbeteRepository = new DrizzleVerbeteRepositories()

  const updateVeberteUseCase = new UpdateVeberteUseCase(verbeteRepository)

  return updateVeberteUseCase
}

