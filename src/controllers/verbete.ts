import { makeGetDateSyncUseCase } from "src/domain/use-cases/factories/makeGetDateSyncUseCase";
import { makeVerbeteOfApiExternal } from "src/domain/use-cases/factories/makeVerbeteOfApiExternal";
import { method } from ".";
import { makeUpdateLastSyncUseCase } from "src/domain/use-cases/factories/makeUpdateLastSyncUseCase";
import { makeUpdateAboutUseCase } from "src/domain/use-cases/factories/makeUpdateAboutUseCase";


interface GetVerbeteOfVolpExternalABLProps {
  setPorcentagem: (porcetagem: number) => void
}
export async function  getVerbeteOfVolpExternalABL({setPorcentagem}: GetVerbeteOfVolpExternalABLProps){
  const { date } = await makeGetDateSyncUseCase().execute({})
  
  const { about,alters, syncDate} = await makeVerbeteOfApiExternal().execute({
    date: date ? date : '1980-10-02_01:15:20'
  })

      let index = 0
     for await (let i of alters){
        const verbeteDescriptionRegex = i.description.replace(/\w+\.*(.)/, '').trim()
        const [auxVerbetes, tw] = i.description.split(verbeteDescriptionRegex)
        index++;

       const porcentagem = Math.floor((100 * index) / alters.length);
        if (porcentagem !== Math.floor((100 * (index - 1)) / alters.length)) {
          console.log("quanto está " + porcentagem)
          setPorcentagem(porcentagem);
        }
      

        await method[i.operation]({
          id: i.code,
          foreing: i.estrangeira,
          description: i.description,
        })

        await new Promise((resolve) => setTimeout(resolve, 0));

    
      }
 
 
 

  if(about !== null){
    await makeUpdateAboutUseCase().execute({
      ...about
    })
  }
  

  await makeUpdateLastSyncUseCase().execute({
    date: syncDate
  })
  return
}