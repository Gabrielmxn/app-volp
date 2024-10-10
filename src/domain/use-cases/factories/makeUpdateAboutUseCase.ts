import { DrizzleAboutRepository } from "src/domain/repositories/drizzes/drizzle-about-repository"
import { UpdateAboutUseCase } from "../update-about-use-case"


export function makeUpdateAboutUseCase(){
  const aboutRepository = new DrizzleAboutRepository()
  const updateAboutUseCase = new UpdateAboutUseCase(aboutRepository)

  return updateAboutUseCase
}