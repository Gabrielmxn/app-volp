import { makeGetDateSyncUseCase } from "src/domain/use-cases/factories/makeGetDateSyncUseCase";
import { makeVerbeteOfApiExternal } from "src/domain/use-cases/factories/makeVerbeteOfApiExternal";
import { method } from ".";
import { makeUpdateLastSyncUseCase } from "src/domain/use-cases/factories/makeUpdateLastSyncUseCase";
import { popular } from "drizzle/seed";


export async function  getVerbeteOfVolpExternalABL(){
  const { date } = await makeGetDateSyncUseCase().execute({})

  // await executeSQLFile()

  if(!date){
    console.log(date)
    console.log("POPULAR")
    await popular()
  } 

  const response = await makeVerbeteOfApiExternal().execute({
    date: date ? date : '2024-09-26_13:59:29'
  })

  const {sync} = await makeUpdateLastSyncUseCase().execute({
    date: response.syncDate
  })

  if(!sync){
    for(let i of response.alters){
        method[i.operation]({
          id: i.code,
          foreing: i.estrangeira,
          description: i.description
        })
      }
  }
 

}