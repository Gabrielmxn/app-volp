import { makeRegisterVeberteUseCase } from "src/domain/use-cases/factories/makeRegisterVeberteUseCase";
import { makeDeleteVerbeteUseCase } from "src/domain/use-cases/verbete/factories/makeDeleteVerbeteUseCase";
import { makeUpdateVerbeteUseCase } from "src/domain/use-cases/verbete/factories/makeUpdateVerbeteUseCase";
import { Verbete } from "src/DTO/verbete";

export const method = {
  "INSERT": async (data: Verbete) => await makeRegisterVeberteUseCase().execute({
    ...data,
    code: data.id
  }),
  "UPDATE": async (data: Verbete) => await makeUpdateVerbeteUseCase().execute({
     ...data,
    code: data.id
  }),
  "DELETE": async (data: Verbete) => {
    await makeDeleteVerbeteUseCase().execute({
       ...data,
      code: data.id
    })
  },
} as const