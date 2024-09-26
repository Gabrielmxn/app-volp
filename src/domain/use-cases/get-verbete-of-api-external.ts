import { api } from "src/lib/axios/config"

interface VolpApiExternal {
  "code": number
  "description": string
  "estrangeira": boolean
  "operation": "DELETE" | "UPDATE" | "INSERT"
}

interface Alters {
  alters: VolpApiExternal[]
  syncDate: string
  about: {
    id: number
    about: string
  }
}
export interface GetVerbeteOfApiExternalUseCaseRequest {
  date: string
}
export class GetVerbeteOfApiExternalUseCase{
  constructor(){}

  async execute({date}: GetVerbeteOfApiExternalUseCaseRequest){
    const response = await api.get<Alters>(`/${date}`)

    return response.data
  }
}

