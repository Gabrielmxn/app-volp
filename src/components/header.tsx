import imagesLouro from '@assets/louro.png'
import { Container, Heading, Images } from "./style-header";
export function Header(){
  return(
    <Container>

    <Images 
        source={imagesLouro}
      />
      <Heading>
        Vocabulário Ortográfico da Língua Portuguesa
      </Heading>
    </Container>
  )
}