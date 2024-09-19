import { useEffect, useState } from "react";
import { ContainerAbout, Description, Heading } from "./style";
import { About } from "src/DTO/db/about";
import { Alert, Text } from "react-native";
import { Sync } from "src/DTO/db/sync";
import { db } from "src/lib/db/drizzle";
import { about, sync } from "@db/schema";


export function AboutPage(){

  const [test, setTest] = useState<Sync>({} as Sync)
  const syncNew = {
    id: 1,
    date: '2024-03-02_01:15:20'
  }

  async function getAsync(){
    const resp = await db.select().from(sync)
    if(resp.length === 0){
      await db.insert(sync).values(syncNew)
    }
  }

  async function getAbout(){
   try{
    const te = await db.select().from(sync);
    if(te){
      console.log(te)
    }
   }catch(error){
    console.log(error)
   }
  }
  useEffect(() => {
    getAsync()
    getAbout()
  }, [])
  return(
    <ContainerAbout>
      <Heading>Sobre o VOLP</Heading>
      <Description>O Volp da Academia Brasileira de Letras faz o registro oficial das palavras da Língua Portuguesa, com especial atenção a sua vertente brasileira. Ele é continuamente atualizado por especialistas do idioma com base no uso extensivo de corpora e nos avanços da análise e processamento de informações.</Description>
      <Description>A versão 2023-2024 deste Vocabulário contém mais de 382.000 entradas, as respectivas classes gramaticais e informações suplementares precisas e breves, com as atualizações feitas ao longo do período.</Description>
      <Text>{test.date}</Text>
      <Text>{'test.date'}</Text>
    </ContainerAbout>
  )
}