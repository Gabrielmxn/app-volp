import { Image, Text, View } from "react-native";
import imageAbl from '@assets/abl_horizontal_verde_louro.png'
import { Container, Heading, Images } from "./style-header";
export function Header(){
  return(
    <Container>
      <Images 
      source={imageAbl}
      />
      <Heading>
        Vocabulário Ortográfico da Língua Portuguesa
      </Heading>
    </Container>
  )
}