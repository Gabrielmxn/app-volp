import { DrizzesVerbeteRepositories } from "src/domain/repositories/drizzes/drizzes-verbete-repositories"
import { RegisterVeberteUseCase } from "../register-veberte-use-case"


export function makeRegisterVeberteUseCase(){
  const verbeteRepositories = new DrizzesVerbeteRepositories()
  const registerVeberteUseCase = new RegisterVeberteUseCase(verbeteRepositories)

  return registerVeberteUseCase
}