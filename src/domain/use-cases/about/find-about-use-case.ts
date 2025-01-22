import { AboutRepositoryEntity } from "src/domain/repositories/entity/about-entity";

export interface FindAboutUseCaseRequest {}
export interface FindAboutUseCaseResponse {
  aboutDescription: string
}
export class FindAboutUseCase{
  constructor(private aboutRepository: AboutRepositoryEntity){}

  async execute({}: FindAboutUseCaseRequest): Promise<FindAboutUseCaseResponse>{
    const about = await this.aboutRepository.findAbout()

    return {
      aboutDescription: about[0].description
    }

    }
}