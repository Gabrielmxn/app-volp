import { DrizzesVerbeteRepositories } from "src/domain/repositories/drizzes/drizzes-verbete-repositories"
import { UpdateVeberteUseCase } from "../update-verbete-use-case"


export function makeUpdateVerbeteUseCase(){
  const verbeteRepository = new DrizzesVerbeteRepositories()

  const updateVeberteUseCase = new UpdateVeberteUseCase(verbeteRepository)

  return updateVeberteUseCase
}

