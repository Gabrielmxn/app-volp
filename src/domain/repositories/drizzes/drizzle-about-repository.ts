import { About } from "src/DTO/about";
import { IAboutRepository, IUpdateAbout } from "../entidades/about-entity";
import { eq } from "drizzle-orm";
import { about } from "@db/schema";
import { db } from "src/lib/db/drizzle/conection";



export class DrizzleAboutRepository implements IAboutRepository {
  async findAbout() {
     const response = await db.select().from(about)


    return response
  }
  registerAbout(): Promise<About | null> {
    throw new Error("Method not implemented.");
  }

  async updateAbout(data: IUpdateAbout): Promise<About> {
    const response = await db.update(about).set(data).where(eq(about.id, data.idExisting)).returning()
    

    return response[0]

  }
}