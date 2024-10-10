import { about } from './../../../db/schema';
import { About } from "src/DTO/about";

export interface IUpdateAbout{
  description: string
  executionDateOperation: number
  id: number
  idExisting: number
}

// type AboutReturning {

// }
export interface IAboutRepository {
  updateAbout(data: IUpdateAbout): Promise<About>
  findAbout(): Promise<About[] | []>
  registerAbout(): Promise<About | null>
}