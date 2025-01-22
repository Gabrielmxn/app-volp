import { DrizzleAboutRepository } from "src/domain/repositories/drizzle/drizzle-about-repository"
import { FindAboutUseCase } from "../find-about-use-case"


export function makeFindAboutUseCase(){
  const aboutRepository = new DrizzleAboutRepository()
  const findAboutUseCase = new FindAboutUseCase(aboutRepository)

  return findAboutUseCase
}