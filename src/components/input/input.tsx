
import { Text, TextInput, View } from "react-native";
import { Container, Heading, InputComponent } from "./style-input";
import { MagnifyingGlass } from "phosphor-react-native";

export function Input(){
  return(
    <Container>
      <View>
        <Heading>Digite para pesquisar</Heading>
        <InputComponent
          placeholder="Palavra"
        >

        </InputComponent>
      </View>
      <MagnifyingGlass />
    </Container>
  )
}