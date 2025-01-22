import { About } from "src/DTO/about";
import { AboutRepositoryEntity, IUpdateAbout } from "../entity/about-entity";
import { eq } from "drizzle-orm";
import { about } from "@db/schema";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";




export class DrizzleAboutRepository implements AboutRepositoryEntity {
    private expoDb = openDatabaseSync('volp.db')
    private db = drizzle(this.expoDb)

  async findAbout() {
     const response = await this.db.select().from(about)


    return response
  }
  async registerAbout(data: About): Promise<About | null> {
    const { id, description, executionDateOperation} = data
     const response = await this.db.insert(about).values({id, description, executionDateOperation}).returning()
     return response[0]
  }

  async updateAbout(data: IUpdateAbout): Promise<About> {
    const response = await this.db.update(about).set(data).where(eq(about.id, data.idExisting)).returning()
    

    return response[0]

  }
}