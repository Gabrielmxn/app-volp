import { DrizzesVerbeteRepositories } from "src/domain/repositories/drizzes/drizzes-verbete-repositories"
import { DeleteVeberteUseCase } from "../delete-verbete-use-case"


export function makeDeleteVerbeteUseCase(){
  const verbeteRepository = new DrizzesVerbeteRepositories()

  const deleteVeberteUseCase = new DeleteVeberteUseCase(verbeteRepository)

  return deleteVeberteUseCase
}

