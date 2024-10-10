
import { Text, TextInput, TextInputProps, View } from "react-native";
import { Container, ContainerInput, Heading, InputComponent, SearchIcon } from "./style-input";
import { MagnifyingGlass, Spinner } from "phosphor-react-native";
import { forwardRef, LegacyRef } from "react";

;
const SCHEMA = typeof TextInput
interface InputType extends TextInputProps{
  loading?: boolean
}


export const Input = forwardRef<TextInput, InputType>(function Input({loading = true, ...rest}: InputType, ref){
  return(
    <Container >
      <View>
        <Heading>Digite para pesquisar</Heading>
        <ContainerInput>
          <InputComponent
            placeholder="Palavra"
            
            {...rest}
            
            ref={ref}
          />
          {loading ?  <Spinner color="#FFFFFF"/> : <SearchIcon />}
        </ContainerInput>

      </View>
      
    </Container>
  )
})