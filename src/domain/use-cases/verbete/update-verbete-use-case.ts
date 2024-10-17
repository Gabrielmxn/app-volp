import { regexVerbete } from "@utils/regexVerbete"
import { soundex } from "soundex-code"
import { VerbeteRepositoriesEntidade } from "src/domain/repositories/entidades/verbete-entidades"


export interface UpdateVeberteUseCaseRequest {
  code: number
  description: string
  foreing: boolean
}
export class UpdateVeberteUseCase{
  constructor(private verbeteRepository: VerbeteRepositoriesEntidade){}

  async execute({code, description, foreing}: UpdateVeberteUseCaseRequest){
     console.log("update1 :", code, description, foreing)
    const verbeteExists = await this.verbeteRepository.findById({
      id: code
    })

    if(!verbeteExists){
      console.error("ID NOT FOUND")
    }
    const response = await this.verbeteRepository.updateVerbete({
      id: code, description, foreing, soundex: soundex(regexVerbete(description))
    })
    console.log("update:", response)

    return response;
  }
}