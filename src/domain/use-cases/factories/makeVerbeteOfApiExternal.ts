import { GetVerbeteOfApiExternalUseCase } from "../get-verbete-of-api-external"


export function makeVerbeteOfApiExternal(){
  const getVerbeteOfApiExternalUseCase = new GetVerbeteOfApiExternalUseCase()

  return getVerbeteOfApiExternalUseCase
}