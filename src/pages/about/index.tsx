import { ContainerAbout, Heading } from "./style";
import HTMLView from 'react-native-htmlview';
import { Text } from "react-native";
import { useAboutModel } from "./about.model";

type AboutView = ReturnType<typeof useAboutModel>

export function AboutView(props: AboutView){
  const { about } = props

  return(
    <ContainerAbout>
      <Heading>Sobre o VOLP</Heading>
      <Text>{about?.aboutDescription.length}</Text>
      {
        about?.aboutDescription &&
          <HTMLView 
            value={about?.aboutDescription}
            stylesheet={{
              p: {
                fontSize: 16,
                margin: 0,
                padding: 0,
                color: '#000',
              }
            }}
            paragraphBreak=""
          />
      }
     
    </ContainerAbout>
  )
}