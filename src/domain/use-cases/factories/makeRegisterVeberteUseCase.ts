import { DrizzleVerbeteRepositories } from "src/domain/repositories/drizzle/drizzle-verbete-repositories"
import { RegisterVeberteUseCase } from "../register-veberte-use-case"


export function makeRegisterVeberteUseCase(){
  const verbeteRepositories = new DrizzleVerbeteRepositories()
  const registerVeberteUseCase = new RegisterVeberteUseCase(verbeteRepositories)

  return registerVeberteUseCase
}