
import Fuse from "fuse.js";
import { makeFetchVerbeteUseCase } from "src/domain/use-cases/verbete/factories/makeFetchVerbeteUseCase";
import { Verbete } from "src/DTO/verbete";

export let fuse: Fuse<Verbete>
export async function fuseConection(){
  const response = await makeFetchVerbeteUseCase().execute({})
  
  const options = {
    distance: 100,
    location: 0,
    
    keys: [
      "description"
    ],
    includeScore :true,
    threshold: 0,
    ignoreLocation: true
    
  } 
  const myIndex = Fuse.createIndex(options.keys, response)
  fuse = new Fuse(response, options, myIndex)
  console.log("Fuse conectado")
}