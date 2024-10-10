import { DrizzesVerbeteRepositories } from "src/domain/repositories/drizzes/drizzes-verbete-repositories"
import { FetchVeberteUseCase } from "../fetch-verbete-use-case"



export function makeFetchVerbeteUseCase(){
  const verbeteRepository = new DrizzesVerbeteRepositories()

  const fetchVeberteUseCase = new FetchVeberteUseCase(verbeteRepository)

  return fetchVeberteUseCase
}

