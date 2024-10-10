import { makeGetDateSyncUseCase } from "src/domain/use-cases/factories/makeGetDateSyncUseCase";
import { makeVerbeteOfApiExternal } from "src/domain/use-cases/factories/makeVerbeteOfApiExternal";
import { method } from ".";
import { makeUpdateLastSyncUseCase } from "src/domain/use-cases/factories/makeUpdateLastSyncUseCase";
import { popular } from "drizzle/seed";
import { makeUpdateAboutUseCase } from "src/domain/use-cases/factories/makeUpdateAboutUseCase";



export async function  getVerbeteOfVolpExternalABL(){
  const { date } = await makeGetDateSyncUseCase().execute({})
  console.log(date)
  const response = await makeVerbeteOfApiExternal().execute({
    date: date ? date : '2024-10-02_01:15:20'
  })
console.log(response.syncDate)
  const {sync} = await makeUpdateLastSyncUseCase().execute({
    date: response.syncDate
  })

    for(let i of response.alters){
        method[i.operation]({
          id: i.code,
          foreing: i.estrangeira,
          description: i.description
        })
      }
 
 

if(response.about !== null)
  await makeUpdateAboutUseCase().execute({
    ...response.about
  })


}