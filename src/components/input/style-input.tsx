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

export const InputComponent = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.white
}))`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.ablGreen};
 color: ${(props) => props.theme.white};
`