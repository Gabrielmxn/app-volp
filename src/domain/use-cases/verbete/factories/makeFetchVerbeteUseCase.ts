import { DrizzleVerbeteRepositories } from "src/domain/repositories/drizzle/drizzle-verbete-repositories"
import { FetchVeberteUseCase } from "../fetch-verbete-use-case"



export function makeFetchVerbeteUseCase(){
  const verbeteRepository = new DrizzleVerbeteRepositories()

  const fetchVeberteUseCase = new FetchVeberteUseCase(verbeteRepository)

  return fetchVeberteUseCase
}

