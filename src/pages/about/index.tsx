import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { ContainerAbout, Description, Heading } from "./style";

import {  Dimensions, Text } from "react-native";
import { about, sync } from "@db/schema";
import { db } from "src/lib/db/drizzle/conection";
import RenderHTML, { MixedStyleDeclaration } from 'react-native-render-html';
import { useMemo } from "react";




//.replaceAll("<p>", '').replace("</p>", " ").replaceAll("</p>", "").split(" ")

export function AboutPage(){
  const {data} = useLiveQuery(db.select().from(about))
  const { width } = Dimensions.get('window');

  const tagsStyle = useMemo( () => ({
    body: { fontSize: 16 },
  } as Readonly<Record<string, MixedStyleDeclaration>> | undefined), [])
  return(
    <ContainerAbout>
      <Heading>Sobre o VOLP</Heading>
      {/* {
        data[0] && data[0]?.description.replaceAll("<p>", '//').replace("</p>", " ").replaceAll("</p>", "").split("//").map((resp, index) => <Description key={index}>{resp}</Description>)
      } */}
      {
        data[0] &&
        <RenderHTML 
       
        contentWidth={width}
        source={{ html: data[0].description }}
        tagsStyles={tagsStyle}
        
    />
      }
     
    </ContainerAbout>
  )
}