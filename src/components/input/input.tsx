
import { Text, TextInput, View } from "react-native";
import { Container, ContainerInput, Heading, InputComponent, SearchIcon } from "./style-input";
import { MagnifyingGlass } from "phosphor-react-native";

export function Input(){
  return(
    <Container>
      <View>
        <Heading>Digite para pesquisar</Heading>
        <ContainerInput>
          <InputComponent
            placeholder="Palavra"
          />
          <SearchIcon />
        </ContainerInput>

      </View>
      
    </Container>
  )
}