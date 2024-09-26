import { makeRegisterVeberteUseCase } from "src/domain/use-cases/factories/makeRegisterVeberteUseCase";
import { Verbete } from "src/DTO/verbete";

export const method = {
  "INSERT": async (data: Verbete) => await makeRegisterVeberteUseCase().execute({
    ...data,
    code: data.id
  }),
  "UPDATE": () => console.log("update"),
  "DELETE": () => console.log("delete"),
}