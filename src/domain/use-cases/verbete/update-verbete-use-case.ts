import { VerbeteRepositoriesEntity } from "src/domain/repositories/entity/verbete-entidades"


export interface UpdateVeberteUseCaseRequest {
  code: number
  description: string
  foreing: boolean
}
export class UpdateVeberteUseCase{
  constructor(private verbeteRepository: VerbeteRepositoriesEntity){}

  async execute({code, description, foreing}: UpdateVeberteUseCaseRequest){
    const verbeteExists = await this.verbeteRepository.findById({
      id: code
    })

    if(verbeteExists){
       const response = await this.verbeteRepository.updateVerbete({
      id: code, description, foreing})
      return response;
      }

      
    }
  }
