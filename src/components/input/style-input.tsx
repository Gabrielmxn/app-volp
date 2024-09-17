import { MagnifyingGlass } from "phosphor-react-native";
import { Text, TextInput, View } from "react-native";
import styled from "styled-components/native";

export const Container = styled(View)`
  width: 100%;
  margin-bottom: 16px;
`

export const Heading = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;;
`

export const ContainerInput = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 8px;
  background-color: ${(props) => props.theme.ablGreen};
`

export const SearchIcon = styled(MagnifyingGlass)`
  color: ${(props) => props.theme.white};

`
export const InputComponent = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.white
}))`
  width: 100%;

  flex: 1;
  background-color: ${(props) => props.theme.ablGreen};
 color: ${(props) => props.theme.white};
`
