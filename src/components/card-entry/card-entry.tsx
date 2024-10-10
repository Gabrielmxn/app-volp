import { Alert, View } from "react-native";
import { Container, Aux, Verbete, Tag, ViewDiv } from "./style-verbete-list";
import * as Clipboard from 'expo-clipboard';

interface CardEntryProps {
  description: string
  foreign: boolean
}
export function CardEntry({
  description,
  foreign
}: CardEntryProps){
  const regex =  /\w+\.*(\..*)/
  const verbete = description.replace(regex, '')
  const verbeteDescriptionRegex = description.replace(/\w+\.*(.)/, '').trim()
  const [_, auxVerbete] = description.split(verbete)
  const [auxVerbetes, tw] = description.split(verbeteDescriptionRegex)


  async function copyVerbete(verbeteForCopy: string){
    await Clipboard.setStringAsync(verbeteForCopy)
  }
  
  return(
    <Container onPress={() => copyVerbete(verbete ? verbete.trim() : auxVerbetes.trim())}>
     {
      verbete ?

      ( <>
      
      <Verbete>{verbete}</Verbete>
        <ViewDiv>
          <Aux>{auxVerbete.trim()}</Aux>
          {foreign && <Tag>Estrangeiro</Tag>}
        </ViewDiv>
      </>)
        :( <>
        
        <Verbete>{auxVerbetes}</Verbete>
        <ViewDiv>
          <Aux>{verbeteDescriptionRegex.trim()}</Aux>
          {foreign && <Tag>Estrangeiro</Tag>}
        </ViewDiv></>)
     }
    </Container>
  )
}